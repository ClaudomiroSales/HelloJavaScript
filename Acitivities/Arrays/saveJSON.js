"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
// Create an array of Person objects
var data = [
    { id: 1, name: "Alice", age: 28 },
    { id: 2, name: "Bob", age: 34 },
    { id: 3, name: "Carol", age: 22 }
];
// Convert array to JSON string
var jsonData = JSON.stringify(data, null, 2);
// Write JSON to a file
fs.writeFile('people.json', jsonData, function (err) {
    if (err) {
        console.error("Error writing file:", err);
    }
    else {
        console.log("File saved successfully as people.json");
    }
});
