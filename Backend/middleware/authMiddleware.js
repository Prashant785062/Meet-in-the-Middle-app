import jwt from 'jsonwebtoken';

/* 
  Function: authenticateToken
Middleware to protect routes by verifying JWT tokens.
  1. Extracts the token from the 'Authorization' header.
  2. Checks if a token exists; if not, denies access.
  3. Verifies the token using the JWT secret.
  4. If token is valid, attaches user info to req.user and allows route to continue.
  5. If token is invalid or expired, returns an error response.
*/
export const authenticateToken = (req, res, next) => {
  try {
    // Get the Authorization header from request
    const authHeader = req.headers['authorization'];

   
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Access denied. No token provided.'
      });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({
          success: false,
          message: 'Invalid token.'
        });
      }

      req.user = user;

      //  next() to proceed to the actual route handler
      next();
    });
  } catch (error) {
    console.error('Auth Middleware Error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};
