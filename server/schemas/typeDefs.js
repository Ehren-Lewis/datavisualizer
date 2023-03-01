const { gql } = require("apollo-server-express");

const typeDefs = gql`

    type bookData {
        value: String
        children: [bookData]
    }

    type Query {
        bookData: bookData
    }

`;

module.exports = typeDefs;