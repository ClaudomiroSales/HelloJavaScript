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

// Define the expected structure of the objects
type Person = {
  id: number;
  name: string;
  age: number;
};

// Load the JSON file (synchronously for simplicity)
const rawData = fs.readFileSync('people.json', 'utf-8');

// Parse the JSON content into an array of Person
const people: Person[] = JSON.parse(rawData);

console.log(people);
