const registereUser = (req, res) => {
  res.send("User registered");
};

const loginUser = (req, res) => {
  res.send("User login");
};

const getMe = (req, res) => {
  res.send("User data");
};

export { registereUser, loginUser, getMe };
