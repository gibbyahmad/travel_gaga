// Use D3 fetch to read the JSON file
// The data from the JSON file is arbitrarily named importedData as the argument
d3.json("country_tour.json").then((importedData) => {
    // console.log(importedData);
    var data = importedData;
  
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
      x: data.map(row => row.country),
      y: data.map(row => row.In_avg_expense),
      text: data.map(row => row.country),
      mode: 'markers',
      textposition: 'top center',
      textfont: {
          family:'Raleway, sans-serif'},
          marker: { size: 15 },
      name: "Arrivals",
      type: "scatter",
      
    };
  
    // Trace2 for the Departures Data
    var trace2 = {
        x: data.map(row => row.country),
        y: data.map(row => row.Out_avg_expense),
        text: data.map(row => row.country),
        mode: 'markers',
        textposition: 'top center',
        textfont: {
            family:'Raleway, sans-serif'},
            marker: { size: 12 },
        name: "Departures",
        type: "scatter",
        
      };


    var data = [trace1,trace2];
    var layout = {
        yaxis: {range: [1000, 160000],zeroline:false, title:"Tourist Expenditures US$ million"},
        legend: {y: 0.5,  yref: 'paper',
        font: {family: 'Arial, sans-serif', size: 18, color: 'black', } },
        title:'Top 10 in Arrivals: Arrivals vs Departures'};

    // Render plotly
    Plotly.newPlot('myDiv', data, layout);
});