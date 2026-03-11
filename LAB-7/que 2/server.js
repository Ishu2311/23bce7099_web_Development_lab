const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

let db;

// Connect to MongoDB
async function connectDB(){
await client.connect();
db = client.db("bookstore");
console.log("MongoDB Connected");
}

connectDB();


// 1️⃣ Search Books by Title
app.get("/books/search", async (req,res)=>{

let title = req.query.title;

let books = await db.collection("books")
.find({title:{$regex:title,$options:"i"}})
.toArray();

res.json(books);

});


// 2️⃣ Filter Books by Category
app.get("/books/category/:cat", async (req,res)=>{

let cat = req.params.cat;

let books = await db.collection("books")
.find({category:cat})
.toArray();

res.json(books);

});


// 3️⃣ Sort by Price
app.get("/books/sort/price", async (req,res)=>{

let books = await db.collection("books")
.find()
.sort({price:1})
.toArray();

res.json(books);

});


// 4️⃣ Sort by Rating
app.get("/books/sort/rating", async (req,res)=>{

let books = await db.collection("books")
.find()
.sort({rating:-1})
.toArray();

res.json(books);

});


// 5️⃣ Top Rated Books
app.get("/books/top", async (req,res)=>{

let books = await db.collection("books")
.find({rating:{$gte:4}})
.limit(5)
.toArray();

res.json(books);

});


// 6️⃣ Pagination
app.get("/books", async (req,res)=>{

let page = parseInt(req.query.page) || 1;
let limit = 5;
let skip = (page-1)*limit;

let books = await db.collection("books")
.find()
.skip(skip)
.limit(limit)
.toArray();

res.json(books);

});


// Start Server
app.listen(3000, ()=>{

console.log("Server running at http://localhost:3000");

});
