
// import { python } from "pythonia"

// const randomInt = await python("../python/main.py")

// const pd = await python("pandas");

// d = {"col1": 2, "col2": [1, 2]}

// currentDF = await pd.DataFrame(data=d)

// console.log(await currentDF.to_string())

// // console.log(await randomInt.create_number())
// python.exit()

const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require('path');
const PORT = process.env.PORT || 3001;
const db = require("./config/connection.js");


const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json());



app.get("/", (req, res) => {
    res.send(JSON.stringify("sauccess"))
})

app.get("/data_information", (req, res) => {
    var childProcessSpawn = require("child_process").spawn;
    var process = childProcessSpawn('python', ['./test.py']);
    process.stdout.on('data', (data) => {
        // console.log(data.toString())
        res.send(data.toString())
    })
})

const { Data } = require("./models/books.js");

db.once("open", () => {

    // const curr = db.collection("DataSets").find({value: "Books"})

    // Data.find({}).then( (val, err) => {
    //     err ? console.log(err) : console.log(data)
        
    // })
    console.log(Data);

    app.listen(PORT, () => {
        console.log(`listening on http://localhost:${PORT}`)
        console.log(`quick data: http://localhost:${PORT}/data_information`)
    })
    
})