/*
1. Make sure you’re in a Node.js project

npm init -y

This command is used to quickly create a package.json file in your project directory, 
which is essential for managing a Node.js project.

🔹npm = Node Package Manager, used to manage libraries and tools in Node.js.

🔹init = Initializes a new Node.js project (creates a package.json file).

🔹-y = Automatically answers "yes" to all prompts (uses default values).

With -y, it skips the questions and immediately creates a package.json like this:

{
  "name": "my-project",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}

2. Install Node.js type definitions

npm install --save-dev @types/node

This command installs type definitions for Node.js so that TypeScript 
understands Node.js-specific features like fs, path, process, etc.

🔹--save-dev
Adds the package to the devDependencies section of your package.json, meaning:

It's only needed during development (not when running your app in production).

For example, TypeScript needs type definitions to compile, but they’re not needed 
after compilation.

🔹 @types/node
This is the TypeScript type definition package for Node.js. 
It tells the TypeScript compiler what types Node.js built-in modules 
(like fs, http, os) have.

Why You Need It
TypeScript doesn't include Node.js types by default. 
Without this, you’ll see errors like:
Cannot find module 'fs'

*/

import * as fs from 'fs';

// Define a type for your objects
type Person = {
  id: number;
  name: string;
  age: number;
};

// Create an array of Person objects
const data: Person[] = [
  { id: 1, name: "Alice", age: 28 },
  { id: 2, name: "Bob", age: 34 },
  { id: 3, name: "Carol", age: 22 }
];

// Convert array to JSON string
const jsonData = JSON.stringify(data, null, 2);

// Write JSON to a file
fs.writeFile('people.json', jsonData, (err) => {
  if (err) {
    console.error("Error writing file:", err);
  } else {
    console.log("File saved successfully as people.json");
  }
});

/*

How it works:

- JSON.stringify(data, null, 2) converts the array to a readable JSON format.

- fs.writeFile() writes the JSON string to a file.

- You’ll find the output in a file called data.json in the same directory.

ATENÇÂO: This only works in a Node.js environment, not in browsers 
(browsers can’t write files directly to the filesystem without user interaction).
*/