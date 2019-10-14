var svgWidth = 1000;
var svgHeight = 500;

var margin = {
  top: 100,
  right: 50,
  bottom: 50,
  left: 200
};

var height = svgHeight - margin.top - margin.bottom;
var width = svgWidth - margin.left - margin.right;

// Create an SVG wrapper, append an SVG group that will hold our chart, and shift the latter by left and top margins.
var svg = d3
  .select("body")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

d3.csv("tourist.csv", function(error, countryData) {
if (error) throw error;

console.log(countryData);
console.log([countryData]);

countryData.forEach(function(data) {
    data.country = data.country;
    data.arrivals_avg = +data.arrivals_avg;
    data.departure_avg = +data.departure_avg;
    data.in_expense=+data.In_avg_expense;
    data.out_expense=+data.Out_avg_expense;
  });

// Create scaling functions
var xScale = d3.scaleBand()
.domain(countryData, d => d.country)
.range([0, width])
.padding(0.1);

var yLinearScale1 = d3.scaleLinear()
.domain([0, d3.max(countryData, d => d.arrivals_avg)])
.range([height, 0]);

// var yLinearScale2 = d3.scaleLinear()
// .domain([0, d3.max(countryData, d => d.departure_avg)])
// .range([height, 0]);

var yLinearScale3 = d3.scaleLinear()
.domain([0, d3.max(countryData, d => d.in_expense)])
.range([height, 0]);

// var yLinearScale4 = d3.scaleLinear()
// .domain([0, d3.max(countryData, d => d.out_expense)])
// .range([height, 0]);

// Create axis functions
var bottomAxis = d3.axisBottom(xScale);
var leftAxis = d3.axisLeft(yLinearScale1);
var rightAxis = d3.axisRight(yLinearScale3);

// Add x-axis
chartGroup.append("g")
.attr("transform", `translate(0, ${height})`)
.call(bottomAxis);

// Add y1-axis to the left side of the display
chartGroup.append("g")
// Define the color of the axis text
.classed("green", true)
.call(leftAxis);

// Add y2-axis to the right side of the display
chartGroup.append("g")
// Define the color of the axis text
.classed("blue", true)
.attr("transform", `translate(${width}, 0)`)
.call(rightAxis);

// Line generators for each line
var line1 = d3.line()
.x(d => xScale(d.country))
.y(d => yLinearScale1(d.in_expense));

var line2 = d3.line()
.x(d => xScale(d.country))
.y(d => yLinearScale2(d.out_expense));

// Append a path for line1
chartGroup.append("path")
.data([countryData])
.attr("d", line1)
.classed("line green", true);

// Append a path for line2
chartGroup.append("path")
.data([countryData])
.attr("d", line2)
.classed("line blue", true);

// Append axes titles
chartGroup.append("text")
.attr("transform", `translate(${width / 2}, ${height + margin.top + 20})`)
.classed("dow-text text", true)
.text("Average Arrivals");

chartGroup.append("text")
.attr("transform", `translate(${width / 2}, ${height + margin.top + 37})`)
.classed("smurf-text text", true)
.text("Average Expense Credit");
});
