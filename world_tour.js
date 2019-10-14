Plotly.d3.csv('country_tour.csv', function(err, rows){
      function unpack(rows, key) {
          return rows.map(function(row) { return row[key]; });
      }
 var data = [{
  type: 'choropleth',
  locationmode: 'country names',
  locations: unpack(rows, 'country'),
  z: unpack(rows, 'arrivals_avg'),
  text: unpack(rows, 'country'),
  autocolorscale: true
}];


var layout = {
    title: 'Average Arrivals in the World',
    showlegend: false,
    geo: {
      projection: {
        type: 'robinson'
      }
      
    }
};

Plotly.plot(myplot, data, layout, {showLink: false, showSendToCloud: true});
});