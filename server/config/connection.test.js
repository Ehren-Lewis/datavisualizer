const { mongoose } = require("mongoose");

require("dotenv").config();

describe("connection", () => {
    let db;

    beforeAll(async () => {

        mongoose.connect(
            process.env.MONGODB_URI,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        )

        db = mongoose.connection;


    });

    it("will show the connection to the database", async () => {
        db.once("open", () => {
            expect(db.readyState).toBe(1);
        })
    }) 

    afterAll(async () => {
        db.close()
    }
    )
})