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
      y: data.map(row => row.In_avg_expense),
      text: data.map(row => row.country),
      mode: 'markers+text',
      textposition: 'top center',
      textfont: {
          family:'Raleway, sans-serif'},
          marker: { size: 12 },
      name: "Arrivals",
      type: "scatter",
      
    };
  
    // Trace1 for the Arrivals Data
    var trace2 = {
        x: data.map(row => row.departure_avg),
        y: data.map(row => row.Out_avg_expense),
        text: data.map(row => row.country),
        mode: 'markers+text',
        textposition: 'top center',
        textfont: {
            family:'Times New Roman'},
            marker: { size: 12 },
        name: "Departures",
        type: "scatter",
        
      };


    var data = [ trace1, trace2 ];
    var layout = {
        xaxis: {range: [ 10000, 80000 ],zeroline:false, title:"Number of Tourist in thousands"},
        yaxis: {range: [1000, 160000],zeroline:false, title:"Tourist Expenditures US$ million"},
        legend: {y: 0.5,  yref: 'paper',
        font: {family: 'Arial, sans-serif', size: 20, color: 'black', } },
        title:'Top 10 in Arrivals: Arrivals vs Departures'};

    // Render plotly
    Plotly.newPlot('myDiv', data, layout);
});