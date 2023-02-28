const { mongoose, Schema, model} = require("mongoose");
// const bookdata = require("./books");
// const connection = require('../config/connection');
require("dotenv").config();
describe("BookData", () => {
    let connection;
    let db;

    beforeAll( async () => {
        mongoose.connect(
            process.env.MONGODB_URI,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        )

        db = mongoose.connection;
    });

    afterAll( async () => {
        db.close();
    });

    it('should pull information from the datasets collection', async () => {

        const dataSchema = new Schema({
            value: {type: String},
            children: {type: Array}
        })
                
        const DataModel = model("datasets", dataSchema);

        const dataValue = DataModel.findById("63fd79db0efde9084e07f3c2", (err, data) => {
            return data
         });

         
        expect(dataValue).toBeDefined();
    })



})