// Import the events module
const EventEmitter = require('events');

// Create an EventEmitter instance
const eventEmitter = new EventEmitter();

// ==================== CUSTOM EVENTS ====================

// 1. Simple event without data
eventEmitter.on('welcome', () => {
    console.log('🎉 Welcome to the Event-Driven Node.js App!');
});

// 2. Event with data (user information)
eventEmitter.on('userLogin', (username, role) => {
    console.log(`🔐 User Logged In: ${username} | Role: ${role}`);
    console.log(`   Time: ${new Date().toLocaleTimeString()}\n`);
});

// 3. Event with object data
eventEmitter.on('orderPlaced', (order) => {
    console.log('🛒 New Order Received:');
    console.log(`   Order ID: ${order.id}`);
    console.log(`   Customer: ${order.customer}`);
    console.log(`   Amount: ₹${order.amount}`);
    console.log(`   Items: ${order.items.join(', ')}\n`);
});

// 4. Multiple listeners for the same event
eventEmitter.on('paymentProcessed', (payment) => {
    console.log(`💰 Payment Processed: ₹${payment.amount} via ${payment.method}`);
});

eventEmitter.on('paymentProcessed', (payment) => {
    console.log(`📧 Email receipt sent to ${payment.email}`);
});

eventEmitter.on('paymentProcessed', (payment) => {
    console.log(`📊 Transaction logged successfully\n`);
});

// 5. Event with error handling
eventEmitter.on('error', (err) => {
    console.error('❌ Error occurred:', err.message);
});

// 6. Asynchronous event demonstration
eventEmitter.on('processData', (data) => {
    console.log(`⏳ Processing data asynchronously: ${data.message}`);
    
    // Simulate async operation
    setTimeout(() => {
        console.log(`✅ Data processed successfully! Result: ${data.result}`);
        eventEmitter.emit('dataProcessed', data.result);
    }, 1500);
});

eventEmitter.on('dataProcessed', (result) => {
    console.log(`🎯 Final result received: ${result}\n`);
});

// ==================== TRIGGERING EVENTS ====================

console.log('🚀 Starting Event-Driven Application...\n');

// Trigger events
eventEmitter.emit('welcome');

eventEmitter.emit('userLogin', 'Iswarya', 'Admin');

eventEmitter.emit('orderPlaced', {
    id: 'ORD-20260408-001',
    customer: 'Iswarya',
    amount: 2599,
    items: ['Laptop Stand', 'Wireless Mouse', 'USB Hub']
});

eventEmitter.emit('paymentProcessed', {
    amount: 2599,
    method: 'UPI',
    email: 'iswarya@example.com'
});

// Demonstrate asynchronous behavior
eventEmitter.emit('processData', {
    message: 'Analyzing user activity...',
    result: 'High engagement detected'
});

// Trigger an error event
setTimeout(() => {
    eventEmitter.emit('error', new Error('Simulated database connection failed'));
}, 2000);

console.log('📌 All events have been emitted. Waiting for async responses...\n');