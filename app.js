const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });

app.use(cors());
app.use(express.json())

const unicornModel = require("./models/unicorn");

app.post("/search", async (req, res) => {

    console.log(req.body)

    if (req.body.type ==="nameSearch"){
    var selectionArgument = {}
     if (req.body.name) 
     selectionArgument = {
        name: req.body.name,
    }
    var projectionArgument = {}
    if (req.body.projectionFilters.name == true && req.body.projectionFilters.weight == false) {
        
    
        projectionArgument = {"name": 1, "_id": 0}

    }

    //Todo
    //  else if (req.body.projection.name == false && req.body.projection.weight == true) {
    //     projectionArgument = {name: 0, weight: 1, _id: 0}
    // } else if (req.body.projection.name == true && req.body.projection.weight == true) {
    //     projectionArgument = {name: 1, weight: 1, _id: 0}
    // } else {
    //     projectionArgument = {name: 0, weight: 0, _id: 0}
    // }
    
    const result = await unicornModel.find(
        
            selectionArgument, projectionArgument
        
    );
  res.json(result);}

  //Todo
//   else if (req.body.type ==="weightSearch"){
//     const result = await unicornModel.find(
//         {
//             age: req.body.age,
//         }
//     )
//   res.json(result);}

//Todo
//   else if (req.body.type === "foodSearch"){
//     const result = await unicornModel.find(
//         {
//             weight: req.body.weight,
//         }
//     )
//     res.json(result);}
    
});

module.exports = app