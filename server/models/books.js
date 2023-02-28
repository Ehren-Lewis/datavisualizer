const { Schema, model } = require("mongoose");


const dataSchema = new Schema({
    value: {type: String},
    children: {type: Array}
})



const DataModel = model("datasets", dataSchema);


DataModel.findById("63fd79db0efde9084e07f3c2", (err, data) => {
    err ? console.log(err) : console.log(data)
})

// db.close()