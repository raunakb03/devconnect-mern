const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  // Get token form the  header
  const token = req.header("x-auth-token");

  // check if no token
  if (!token) {
    return res.status(401).json({ msg: "No Token, autorization denied!" });
  }

  // Verify token

  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));
    req.user = decoded.user; // setting the id of the requested user from the database
  } catch (error) {
    res.status(401).json({ msg: "Token is not Valid" });
  }

  next();
};

// jwt.verfy will verify the token.If th token is valid then it will save the user in the decoded and the user database id in the user.id which we can use anywhere in the program to get the user information
