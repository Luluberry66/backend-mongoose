// const express = require('express')
// const app = express()


// app.listen(3000,() => {
//     console.log('Server is running on port 3000')
// })

// app.get("/search", (req, res) => {
//     res.send("Hello World")
// })
const app = require('./app')

const mongoose = require("mongoose");
main().catch(err => console.log(err));
async function main(){
    // await mongoose.connect("mongodb://127.0.0.1:27017/test")
    await mongoose.connect(
      "mongodb+srv://luluberry66:rOEpGF3yDhggwutQ@cluster0.jgg9qsc.mongodb.net/?retryWrites=true&w=majority"
    );
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
}
