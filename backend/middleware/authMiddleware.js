import jwt from "jsonwebtoken";
import { User } from "../models/userModel.js";

const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT);
      req.user = await User.findById(decoded.id).select({ password: -1 });
      next();
    } catch (error) {
      console.log(error);
      return res.send(401).send("Not authorized");
    }
  }

  if (!token) {
    res.status(401).send("No token, not authorized");
  }
};

export { protect };
