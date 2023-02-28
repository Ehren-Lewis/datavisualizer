// testing mongoose schema first

const { BookModel } = require("../models")



const resolvers = {
    Query: {
        books: async () => {
            return await BookModel.findOne({value: "Books"})
        }
    }
}

module.exports = resolvers;