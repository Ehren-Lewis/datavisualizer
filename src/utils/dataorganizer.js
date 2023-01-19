// // import fetch from 'fetch';
// var fs = require('fs');
// var tidy = require("@tidyjs/tidy")
// const getData = () => {

//     fs.readFile('../data/books_new.json', (err, data) => {
//         if (err)
//           console.log(err);
//         else {
//           var json = JSON.parse(data);
//           return json
//         //your code using json object
//         }
//     })

// }


// const data = getData();


// tidy(data, tidy.rename({Title: "newTitle"}) )


// import { tidy, rename } from "@tidyjs/tidy";
// import * as data from "../data/books_new.json";

// const Handler = () => {
//     const result = tidy(data, rename({Title : "newTitle"}))
//     return result;
// }



// // export default 

//  export default Handler;

import { python } from "pythonia"

const data = await python("../../../book-data-manipulation/main.py")
const test = await data.Testclass();

console.log(await test.return_base())
python.exit();