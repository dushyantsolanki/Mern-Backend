import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  //   console.log(req.headers.authorization);
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(401).json({ message: "Unauthorized...." }); // Unauthorized if no token is found

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "invalid token ...." }); // Forbidden if token is invalid
    req.user = user; // Add the user information to the request object
    next();
  });
};

export { authMiddleware };
