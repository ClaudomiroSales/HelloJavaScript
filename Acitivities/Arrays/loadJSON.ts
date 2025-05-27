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
