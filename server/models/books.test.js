const { mongoose, Schema, model} = require("mongoose");
// const bookdata = require("./books");
// const connection = require('../config/connection');
require("dotenv").config();
describe("BookData", () => {
    let connection;
    let db;
    let dataSchema;
    let DataModel;

    beforeAll( async () => {
        mongoose.connect(
            process.env.MONGODB_URI,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        )

        db = mongoose.connection;

        dataSchema = new Schema({
            value: {type: String},
            children: {type: Array}
        })
                
        DataModel = model("datasets", dataSchema);

    });

    afterAll( async () => {
        db.close();
    });

    it('should pull information from the datasets collection', async () => {

        const dataValue = await DataModel.findById("63fd79db0efde9084e07f3c2", (err, data) => {
            if (data) {
                return data
            }
         });
         
        expect(dataValue).toBeDefined();
    })

     // switch to .thens
    it("should pull up the infrmation by using the findby method", async () => {
        const dataInformation = await DataModel.find({value: "Bodosdks"}, (err, data) => {
            if (data) {
                return data
            }
        })

        expect(dataInformation).toBeDefined();
    })



})