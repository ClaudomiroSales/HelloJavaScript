"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
// Load the JSON file (synchronously for simplicity)
var rawData = fs.readFileSync('people.json', 'utf-8');
// Parse the JSON content into an array of Person
var people = JSON.parse(rawData);
console.log(people);
