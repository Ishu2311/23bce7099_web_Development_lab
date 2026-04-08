// server.js - Simple Node.js HTTP Server (No frameworks)

const http = require('http');   // Import built-in http module

// Create the server using createServer()
const server = http.createServer((req, res) => {
    
    // Log incoming request to console
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);

    // Set response headers
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('X-Powered-By', 'Node.js HTTP Server');
    
    // Handle different routes
    if (req.url === '/' || req.url === '/home') {
        // Home page
        res.writeHead(200);  // OK status
        res.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Node.js HTTP Server</title>
                <style>
                    body { font-family: Arial, sans-serif; text-align: center; padding: 50px; background: #f4f7f9; }
                    h1 { color: #333; }
                    p { color: #555; font-size: 18px; }
                    .info { margin-top: 30px; padding: 20px; background: white; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
                </style>
            </head>
            <body>
                <h1>🎉 Hello from Node.js!</h1>
                <p>This server is built using only the built-in <strong>http</strong> module.</p>
                <div class="info">
                    <p><strong>Request URL:</strong> ${req.url}</p>
                    <p><strong>Method:</strong> ${req.method}</p>
                    <p><strong>Node.js Version:</strong> ${process.version}</p>
                </div>
                <p style="margin-top: 40px; color: #888;">
                    Server is running successfully on port 3000
                </p>
            </body>
            </html>
        `);
        res.end();
    } 
    else if (req.url === '/about') {
        res.writeHead(200);
        res.write(`
            <h1>About This Server</h1>
            <p>This is a simple Node.js HTTP server created for learning purposes.</p>
            <p>It demonstrates how to handle HTTP requests and responses using only core modules.</p>
        `);
        res.end();
    } 
    else {
        // 404 Not Found
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write(`
            <h1>404 - Page Not Found</h1>
            <p>The page you're looking for doesn't exist.</p>
            <p><a href="/">Go back to Home</a></p>
        `);
        res.end();
    }
});

// Define the port
const PORT = 3000;

// Start the server using listen()
server.listen(PORT, () => {
    console.log(`=======================================`);
    console.log(`🚀 Node.js HTTP Server is running!`);
    console.log(`📍 Listening on http://localhost:${PORT}`);
    console.log(`=======================================`);
    console.log(`Available routes:`);
    console.log(`   → http://localhost:${PORT}/`);
    console.log(`   → http://localhost:${PORT}/about`);
    console.log(`=======================================`);
});