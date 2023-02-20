
// import { python } from "pythonia"

// const randomInt = await python("../python/main.py")

// const pd = await python("pandas");

// d = {"col1": 2, "col2": [1, 2]}

// currentDF = await pd.DataFrame(data=d)

// console.log(await currentDF.to_string())

// // console.log(await randomInt.create_number())
// python.exit()

var express = require("express");

const app = express();

const port = 3000;

app.listen(port, () => {
    console.log(`listening on ${port}`)
})



app.get("/data_information", (req, res) => {
    var childProcessSpawn = require("child_process").spawn;
    var process = childProcessSpawn('python', ['./test.py']);
    process.stdout.on('data', (data) => {
        console.log(data.toString())
        res.send(data.toString())
    })
})