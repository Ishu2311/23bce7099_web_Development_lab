// file-operations.js
// Node.js File System Operations using fs module (Callback Style)

const fs = require('fs');   // Import built-in fs module
const path = require('path');

// Define file path
const filePath = path.join(__dirname, 'demo.txt');

// Step 1: Create a new file using fs.writeFile()
function createFile() {
    const initialContent = "Hello from Node.js File System!\n" +
                           "This file was created using fs.writeFile()\n" +
                           `Created at: ${new Date().toString()}\n`;

    fs.writeFile(filePath, initialContent, (err) => {
        if (err) {
            console.error("❌ Error creating file:", err.message);
            return;
        }
        console.log("✅ File created successfully: demo.txt");
        console.log("-----------------------------------");
        readFile();   // Proceed to next operation
    });
}

// Step 2: Read the contents of the file using fs.readFile()
function readFile() {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error("❌ Error reading file:", err.message);
            return;
        }
        console.log("📖 File Content:");
        console.log(data);
        console.log("-----------------------------------");
        appendToFile();   // Proceed to next operation
    });
}

// Step 3: Append data to the existing file using fs.appendFile()
function appendToFile() {
    const newData = `\n--- Appended Data ---\n` +
                    `This line was appended using fs.appendFile()\n` +
                    `Appended at: ${new Date().toString()}\n`;

    fs.appendFile(filePath, newData, (err) => {
        if (err) {
            console.error("❌ Error appending to file:", err.message);
            return;
        }
        console.log("📝 Data appended successfully to demo.txt");
        console.log("-----------------------------------");
        readFileAgain();   // Read again to show updated content
    });
}

// Step 4: Read the file again to show updated content
function readFileAgain() {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error("❌ Error reading updated file:", err.message);
            return;
        }
        console.log("📖 Updated File Content:");
        console.log(data);
        console.log("-----------------------------------");
        deleteFile();   // Proceed to delete
    });
}

// Step 5: Delete the file using fs.unlink()
function deleteFile() {
    fs.unlink(filePath, (err) => {
        if (err) {
            console.error("❌ Error deleting file:", err.message);
            return;
        }
        console.log("🗑️  File deleted successfully: demo.txt");
        console.log("===================================");
        console.log("🎉 All file operations completed successfully!");
    });
}

// Start the file operations
console.log("🚀 Starting Node.js File System Operations...");
console.log("===================================");

createFile();