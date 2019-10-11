function makeplot() {
    Plotly.d3.csv("tourist.csv", function(data){ processData(data) } );

};
   
function processData(allRows) {

   console.log(allRows);
   var country = [], arrivals_avg = [], departure_avg = [];

   for (var i=0; i<allRows.length; i++) {
       row = allRows[i];
       country.push( row['country'] );
       arrivals_avg.push( row['arrivals_avg'] );
       departure_avg.push(row['departure_avg']);
   }
   console.log( 'Country',country, 'Average_Arrivals',arrivals_avg, 'Average_Departure',departure_avg );
   makePlotly( country, arrivals_avg, departure_avg );
}

function makePlotly( country, arrivals_avg, departure_avg ){
   var plotDiv = document.getElementById("plot");
   var trace1 = {
       x: country, 
       y: arrivals_avg,
       name: 'Average Arrivals',
       type: 'bar'
   };

   var trace2 = {
    x: country, 
    y: departure_avg,
    name: 'Average Departure',
    type: 'bar'
};

var data=[trace1, trace2];

var layout={
    title: 'Arrivals v/s Departure in Top 30 countries',
    xaxis: {
        title: 'Country',
        tickfont: {
        size: 10,
        color: 'rgb(107, 107, 107)',
        automargin: true
      }},
    yaxis: {
      title: 'Passengers (100 Thousand)',
      titlefont: {
        size: 10,
        color: 'rgb(107, 107, 107)',
        automargin: true
      },
      tickfont: {
        size: 10,
        color: 'rgb(107, 107, 107)'
      }
    },

    barmode: 'group',
    bargap: 0.5,
    bargroupgap: 0.1
  };


   Plotly.newPlot('Bar', data, layout, {responsive: true});
};

makeplot();