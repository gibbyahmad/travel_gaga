console.log("hello")
console.log("How are you?")

link ="/api/jsdata";

// Fetch the JSON data and console log it
d3.json(link).then(function(data) {
  console.log(data);
});

// Promise Pending
const dataPromise = d3.json(link);
console.log("Data Promise: ", dataPromise);