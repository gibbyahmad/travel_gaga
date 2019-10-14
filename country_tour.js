// var js_object = JSON.parse('country_tour.json');
// Use D3 fetch to read the JSON file
// The data from the JSON file is arbitrarily named importedData as the argument
d3.json("country_tour.json").then((importedData) => {
    // console.log(importedData);
    var data = importedData;
    console.log(data);
  
    // Sort the data array using the arrivals_avg value
    data.sort(function(a, b) {
      return parseFloat(b.arrivals_avg) - parseFloat(a.arrivals_avg);
    });
  
    // Slice the first 10 objects for plotting
    data = data.slice(0, 10);
  
    // Reverse the array due to Plotly's defaults
    data = data.reverse();
  
    // Trace1 for the Arrivals Data
    var trace1 = {
      x: data.map(row => row.arrivals_avg),
      y: data.map(row => row.country),
      text: data.map(row => row.country),
      name: "Arrivals",
      type: "bar",
      fill: "orange",
      orientation: "v"
    };
  
    // data
    var chartData = [trace1];
  
    // Apply the group bar mode to the layout
    var layout = {
      title: "Top 10 Countries with most Number of Tourist Arrivals",
      xaxis: {zeroline:false, title:"Tourist Arrivals (in thousands)"},
      autosize: true,
      width: 800,
      height: 500,
      margin: {
        l: 200,
        r: 50,
        t: 100,
        b: 50
      }
    };
  
    // Render the plot to the div tag with id "plot"
    Plotly.newPlot("tourPlot", chartData, layout);
  });
  
