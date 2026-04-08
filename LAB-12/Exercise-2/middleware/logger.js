// middleware/logger.js

// Global Request Logger Middleware
const requestLogger = (req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.url}`);
  console.log(`IP: ${req.ip} | Headers: ${JSON.stringify(req.headers['user-agent'])}`);
  console.log('---');
  next(); // Important: Pass control to next middleware/route
};

// Middleware to add custom property to request object
const addRequestTime = (req, res, next) => {
  req.requestTime = new Date();
  console.log(`Request time added: ${req.requestTime}`);
  next();
};

// Middleware to check for API Key (Route-level example)
const apiKeyMiddleware = (req, res, next) => {
  const apiKey = req.header('x-api-key');

  if (!apiKey || apiKey !== '12345') {
    return res.status(401).json({
      success: false,
      message: 'Access Denied! Invalid or missing API Key'
    });
  }

  console.log('✅ API Key validated successfully');
  next();
};

// Middleware to log response time
const responseTimeLogger = (req, res, next) => {
  const start = Date.now();

  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`Response Time: ${duration}ms | Status: ${res.statusCode}`);
  });

  next();
};

module.exports = {
  requestLogger,
  addRequestTime,
  apiKeyMiddleware,
  responseTimeLogger
};