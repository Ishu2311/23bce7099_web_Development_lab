// config/db.js
const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    
    console.log(`✅ MongoDB Connected Successfully!`);
    console.log(`   Host: ${conn.connection.host}`);
    console.log(`   Database: ${conn.connection.name}`);
  } catch (error) {
    console.error('❌ MongoDB Connection Error:', error.message);
    
    if (error.message.includes('ECONNREFUSED') || error.message.includes('querySrv')) {
      console.log('\n💡 Tip: This is usually a DNS issue. The fix is already added in server.js');
    }
    
    process.exit(1);
  }
};

module.exports = connectDB;