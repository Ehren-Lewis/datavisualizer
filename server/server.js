
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
const cors = require("cors");
const { typeDefs, resolvers } = require("./schemas");

const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors())


// app.get("/", (req, res) => {
//     res.send(JSON.stringify("sauccess"))
// })

app.get("/data_information", (req, res) => {
    var childProcessSpawn = require("child_process").spawn;
    var process = childProcessSpawn('python', ['./test.py']);
    process.stdout.on('data', (data) => {
        res.send(data.toString())
    })
})

const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true
})

// const startApollogServer = async (typeDefs, resolvers) => {
    // await server.start();
    // server.applyMiddleware({ app });

    db.once("open", () => {


        app.listen(PORT, () => {
            console.log(`listening on http://localhost:${PORT}`)
            // console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`)
        })
        
    })
// }

// startApollogServer(typeDefs, resolvers);

