function makeplot() {
    Plotly.d3.csv("tourist.csv", function(data){ processData1(data) } );

};
   
function processData1(allRows) {

   console.log(allRows);
   var country = [], arrivals_avg = [], departure_avg = [], in_avg_expense=[], out_avg_expense=[];

   for (var i=0; i<allRows.length; i++) {
       row = allRows[i];
       country.push( row['country'] );
       arrivals_avg.push( row['arrivals_avg'] );
       departure_avg.push(row['departure_avg']);
       in_avg_expense.push(row['In_avg_expense']);
       out_avg_expense.push(row['Out_avg_expense']);
   }
   console.log( 'Country',country, 'Average_Arrivals',arrivals_avg, 'Average_Departure',departure_avg, 'Tourism_Expenditure_Credit',in_avg_expense, 'Tourism_Expenditure_Debit',out_avg_expense );
   makePlotly(country, arrivals_avg,in_avg_expense);
//    makePlotly3(country,departure_avg,out_avg_expense);
}
 

function makePlotly( country, arrivals_avg,in_avg_expense ){
   var plotDiv = document.getElementById("plot");
   var trace1 = {
       x: country, 
       y: arrivals_avg,
       name: 'Average Arrivals',
       type: 'bar'
   };

   var trace2 = {
    x: country, 
    y: in_avg_expense,
    name: 'In_avg_expense',
    type: 'scatter'
};

var data=[trace1, trace2];

var layout={
    title: 'Arrivals v/s Expense',
    xaxis: {
        title: 'Country',
        tickfont: {
        size: 10,
        color: 'rgb(107, 107, 107)',
        automargin: true
      }},
    yaxis: {
      title: 'Expenditure (Credit- USD million)',
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
  };

   Plotly.newPlot('plot', data, layout, {responsive: true});
};

makeplot();