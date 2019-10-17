window.addEventListener("load", function(){
   // Create a map object
var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 3
});

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets-basic",
  accessToken: "pk.eyJ1IjoiZ2licmFuYWhtYWQiLCJhIjoiY2swdHNkNGE1MDkxdzNqbDhlcm56dm85ZCJ9.Z1T0ZqiVr5Fo4er_s-HoHQ"
}).addTo(myMap);

// Define a markerSize function that will give each city a different radius based on its population
function markerSize(arrivals) {
  return arrivals / 200;
}

const myjson=[
  {
    "country": "AFGHANISTAN",
    "latitude": 33.93911,
    "longtitude": 67.709953,
    "arrivals_avg": 0,
    "In_avg_expense": 46.91304348,
    "departure_avg": 0,
    "Out_avg_expense": 50.47826087
  },
  {
    "country": "ALBANIA",
    "latitude": 41.153332,
    "longtitude": 20.168331,
    "arrivals_avg": 3111,
    "In_avg_expense": 1070.478261,
    "departure_avg": 2358.782609,
    "Out_avg_expense": 844.8695652
  },
  {
    "country": "ALGERIA",
    "latitude": 28.033886,
    "longtitude": 1.659626,
    "arrivals_avg": 1530,
    "In_avg_expense": 189.7391304,
    "departure_avg": 1819.913043,
    "Out_avg_expense": 381
  },
  {
    "country": "AMERICAN SAMOA",
    "latitude": -14.270972,
    "longtitude": -170.132217,
    "arrivals_avg": 24,
    "In_avg_expense": 0,
    "departure_avg": 0,
    "Out_avg_expense": 0
  },
  {
    "country": "ANDORRA",
    "latitude": 42.546245,
    "longtitude": 1.601554,
    "arrivals_avg": 2101,
    "In_avg_expense": 0,
    "departure_avg": 0,
    "Out_avg_expense": 0
  },
  {
    "country": "ANGOLA",
    "latitude": -11.202692,
    "longtitude": 17.873887,
    "arrivals_avg": 252,
    "In_avg_expense": 404.8695652,
    "departure_avg": 0.260869565,
    "Out_avg_expense": 174.9565217
  },
  {
    "country": "ANGUILLA",
    "latitude": 18.220554,
    "longtitude": -63.068615,
    "arrivals_avg": 58,
    "In_avg_expense": 25.08695652,
    "departure_avg": 0,
    "Out_avg_expense": 10.86956522
  },
  {
    "country": "ANTIGUA AND BARBUDA",
    "latitude": 17.060816,
    "longtitude": -61.796428,
    "arrivals_avg": 240,
    "In_avg_expense": 138.5652174,
    "departure_avg": 0,
    "Out_avg_expense": 45.47826087
  },
  {
    "country": "ARGENTINA",
    "latitude": -38.416097,
    "longtitude": -63.616672,
    "arrivals_avg": 4211,
    "In_avg_expense": 4088.913043,
    "departure_avg": 5491.391304,
    "Out_avg_expense": 4744.73913
  },
  {
    "country": "ARMENIA",
    "latitude": 40.069099,
    "longtitude": 45.038189,
    "arrivals_avg": 518,
    "In_avg_expense": 445.3478261,
    "departure_avg": 491.5652174,
    "Out_avg_expense": 417.0434783
  },
  {
    "country": "ARUBA",
    "latitude": 12.52111,
    "longtitude": -69.968338,
    "arrivals_avg": 807,
    "In_avg_expense": 1133.565217,
    "departure_avg": 0,
    "Out_avg_expense": 222.0434783
  },
  {
    "country": "AUSTRALIA",
    "latitude": -25.274398,
    "longtitude": 133.775136,
    "arrivals_avg": 7358,
    "In_avg_expense": 22633.26087,
    "departure_avg": 5770.043478,
    "Out_avg_expense": 15833.56522
  },
  {
    "country": "AUSTRIA",
    "latitude": 47.516231,
    "longtitude": 14.550072,
    "arrivals_avg": 21166,
    "In_avg_expense": 9378.608696,
    "departure_avg": 7602.391304,
    "Out_avg_expense": 9541.826087
  },
  {
    "country": "AZERBAIJAN",
    "latitude": 40.143105,
    "longtitude": 47.576927,
    "arrivals_avg": 2356,
    "In_avg_expense": 926.0434783,
    "departure_avg": 3480.782609,
    "Out_avg_expense": 925.6521739
  },
  {
    "country": "BAHAMAS",
    "latitude": 25.03428,
    "longtitude": -77.39628,
    "arrivals_avg": 1500,
    "In_avg_expense": 1982.086957,
    "departure_avg": 0,
    "Out_avg_expense": 279.7826087
  },
  {
    "country": "BAHRAIN",
    "latitude": 25.930414,
    "longtitude": 50.637772,
    "arrivals_avg": 8764,
    "In_avg_expense": 1623.73913,
    "departure_avg": 206.1304348,
    "Out_avg_expense": 546.5652174
  },
  {
    "country": "BANGLADESH",
    "latitude": 23.684994,
    "longtitude": 90.356331,
    "arrivals_avg": 185,
    "In_avg_expense": 71.7826087,
    "departure_avg": 1211.173913,
    "Out_avg_expense": 253.9130435
  },
  {
    "country": "BARBADOS",
    "latitude": 13.193887,
    "longtitude": -59.543198,
    "arrivals_avg": 537,
    "In_avg_expense": 736.7391304,
    "departure_avg": 0,
    "Out_avg_expense": 104.3478261
  },
  {
    "country": "BELARUS",
    "latitude": 53.709807,
    "longtitude": 27.953389,
    "arrivals_avg": 2583,
    "In_avg_expense": 524.1304348,
    "departure_avg": 726.0434783,
    "Out_avg_expense": 546.173913
  },
  {
    "country": "BELGIUM",
    "latitude": 50.503887,
    "longtitude": 4.469936,
    "arrivals_avg": 6948,
    "In_avg_expense": 6640.304348,
    "departure_avg": 8442.391304,
    "Out_avg_expense": 15203.13043
  },
  {
    "country": "BELIZE",
    "latitude": 17.189877,
    "longtitude": -88.49765,
    "arrivals_avg": 242,
    "In_avg_expense": 12.73913043,
    "departure_avg": 0,
    "Out_avg_expense": 38.7826087
  },
  {
    "country": "BENIN",
    "latitude": 9.30769,
    "longtitude": 2.315834,
    "arrivals_avg": 178,
    "In_avg_expense": 118.6956522,
    "departure_avg": 0,
    "Out_avg_expense": 36.82608696
  },
  {
    "country": "BERMUDA",
    "latitude": 32.321384,
    "longtitude": -64.75737,
    "arrivals_avg": 286,
    "In_avg_expense": 135.9130435,
    "departure_avg": 55.91304348,
    "Out_avg_expense": 177.2608696
  },
  {
    "country": "BHUTAN",
    "latitude": 27.514162,
    "longtitude": 90.433601,
    "arrivals_avg": 54,
    "In_avg_expense": 48.47826087,
    "departure_avg": 0,
    "Out_avg_expense": 24.65217391
  },
  {
    "country": "BOLIVIA, PLURINATIONAL STATE OF",
    "latitude": -16.290154,
    "longtitude": -63.588653,
    "arrivals_avg": 574,
    "In_avg_expense": 369.1304348,
    "departure_avg": 530,
    "Out_avg_expense": 298.2608696
  },
  {
    "country": "BONAIRE",
    "latitude": 12.2019,
    "longtitude": -68.2624,
    "arrivals_avg": 44,
    "In_avg_expense": 0,
    "departure_avg": 0,
    "Out_avg_expense": 2.782608696
  },
  {
    "country": "BOSNIA AND HERZEGOVINA",
    "latitude": 43.915886,
    "longtitude": 17.679076,
    "arrivals_avg": 317,
    "In_avg_expense": 516.9130435,
    "departure_avg": 0,
    "Out_avg_expense": 121.6956522
  },
  {
    "country": "BOTSWANA",
    "latitude": -22.328474,
    "longtitude": 24.684866,
    "arrivals_avg": 1234,
    "In_avg_expense": 446.3913043,
    "departure_avg": 0,
    "Out_avg_expense": 229.0434783
  },
  {
    "country": "BRAZIL",
    "latitude": -14.235004,
    "longtitude": -51.92528,
    "arrivals_avg": 4932,
    "In_avg_expense": 4152.434783,
    "departure_avg": 5331.695652,
    "Out_avg_expense": 10308.69565
  },
  {
    "country": "BRITISH VIRGIN ISLANDS",
    "latitude": 18.420695,
    "longtitude": -64.639968,
    "arrivals_avg": 318,
    "In_avg_expense": 336.4347826,
    "departure_avg": 50.30434783,
    "Out_avg_expense": 0
  },
  {
    "country": "BRUNEI DARUSSALAM",
    "latitude": 4.535277,
    "longtitude": 114.727669,
    "arrivals_avg": 559,
    "In_avg_expense": 0,
    "departure_avg": 0,
    "Out_avg_expense": 310.6956522
  },
  {
    "country": "BULGARIA",
    "latitude": 42.733883,
    "longtitude": 25.48583,
    "arrivals_avg": 5065,
    "In_avg_expense": 2871.173913,
    "departure_avg": 3883.652174,
    "Out_avg_expense": 1033.652174
  },
  {
    "country": "BURKINA FASO",
    "latitude": 12.238333,
    "longtitude": -1.561593,
    "arrivals_avg": 192,
    "In_avg_expense": 68.43478261,
    "departure_avg": 0,
    "Out_avg_expense": 49.2173913
  },
  {
    "country": "BURUNDI",
    "latitude": -3.373056,
    "longtitude": 29.918886,
    "arrivals_avg": 128,
    "In_avg_expense": 1.256521739,
    "departure_avg": 8.130434783,
    "Out_avg_expense": 36.86956522
  },
  {
    "country": "CABO VERDE",
    "latitude": 16.002082,
    "longtitude": -24.013197,
    "arrivals_avg": 270,
    "In_avg_expense": 252.826087,
    "departure_avg": 0,
    "Out_avg_expense": 77.91304348
  },
  {
    "country": "CAMBODIA",
    "latitude": 12.565679,
    "longtitude": 104.990963,
    "arrivals_avg": 2064,
    "In_avg_expense": 1420.608696,
    "departure_avg": 535.5652174,
    "Out_avg_expense": 177.6521739
  },
  {
    "country": "CAMEROON",
    "latitude": 7.369722,
    "longtitude": 12.354722,
    "arrivals_avg": 730,
    "In_avg_expense": 276.2608696,
    "departure_avg": 0,
    "Out_avg_expense": 345.3913043
  },
  {
    "country": "CANADA",
    "latitude": 56.130366,
    "longtitude": -106.346771,
    "arrivals_avg": 17999,
    "In_avg_expense": 14048.17391,
    "departure_avg": 24418.13043,
    "Out_avg_expense": 21453.04348
  },
  {
    "country": "CAYMAN ISLANDS",
    "latitude": 19.513469,
    "longtitude": -80.566956,
    "arrivals_avg": 330,
    "In_avg_expense": 497.4782609,
    "departure_avg": 0,
    "Out_avg_expense": 0
  },
  {
    "country": "CENTRAL AFRICAN REPUBLIC",
    "latitude": 6.611111,
    "longtitude": 20.939444,
    "arrivals_avg": 32,
    "In_avg_expense": 6.695652174,
    "departure_avg": 3.260869565,
    "Out_avg_expense": 20.30434783
  },
  {
    "country": "CHAD",
    "latitude": 15.454166,
    "longtitude": 18.732207,
    "arrivals_avg": 74,
    "In_avg_expense": 7.782608696,
    "departure_avg": 22.43478261,
    "Out_avg_expense": 0
  },
  {
    "country": "CHILE",
    "latitude": -35.675147,
    "longtitude": -71.542969,
    "arrivals_avg": 2690,
    "In_avg_expense": 2166.73913,
    "departure_avg": 1760.826087,
    "Out_avg_expense": 1209.652174
  },
  {
    "country": "CHINA",
    "latitude": 35.86166,
    "longtitude": 104.195397,
    "arrivals_avg": 43876,
    "In_avg_expense": 6321.26087,
    "departure_avg": 50107.43478,
    "Out_avg_expense": 70081.82609
  },
  {
    "country": "COLOMBIA",
    "latitude": 4.570868,
    "longtitude": -74.297333,
    "arrivals_avg": 3903,
    "In_avg_expense": 2759.73913,
    "departure_avg": 2030.043478,
    "Out_avg_expense": 2233.73913
  },
  {
    "country": "COMOROS",
    "latitude": -11.875001,
    "longtitude": 43.872219,
    "arrivals_avg": 22,
    "In_avg_expense": 19.30434783,
    "departure_avg": 0,
    "Out_avg_expense": 5.869565217
  },
  {
    "country": "CONGO",
    "latitude": -0.228021,
    "longtitude": 15.827659,
    "arrivals_avg": 194,
    "In_avg_expense": 28.69565217,
    "departure_avg": 14.82608696,
    "Out_avg_expense": 135.5652174
  },
  {
    "country": "CONGO, DEMOCRATIC REPUBLIC OF THE",
    "latitude": -4.038333,
    "longtitude": 21.758664,
    "arrivals_avg": 105,
    "In_avg_expense": 0,
    "departure_avg": 38.26086957,
    "Out_avg_expense": 76.86956522
  },
  {
    "country": "COOK ISLANDS",
    "latitude": -21.236736,
    "longtitude": -159.777671,
    "arrivals_avg": 92,
    "In_avg_expense": 97,
    "departure_avg": 10.91304348,
    "Out_avg_expense": 0
  },
  {
    "country": "COSTA RICA",
    "latitude": 9.748917,
    "longtitude": -83.753428,
    "arrivals_avg": 1735,
    "In_avg_expense": 2143.434783,
    "departure_avg": 562.2608696,
    "Out_avg_expense": 467.5217391
  },
  {
    "country": "CÔTE D'IVOIRE",
    "latitude": 7.539989,
    "longtitude": -5.54708,
    "arrivals_avg": 352,
    "In_avg_expense": 135.6086957,
    "departure_avg": 0,
    "Out_avg_expense": 302.3478261
  },
  {
    "country": "CROATIA",
    "latitude": 45.1,
    "longtitude": 15.2,
    "arrivals_avg": 8141,
    "In_avg_expense": 6493.956522,
    "departure_avg": 1047.521739,
    "Out_avg_expense": 798.173913
  },
  {
    "country": "CUBA",
    "latitude": 21.521757,
    "longtitude": -77.781167,
    "arrivals_avg": 2261,
    "In_avg_expense": 2232.130435,
    "departure_avg": 209.6086957,
    "Out_avg_expense": 0
  },
  {
    "country": "CURAÇAO",
    "latitude": 12.1696,
    "longtitude": -68.99,
    "arrivals_avg": 304,
    "In_avg_expense": 392.8695652,
    "departure_avg": 0,
    "Out_avg_expense": 133.8695652
  },
  {
    "country": "CYPRUS",
    "latitude": 35.126413,
    "longtitude": 33.429859,
    "arrivals_avg": 2455,
    "In_avg_expense": 2490.130435,
    "departure_avg": 906.9130435,
    "Out_avg_expense": 914.7826087
  },
  {
    "country": "CZECH REPUBLIC",
    "latitude": 49.817492,
    "longtitude": 15.472962,
    "arrivals_avg": 11596,
    "In_avg_expense": 4874.913043,
    "departure_avg": 4534.347826,
    "Out_avg_expense": 3275.086957
  },
  {
    "country": "DENMARK",
    "latitude": 56.26392,
    "longtitude": 9.501785,
    "arrivals_avg": 6649,
    "In_avg_expense": 0,
    "departure_avg": 6154.608696,
    "Out_avg_expense": 7390.869565
  },
  {
    "country": "DJIBOUTI",
    "latitude": 11.825138,
    "longtitude": 42.590275,
    "arrivals_avg": 29,
    "In_avg_expense": 0,
    "departure_avg": 0,
    "Out_avg_expense": 9.495652174
  },
  {
    "country": "DOMINICA",
    "latitude": 15.414999,
    "longtitude": -61.370976,
    "arrivals_avg": 74,
    "In_avg_expense": 0,
    "departure_avg": 0,
    "Out_avg_expense": 12.04347826
  },
  {
    "country": "DOMINICAN REPUBLIC",
    "latitude": 18.735693,
    "longtitude": -70.162651,
    "arrivals_avg": 3759,
    "In_avg_expense": 0,
    "departure_avg": 389.826087,
    "Out_avg_expense": 337.3913043
  },
  {
    "country": "ECUADOR",
    "latitude": -1.831239,
    "longtitude": -78.183406,
    "arrivals_avg": 938,
    "In_avg_expense": 739.3043478,
    "departure_avg": 790.8695652,
    "Out_avg_expense": 454.3478261
  },
  {
    "country": "EGYPT",
    "latitude": 26.820553,
    "longtitude": 30.802498,
    "arrivals_avg": 7543,
    "In_avg_expense": 6900.347826,
    "departure_avg": 3211.043478,
    "Out_avg_expense": 2020
  },
  {
    "country": "EL SALVADOR",
    "latitude": 13.794185,
    "longtitude": -88.89653,
    "arrivals_avg": 997,
    "In_avg_expense": 658.1304348,
    "departure_avg": 1531.173913,
    "Out_avg_expense": 223.9565217
  },
  {
    "country": "EQUATORIAL GUINEA",
    "latitude": 1.650801,
    "longtitude": 10.267895,
    "arrivals_avg": 0,
    "In_avg_expense": 1.713043478,
    "departure_avg": 0,
    "Out_avg_expense": 0
  },
  {
    "country": "ERITREA",
    "latitude": 15.179384,
    "longtitude": 39.782334,
    "arrivals_avg": 133,
    "In_avg_expense": 39.82608696,
    "departure_avg": 0,
    "Out_avg_expense": 0
  },
  {
    "country": "ESTONIA",
    "latitude": 58.595272,
    "longtitude": 25.013607,
    "arrivals_avg": 1951,
    "In_avg_expense": 997.9565217,
    "departure_avg": 1214.043478,
    "Out_avg_expense": 567.3913043
  },
  {
    "country": "ESWATINI",
    "latitude": -26.5225,
    "longtitude": 31.4659,
    "arrivals_avg": 640,
    "In_avg_expense": 36.65217391,
    "departure_avg": 782.4782609,
    "Out_avg_expense": 43.95652174
  },
  {
    "country": "ETHIOPIA",
    "latitude": 9.145,
    "longtitude": 40.489673,
    "arrivals_avg": 383,
    "In_avg_expense": 1010.869565,
    "departure_avg": 11,
    "Out_avg_expense": 139.6956522
  },
  {
    "country": "FIJI",
    "latitude": -16.578193,
    "longtitude": 179.414413,
    "arrivals_avg": 532,
    "In_avg_expense": 682.173913,
    "departure_avg": 94,
    "Out_avg_expense": 85.86956522
  },
  {
    "country": "FINLAND",
    "latitude": 61.92411,
    "longtitude": 25.748151,
    "arrivals_avg": 4377,
    "In_avg_expense": 3633.826087,
    "departure_avg": 6566.956522,
    "Out_avg_expense": 3538.086957
  },
  {
    "country": "FRANCE",
    "latitude": 46.227638,
    "longtitude": 2.213749,
    "arrivals_avg": 76581,
    "In_avg_expense": 49269.04348,
    "departure_avg": 22698.26087,
    "Out_avg_expense": 31765.6087
  },
  {
    "country": "FRENCH GUIANA",
    "latitude": 3.933889,
    "longtitude": -53.125782,
    "arrivals_avg": 93,
    "In_avg_expense": 12.2173913,
    "departure_avg": 0,
    "Out_avg_expense": 0
  },
  {
    "country": "FRENCH POLYNESIA",
    "latitude": -17.679742,
    "longtitude": -149.406843,
    "arrivals_avg": 192,
    "In_avg_expense": 474.3478261,
    "departure_avg": 29.47826087,
    "Out_avg_expense": 119.3913043
  },
  {
    "country": "GABON",
    "latitude": -0.803689,
    "longtitude": 11.609444,
    "arrivals_avg": 90,
    "In_avg_expense": 50.73913043,
    "departure_avg": 52.26086957,
    "Out_avg_expense": 168.9565217
  },
  {
    "country": "GAMBIA",
    "latitude": 13.443182,
    "longtitude": -15.310139,
    "arrivals_avg": 113,
    "In_avg_expense": 62,
    "departure_avg": 30.17391304,
    "Out_avg_expense": 16.65217391
  },
  {
    "country": "GEORGIA",
    "latitude": 42.315407,
    "longtitude": 43.356892,
    "arrivals_avg": 2860,
    "In_avg_expense": 779.4347826,
    "departure_avg": 1491.73913,
    "Out_avg_expense": 195.3043478
  },
  {
    "country": "GERMANY",
    "latitude": 51.165691,
    "longtitude": 10.451526,
    "arrivals_avg": 23897,
    "In_avg_expense": 40418.21739,
    "departure_avg": 75169.13043,
    "Out_avg_expense": 72196.47826
  },
  {
    "country": "GHANA",
    "latitude": 7.946527,
    "longtitude": -1.023194,
    "arrivals_avg": 542,
    "In_avg_expense": 645.1304348,
    "departure_avg": 0,
    "Out_avg_expense": 345.2173913
  },
  {
    "country": "GREECE",
    "latitude": 39.074208,
    "longtitude": 21.824312,
    "arrivals_avg": 15715,
    "In_avg_expense": 12359.56522,
    "departure_avg": 2288.173913,
    "Out_avg_expense": 2741.391304
  },
  {
    "country": "GRENADA",
    "latitude": 12.262776,
    "longtitude": -61.604171,
    "arrivals_avg": 127,
    "In_avg_expense": 0,
    "departure_avg": 0,
    "Out_avg_expense": 11.13043478
  },
  {
    "country": "GUADELOUPE",
    "latitude": 16.995971,
    "longtitude": -62.067641,
    "arrivals_avg": 467,
    "In_avg_expense": 286.3478261,
    "departure_avg": 0,
    "Out_avg_expense": 0
  },
  {
    "country": "GUAM",
    "latitude": 13.444304,
    "longtitude": 144.793731,
    "arrivals_avg": 1247,
    "In_avg_expense": 0,
    "departure_avg": 0,
    "Out_avg_expense": 0
  },
  {
    "country": "GUATEMALA",
    "latitude": 15.783471,
    "longtitude": -90.230759,
    "arrivals_avg": 1893,
    "In_avg_expense": 164.7391304,
    "departure_avg": 1075.956522,
    "Out_avg_expense": 475.3043478
  },
  {
    "country": "GUINEA",
    "latitude": 9.945587,
    "longtitude": -9.696645,
    "arrivals_avg": 37,
    "In_avg_expense": 5.765217391,
    "departure_avg": 0,
    "Out_avg_expense": 22.82608696
  },
  {
    "country": "GUINEA-BISSAU",
    "latitude": 11.803749,
    "longtitude": -15.180413,
    "arrivals_avg": 12,
    "In_avg_expense": 1.717391304,
    "departure_avg": 0,
    "Out_avg_expense": 18.53043478
  },
  {
    "country": "GUYANA",
    "latitude": 4.860416,
    "longtitude": -58.93018,
    "arrivals_avg": 137,
    "In_avg_expense": 29.26086957,
    "departure_avg": 0,
    "Out_avg_expense": 58.13043478
  },
  {
    "country": "HAITI",
    "latitude": 18.971187,
    "longtitude": -72.285215,
    "arrivals_avg": 257,
    "In_avg_expense": 0,
    "departure_avg": 0,
    "Out_avg_expense": 47.2173913
  },
  {
    "country": "HONDURAS",
    "latitude": 15.199999,
    "longtitude": -86.241905,
    "arrivals_avg": 660,
    "In_avg_expense": 456.4782609,
    "departure_avg": 335.0434783,
    "Out_avg_expense": 244.6956522
  },
  {
    "country": "HONG KONG, CHINA",
    "latitude": 22.396428,
    "longtitude": 114.109497,
    "arrivals_avg": 45133,
    "In_avg_expense": 19709.69565,
    "departure_avg": 65364.69565,
    "Out_avg_expense": 16065.26087
  },
  {
    "country": "HUNGARY",
    "latitude": 47.162494,
    "longtitude": 19.503304,
    "arrivals_avg": 9868,
    "In_avg_expense": 5412.826087,
    "departure_avg": 18600.13043,
    "Out_avg_expense": 2085.173913
  },
  {
    "country": "ICELAND",
    "latitude": 64.963051,
    "longtitude": -19.020835,
    "arrivals_avg": 1724,
    "In_avg_expense": 303.5217391,
    "departure_avg": 288.3043478,
    "Out_avg_expense": 742.1304348
  },
  {
    "country": "INDIA",
    "latitude": 20.593684,
    "longtitude": 78.96288,
    "arrivals_avg": 5714,
    "In_avg_expense": 8346.782609,
    "departure_avg": 10171.65217,
    "Out_avg_expense": 7679.304348
  },
  {
    "country": "INDONESIA",
    "latitude": -0.789275,
    "longtitude": 113.921327,
    "arrivals_avg": 8162,
    "In_avg_expense": 5749,
    "departure_avg": 4436.521739,
    "Out_avg_expense": 4749.173913
  },
  {
    "country": "IRAN, ISLAMIC REPUBLIC OF",
    "latitude": 32.427908,
    "longtitude": 53.688046,
    "arrivals_avg": 1936,
    "In_avg_expense": 1747.652174,
    "departure_avg": 2116.173913,
    "Out_avg_expense": 4751.73913
  },
  {
    "country": "IRAQ",
    "latitude": 33.223191,
    "longtitude": 43.679291,
    "arrivals_avg": 329,
    "In_avg_expense": 843.0434783,
    "departure_avg": 0,
    "Out_avg_expense": 1165
  },
  {
    "country": "IRELAND",
    "latitude": 53.41291,
    "longtitude": -8.24389,
    "arrivals_avg": 7373,
    "In_avg_expense": 7036.73913,
    "departure_avg": 5652.391304,
    "Out_avg_expense": 5272
  },
  {
    "country": "ISRAEL",
    "latitude": 31.046051,
    "longtitude": 34.851612,
    "arrivals_avg": 2262,
    "In_avg_expense": 4643.956522,
    "departure_avg": 4082.913043,
    "Out_avg_expense": 3654.130435
  },
  {
    "country": "ITALY",
    "latitude": 41.87194,
    "longtitude": 12.56738,
    "arrivals_avg": 42100,
    "In_avg_expense": 18915.56522,
    "departure_avg": 23133.91304,
    "Out_avg_expense": 22473.43478
  },
  {
    "country": "JAMAICA",
    "latitude": 18.109581,
    "longtitude": -77.297508,
    "arrivals_avg": 1638,
    "In_avg_expense": 1258.521739,
    "departure_avg": 0,
    "Out_avg_expense": 221.7391304
  },
  {
    "country": "JAPAN",
    "latitude": 36.204824,
    "longtitude": 138.252924,
    "arrivals_avg": 8828,
    "In_avg_expense": 13784.65217,
    "departure_avg": 16653.43478,
    "Out_avg_expense": 27902.08696
  },
  {
    "country": "JORDAN",
    "latitude": 30.585164,
    "longtitude": 36.238414,
    "arrivals_avg": 2883,
    "In_avg_expense": 2828.608696,
    "departure_avg": 1544.956522,
    "Out_avg_expense": 802.5652174
  },
  {
    "country": "KAZAKHSTAN",
    "latitude": 48.019573,
    "longtitude": 66.923684,
    "arrivals_avg": 5984,
    "In_avg_expense": 1013.782609,
    "departure_avg": 3361.478261,
    "Out_avg_expense": 1040.391304
  },
  {
    "country": "KENYA",
    "latitude": -0.023559,
    "longtitude": 37.906193,
    "arrivals_avg": 1196,
    "In_avg_expense": 1214.565217,
    "departure_avg": 0,
    "Out_avg_expense": 181.9565217
  },
  {
    "country": "KIRIBATI",
    "latitude": -3.370417,
    "longtitude": -168.734039,
    "arrivals_avg": 5,
    "In_avg_expense": 0.939130435,
    "departure_avg": 0,
    "Out_avg_expense": 3.682608696
  },
  {
    "country": "KOREA, REPUBLIC OF",
    "latitude": 35.907757,
    "longtitude": 127.766922,
    "arrivals_avg": 7822,
    "In_avg_expense": 12095.34783,
    "departure_avg": 10851.56522,
    "Out_avg_expense": 15407.65217
  },
  {
    "country": "KUWAIT",
    "latitude": 29.31166,
    "longtitude": 47.481766,
    "arrivals_avg": 3863,
    "In_avg_expense": 520.6086957,
    "departure_avg": 920.826087,
    "Out_avg_expense": 6075.869565
  },
  {
    "country": "KYRGYZSTAN",
    "latitude": 41.20438,
    "longtitude": 74.766098,
    "arrivals_avg": 1647,
    "In_avg_expense": 235.7826087,
    "departure_avg": 1518,
    "Out_avg_expense": 151.6086957
  },
  {
    "country": "LAO PEOPLE'S DEMOCRATIC REPUBLIC",
    "latitude": 19.85627,
    "longtitude": 102.495496,
    "arrivals_avg": 1261,
    "In_avg_expense": 284.5217391,
    "departure_avg": 907.7391304,
    "Out_avg_expense": 267.4956522
  },
  {
    "country": "LATVIA",
    "latitude": 56.879635,
    "longtitude": 24.603189,
    "arrivals_avg": 1201,
    "In_avg_expense": 439,
    "departure_avg": 2922.956522,
    "Out_avg_expense": 539.5652174
  },
  {
    "country": "LEBANON",
    "latitude": 33.854721,
    "longtitude": 35.862285,
    "arrivals_avg": 1167,
    "In_avg_expense": 4691.521739,
    "departure_avg": 0,
    "Out_avg_expense": 2733.478261
  },
  {
    "country": "LESOTHO",
    "latitude": -29.609988,
    "longtitude": 28.233608,
    "arrivals_avg": 614,
    "In_avg_expense": 6.304347826,
    "departure_avg": 0,
    "Out_avg_expense": 177.4782609
  },
  {
    "country": "LIBERIA",
    "latitude": 6.428055,
    "longtitude": -9.429499,
    "arrivals_avg": 0,
    "In_avg_expense": 0,
    "departure_avg": 0,
    "Out_avg_expense": 6.47826087
  },
  {
    "country": "LIBYA",
    "latitude": 26.3351,
    "longtitude": 17.228331,
    "arrivals_avg": 55,
    "In_avg_expense": 88.04347826,
    "departure_avg": 70.73913043,
    "Out_avg_expense": 908.9565217
  },
  {
    "country": "LIECHTENSTEIN",
    "latitude": 47.166,
    "longtitude": 9.555373,
    "arrivals_avg": 87,
    "In_avg_expense": 0,
    "departure_avg": 0,
    "Out_avg_expense": 0
  },
  {
    "country": "LITHUANIA",
    "latitude": 55.169438,
    "longtitude": 23.881275,
    "arrivals_avg": 1616,
    "In_avg_expense": 399.4782609,
    "departure_avg": 2207.695652,
    "Out_avg_expense": 715.9130435
  },
  {
    "country": "LUXEMBOURG",
    "latitude": 49.815273,
    "longtitude": 6.129583,
    "arrivals_avg": 891,
    "In_avg_expense": 3139.347826,
    "departure_avg": 1141.173913,
    "Out_avg_expense": 2533.304348
  },
  {
    "country": "MACAO, CHINA",
    "latitude": 22.198745,
    "longtitude": 113.543873,
    "arrivals_avg": 9683,
    "In_avg_expense": 16079,
    "departure_avg": 573.6086957,
    "Out_avg_expense": 563.9130435
  },
  {
    "country": "MADAGASCAR",
    "latitude": -18.766947,
    "longtitude": 46.869107,
    "arrivals_avg": 202,
    "In_avg_expense": 370.173913,
    "departure_avg": 1.695652174,
    "Out_avg_expense": 113.4782609
  },
  {
    "country": "MALAWI",
    "latitude": -13.254308,
    "longtitude": 34.301525,
    "arrivals_avg": 543,
    "In_avg_expense": 40.04347826,
    "departure_avg": 0,
    "Out_avg_expense": 60.30434783
  },
  {
    "country": "MALAYSIA",
    "latitude": 4.210484,
    "longtitude": 101.975766,
    "arrivals_avg": 17540,
    "In_avg_expense": 5969.913043,
    "departure_avg": 12236.78261,
    "Out_avg_expense": 6027.217391
  },
  {
    "country": "MALDIVES",
    "latitude": 3.202778,
    "longtitude": 73.22068,
    "arrivals_avg": 712,
    "In_avg_expense": 758.6086957,
    "departure_avg": 34.04347826,
    "Out_avg_expense": 123.9565217
  },
  {
    "country": "MALI",
    "latitude": 17.570692,
    "longtitude": -3.996166,
    "arrivals_avg": 139,
    "In_avg_expense": 115.5652174,
    "departure_avg": 0,
    "Out_avg_expense": 76.43478261
  },
  {
    "country": "MALTA",
    "latitude": 35.937496,
    "longtitude": 14.375416,
    "arrivals_avg": 1348,
    "In_avg_expense": 483.7391304,
    "departure_avg": 271.0869565,
    "Out_avg_expense": 280.6086957
  },
  {
    "country": "MARSHALL ISLANDS",
    "latitude": 7.131474,
    "longtitude": 171.184478,
    "arrivals_avg": 6,
    "In_avg_expense": 4.656521739,
    "departure_avg": 0,
    "Out_avg_expense": 6.634782609
  },
  {
    "country": "MARTINIQUE",
    "latitude": 14.641528,
    "longtitude": -61.024174,
    "arrivals_avg": 492,
    "In_avg_expense": 385.8695652,
    "departure_avg": 0,
    "Out_avg_expense": 0
  },
  {
    "country": "MAURITANIA",
    "latitude": 21.00789,
    "longtitude": -10.940835,
    "arrivals_avg": 2,
    "In_avg_expense": 10,
    "departure_avg": 0,
    "Out_avg_expense": 21.56521739
  },
  {
    "country": "MAURITIUS",
    "latitude": -20.348404,
    "longtitude": 57.552152,
    "arrivals_avg": 823,
    "In_avg_expense": 1271,
    "departure_avg": 190.9130435,
    "Out_avg_expense": 331.2173913
  },
  {
    "country": "MEXICO",
    "latitude": 23.634501,
    "longtitude": -102.552784,
    "arrivals_avg": 23436,
    "In_avg_expense": 12484,
    "departure_avg": 13650.6087,
    "Out_avg_expense": 7092.304348
  },
  {
    "country": "MICRONESIA, FEDERATED STATES OF",
    "latitude": 7.425554,
    "longtitude": 150.550812,
    "arrivals_avg": 24,
    "In_avg_expense": 9.7,
    "departure_avg": 0,
    "Out_avg_expense": 3.086956522
  },
  {
    "country": "MOLDOVA, REPUBLIC OF",
    "latitude": 47.411631,
    "longtitude": 28.369885,
    "arrivals_avg": 51,
    "In_avg_expense": 183.6521739,
    "departure_avg": 62.08695652,
    "Out_avg_expense": 182.1304348
  },
  {
    "country": "MONACO",
    "latitude": 43.750298,
    "longtitude": 7.412841,
    "arrivals_avg": 289,
    "In_avg_expense": 0,
    "departure_avg": 0,
    "Out_avg_expense": 0
  },
  {
    "country": "MONGOLIA",
    "latitude": 46.862496,
    "longtitude": 103.846656,
    "arrivals_avg": 655,
    "In_avg_expense": 191.8695652,
    "departure_avg": 0,
    "Out_avg_expense": 228.3478261
  },
  {
    "country": "MONTENEGRO",
    "latitude": 42.708678,
    "longtitude": 19.37439,
    "arrivals_avg": 674,
    "In_avg_expense": 425.3913043,
    "departure_avg": 0,
    "Out_avg_expense": 13.39130435
  },
  {
    "country": "MONTSERRAT",
    "latitude": 16.742498,
    "longtitude": -62.187366,
    "arrivals_avg": 8,
    "In_avg_expense": 1.643478261,
    "departure_avg": 0,
    "Out_avg_expense": 3.143478261
  },
  {
    "country": "MOROCCO",
    "latitude": 31.791702,
    "longtitude": -7.09262,
    "arrivals_avg": 6733,
    "In_avg_expense": 5701.73913,
    "departure_avg": 1905.130435,
    "Out_avg_expense": 860.7826087
  },
  {
    "country": "MOZAMBIQUE",
    "latitude": -18.665695,
    "longtitude": 35.529562,
    "arrivals_avg": 885,
    "In_avg_expense": 114.1304348,
    "departure_avg": 0,
    "Out_avg_expense": 162.2608696
  },
  {
    "country": "MYANMAR",
    "latitude": 21.913965,
    "longtitude": 95.956223,
    "arrivals_avg": 1176,
    "In_avg_expense": 539.2173913,
    "departure_avg": 0,
    "Out_avg_expense": 53.30434783
  },
  {
    "country": "NAMIBIA",
    "latitude": -22.95764,
    "longtitude": 18.49041,
    "arrivals_avg": 886,
    "In_avg_expense": 336.6521739,
    "departure_avg": 0,
    "Out_avg_expense": 79.73913043
  },
  {
    "country": "NEPAL",
    "latitude": 28.394857,
    "longtitude": 84.124008,
    "arrivals_avg": 531,
    "In_avg_expense": 321.2173913,
    "departure_avg": 379.2608696,
    "Out_avg_expense": 276.8695652
  },
  {
    "country": "NETHERLANDS",
    "latitude": 52.132633,
    "longtitude": 5.291266,
    "arrivals_avg": 10836,
    "In_avg_expense": 10282.43478,
    "departure_avg": 15638.30435,
    "Out_avg_expense": 16042.65217
  },
  {
    "country": "NEW CALEDONIA",
    "latitude": -20.904305,
    "longtitude": 165.618042,
    "arrivals_avg": 104,
    "In_avg_expense": 103.0434783,
    "departure_avg": 97.82608696,
    "Out_avg_expense": 99.2173913
  },
  {
    "country": "NEW ZEALAND",
    "latitude": -40.900557,
    "longtitude": 174.885971,
    "arrivals_avg": 4409,
    "In_avg_expense": 0,
    "departure_avg": 1769.782609,
    "Out_avg_expense": 2562.869565
  },
  {
    "country": "NICARAGUA",
    "latitude": 12.865416,
    "longtitude": -85.207229,
    "arrivals_avg": 823,
    "In_avg_expense": 18.2173913,
    "departure_avg": 714.0434783,
    "Out_avg_expense": 112.9565217
  },
  {
    "country": "NIGER",
    "latitude": 17.607789,
    "longtitude": 8.081666,
    "arrivals_avg": 77,
    "In_avg_expense": 45.91304348,
    "departure_avg": 1.739130435,
    "Out_avg_expense": 40.39130435
  },
  {
    "country": "NIGERIA",
    "latitude": 9.081999,
    "longtitude": 8.675277,
    "arrivals_avg": 4119,
    "In_avg_expense": 476.826087,
    "departure_avg": 0,
    "Out_avg_expense": 3337.608696
  },
  {
    "country": "NIUE",
    "latitude": -19.054445,
    "longtitude": -169.867233,
    "arrivals_avg": 4,
    "In_avg_expense": 0.791304348,
    "departure_avg": 0.730434783,
    "Out_avg_expense": 0
  },
  {
    "country": "NORTHERN MARIANA ISLANDS",
    "latitude": 17.33083,
    "longtitude": 145.38469,
    "arrivals_avg": 977,
    "In_avg_expense": 28.47826087,
    "departure_avg": 0,
    "Out_avg_expense": 0
  },
  {
    "country": "NORWAY",
    "latitude": 60.472024,
    "longtitude": 8.468946,
    "arrivals_avg": 4062,
    "In_avg_expense": 4537.73913,
    "departure_avg": 4437.043478,
    "Out_avg_expense": 10462.91304
  },
  {
    "country": "OMAN",
    "latitude": 21.512583,
    "longtitude": 55.923255,
    "arrivals_avg": 2299,
    "In_avg_expense": 1015.826087,
    "departure_avg": 1671.391304,
    "Out_avg_expense": 914.6956522
  },
  {
    "country": "PAKISTAN",
    "latitude": 30.375321,
    "longtitude": 69.345116,
    "arrivals_avg": 519,
    "In_avg_expense": 786.6521739,
    "departure_avg": 0,
    "Out_avg_expense": 1009.086957
  },
  {
    "country": "PALAU",
    "latitude": 7.51498,
    "longtitude": 134.58252,
    "arrivals_avg": 88,
    "In_avg_expense": 51.13043478,
    "departure_avg": 0.391304348,
    "Out_avg_expense": 6.52173913
  },
  {
    "country": "PANAMA",
    "latitude": 8.537981,
    "longtitude": -80.782127,
    "arrivals_avg": 1022,
    "In_avg_expense": 2429.913043,
    "departure_avg": 384.2608696,
    "Out_avg_expense": 406.6956522
  },
  {
    "country": "PAPUA NEW GUINEA",
    "latitude": -6.314993,
    "longtitude": 143.95555,
    "arrivals_avg": 98,
    "In_avg_expense": 2.786956522,
    "departure_avg": 18.26086957,
    "Out_avg_expense": 83.7826087
  },
  {
    "country": "PARAGUAY",
    "latitude": -23.442503,
    "longtitude": -58.443832,
    "arrivals_avg": 531,
    "In_avg_expense": 187.173913,
    "departure_avg": 425.6086957,
    "Out_avg_expense": 151.9565217
  },
  {
    "country": "PERU",
    "latitude": -9.189967,
    "longtitude": -75.015152,
    "arrivals_avg": 1876,
    "In_avg_expense": 2088.521739,
    "departure_avg": 1637.652174,
    "Out_avg_expense": 997.0434783
  },
  {
    "country": "PHILIPPINES",
    "latitude": 12.879721,
    "longtitude": 121.774017,
    "arrivals_avg": 3224,
    "In_avg_expense": 3630.869565,
    "departure_avg": 2051.782609,
    "Out_avg_expense": 4428.73913
  },
  {
    "country": "POLAND",
    "latitude": 51.919438,
    "longtitude": 19.145136,
    "arrivals_avg": 15864,
    "In_avg_expense": 9272.26087,
    "departure_avg": 50299.73913,
    "Out_avg_expense": 6502
  },
  {
    "country": "PORTUGAL",
    "latitude": 39.399872,
    "longtitude": -8.224454,
    "arrivals_avg": 12998,
    "In_avg_expense": 11041.69565,
    "departure_avg": 3701.130435,
    "Out_avg_expense": 3244.565217
  },
  {
    "country": "PUERTO RICO",
    "latitude": 18.220833,
    "longtitude": -66.590149,
    "arrivals_avg": 3365,
    "In_avg_expense": 2972.913043,
    "departure_avg": 1135.565217,
    "Out_avg_expense": 905.2173913
  },
  {
    "country": "QATAR",
    "latitude": 25.354826,
    "longtitude": 51.183884,
    "arrivals_avg": 1289,
    "In_avg_expense": 3095.304348,
    "departure_avg": 0,
    "Out_avg_expense": 2510.391304
  },
  {
    "country": "REUNION",
    "latitude": -21.115141,
    "longtitude": 55.536384,
    "arrivals_avg": 409,
    "In_avg_expense": 349.4782609,
    "departure_avg": 0,
    "Out_avg_expense": 0
  },
  {
    "country": "ROMANIA",
    "latitude": 45.943161,
    "longtitude": 24.96676,
    "arrivals_avg": 7707,
    "In_avg_expense": 1366.956522,
    "departure_avg": 9590.869565,
    "Out_avg_expense": 1312.913043
  },
  {
    "country": "RUSSIAN FEDERATION",
    "latitude": 61.52401,
    "longtitude": 105.318756,
    "arrivals_avg": 27154,
    "In_avg_expense": 9131.217391,
    "departure_avg": 29096.73913,
    "Out_avg_expense": 21738.95652
  },
  {
    "country": "RWANDA",
    "latitude": -1.940278,
    "longtitude": 29.873888,
    "arrivals_avg": 785,
    "In_avg_expense": 178.5652174,
    "departure_avg": 0,
    "Out_avg_expense": 73.30434783
  },
  {
    "country": "SABA",
    "latitude": 17.6355,
    "longtitude": -63.2327,
    "arrivals_avg": 7,
    "In_avg_expense": 0,
    "departure_avg": 0,
    "Out_avg_expense": 0
  },
  {
    "country": "SAINT KITTS AND NEVIS",
    "latitude": 17.357822,
    "longtitude": -62.782998,
    "arrivals_avg": 92,
    "In_avg_expense": 0,
    "departure_avg": 0,
    "Out_avg_expense": 14.95652174
  },
  {
    "country": "SAINT LUCIA",
    "latitude": 13.909444,
    "longtitude": -60.978893,
    "arrivals_avg": 292,
    "In_avg_expense": 0,
    "departure_avg": 0,
    "Out_avg_expense": 39.60869565
  },
  {
    "country": "SAINT VINCENT AND THE GRENADINES",
    "latitude": 12.984305,
    "longtitude": -61.287228,
    "arrivals_avg": 76,
    "In_avg_expense": 36,
    "departure_avg": 0,
    "Out_avg_expense": 14.2173913
  },
  {
    "country": "SAMOA",
    "latitude": -13.759029,
    "longtitude": -172.104629,
    "arrivals_avg": 105,
    "In_avg_expense": 83.08695652,
    "departure_avg": 42.17391304,
    "Out_avg_expense": 5.486956522
  },
  {
    "country": "SAN MARINO",
    "latitude": 43.94236,
    "longtitude": 12.457777,
    "arrivals_avg": 68,
    "In_avg_expense": 0,
    "departure_avg": 0,
    "Out_avg_expense": 0
  },
  {
    "country": "SAO TOME AND PRINCIPE",
    "latitude": 0.18636,
    "longtitude": 6.613081,
    "arrivals_avg": 9,
    "In_avg_expense": 12.36956522,
    "departure_avg": 0,
    "Out_avg_expense": 3.239130435
  },
  {
    "country": "SAUDI ARABIA",
    "latitude": 23.885942,
    "longtitude": 45.079162,
    "arrivals_avg": 9629,
    "In_avg_expense": 4631.26087,
    "departure_avg": 8274.478261,
    "Out_avg_expense": 10118.91304
  },
  {
    "country": "SENEGAL",
    "latitude": 14.497401,
    "longtitude": -14.452362,
    "arrivals_avg": 900,
    "In_avg_expense": 295.1304348,
    "departure_avg": 0,
    "Out_avg_expense": 86.39130435
  },
  {
    "country": "SERBIA",
    "latitude": 44.016521,
    "longtitude": 21.005859,
    "arrivals_avg": 525,
    "In_avg_expense": 632.0434783,
    "departure_avg": 0,
    "Out_avg_expense": 535.7826087
  },
  {
    "country": "SERBIA AND MONTENEGRO",
    "latitude": 44.816663,
    "longtitude": 20.466664,
    "arrivals_avg": 81,
    "In_avg_expense": 0,
    "departure_avg": 0,
    "Out_avg_expense": 0
  },
  {
    "country": "SEYCHELLES",
    "latitude": -4.679574,
    "longtitude": 55.491977,
    "arrivals_avg": 173,
    "In_avg_expense": 332.3478261,
    "departure_avg": 47.65217391,
    "Out_avg_expense": 35
  },
  {
    "country": "SIERRA LEONE",
    "latitude": 8.460555,
    "longtitude": -11.779889,
    "arrivals_avg": 33,
    "In_avg_expense": 0,
    "departure_avg": 48.2173913,
    "Out_avg_expense": 25.95652174
  },
  {
    "country": "SINGAPORE",
    "latitude": 1.352083,
    "longtitude": 103.819836,
    "arrivals_avg": 8215,
    "In_avg_expense": 0,
    "departure_avg": 6079.869565,
    "Out_avg_expense": 13504
  },
  {
    "country": "SINT EUSTATIUS",
    "latitude": 17.489,
    "longtitude": -62.9736,
    "arrivals_avg": 7,
    "In_avg_expense": 0,
    "departure_avg": 0,
    "Out_avg_expense": 0
  },
  {
    "country": "SINT MAARTEN (DUTCH PART)",
    "latitude": 18.0425,
    "longtitude": -63.0548,
    "arrivals_avg": 449,
    "In_avg_expense": 366.8695652,
    "departure_avg": 0,
    "Out_avg_expense": 97.13043478
  },
  {
    "country": "SLOVAKIA",
    "latitude": 48.669026,
    "longtitude": 19.699024,
    "arrivals_avg": 4421,
    "In_avg_expense": 1657.869565,
    "departure_avg": 1721.521739,
    "Out_avg_expense": 1301.782609
  },
  {
    "country": "SLOVENIA",
    "latitude": 46.151241,
    "longtitude": 14.995463,
    "arrivals_avg": 1724,
    "In_avg_expense": 2027.608696,
    "departure_avg": 1999.956522,
    "Out_avg_expense": 863.2608696
  },
  {
    "country": "SOLOMON ISLANDS",
    "latitude": -9.64571,
    "longtitude": 160.156194,
    "arrivals_avg": 14,
    "In_avg_expense": 32.46086957,
    "departure_avg": 0,
    "Out_avg_expense": 31.65217391
  },
  {
    "country": "SOUTH AFRICA",
    "latitude": -30.559482,
    "longtitude": 22.937506,
    "arrivals_avg": 7507,
    "In_avg_expense": 7274.608696,
    "departure_avg": 0,
    "Out_avg_expense": 3096.478261
  },
  {
    "country": "SOUTH SUDAN",
    "latitude": 12.862807,
    "longtitude": 30.217636,
    "arrivals_avg": 0,
    "In_avg_expense": 3.130434783,
    "departure_avg": 0,
    "Out_avg_expense": 3.565217391
  },
  {
    "country": "SPAIN",
    "latitude": 40.463667,
    "longtitude": -3.74922,
    "arrivals_avg": 53984,
    "In_avg_expense": 15085.08696,
    "departure_avg": 8920.608696,
    "Out_avg_expense": 12999.95652
  },
  {
    "country": "SRI LANKA",
    "latitude": 7.873054,
    "longtitude": 80.771797,
    "arrivals_avg": 776,
    "In_avg_expense": 1393.695652,
    "departure_avg": 872.5217391,
    "Out_avg_expense": 560.2173913
  },
  {
    "country": "STATE OF PALESTINE",
    "latitude": 31.952162,
    "longtitude": 35.233154,
    "arrivals_avg": 285,
    "In_avg_expense": 0,
    "departure_avg": 0,
    "Out_avg_expense": 407.7826087
  },
  {
    "country": "SUDAN",
    "latitude": 12.862807,
    "longtitude": 30.217636,
    "arrivals_avg": 327,
    "In_avg_expense": 0,
    "departure_avg": 8.47826087,
    "Out_avg_expense": 455.0434783
  },
  {
    "country": "SURINAME",
    "latitude": 3.919305,
    "longtitude": -56.027783,
    "arrivals_avg": 147,
    "In_avg_expense": 62.91304348,
    "departure_avg": 0,
    "Out_avg_expense": 36.95652174
  },
  {
    "country": "SWEDEN",
    "latitude": 60.128161,
    "longtitude": 18.643501,
    "arrivals_avg": 8919,
    "In_avg_expense": 4966.304348,
    "departure_avg": 11301.73913,
    "Out_avg_expense": 10755.52174
  },
  {
    "country": "SWITZERLAND",
    "latitude": 46.818188,
    "longtitude": 8.227512,
    "arrivals_avg": 8607,
    "In_avg_expense": 14487.82609,
    "departure_avg": 9795.521739,
    "Out_avg_expense": 10379.86957
  },
  {
    "country": "SYRIAN ARAB REPUBLIC",
    "latitude": 34.802075,
    "longtitude": 38.996815,
    "arrivals_avg": 2402,
    "In_avg_expense": 1085.26087,
    "departure_avg": 2600.434783,
    "Out_avg_expense": 518.2608696
  },
  {
    "country": "TAIWAN PROVINCE OF CHINA",
    "latitude": 23.69781,
    "longtitude": 120.960515,
    "arrivals_avg": 4914,
    "In_avg_expense": 8384.217391,
    "departure_avg": 8828.521739,
    "Out_avg_expense": 9846.173913
  },
  {
    "country": "TAJIKISTAN",
    "latitude": 38.861034,
    "longtitude": 71.276093,
    "arrivals_avg": 120,
    "In_avg_expense": 71.11304348,
    "departure_avg": 5.704347826,
    "Out_avg_expense": 2.504347826
  },
  {
    "country": "TANZANIA, UNITED REPUBLIC OF",
    "latitude": -6.369028,
    "longtitude": 34.888822,
    "arrivals_avg": 712,
    "In_avg_expense": 1068,
    "departure_avg": 13.26086957,
    "Out_avg_expense": 642.0434783
  },
  {
    "country": "THAILAND",
    "latitude": 15.870032,
    "longtitude": 100.992541,
    "arrivals_avg": 15909,
    "In_avg_expense": 23232.65217,
    "departure_avg": 3972.826087,
    "Out_avg_expense": 4928.478261
  },
  {
    "country": "THE FORMER YUGOSLAV REPUBLIC OF MACEDONIA",
    "latitude": 41.608635,
    "longtitude": 21.745275,
    "arrivals_avg": 263,
    "In_avg_expense": 159.4782609,
    "departure_avg": 0,
    "Out_avg_expense": 85.95652174
  },
  {
    "country": "TIMOR-LESTE",
    "latitude": -8.874217,
    "longtitude": 125.727539,
    "arrivals_avg": 26,
    "In_avg_expense": 0,
    "departure_avg": 0,
    "Out_avg_expense": 29.94347826
  },
  {
    "country": "TOGO",
    "latitude": 8.619543,
    "longtitude": 0.824782,
    "arrivals_avg": 156,
    "In_avg_expense": 75.7826087,
    "departure_avg": 0,
    "Out_avg_expense": 19.69565217
  },
  {
    "country": "TONGA",
    "latitude": -21.178986,
    "longtitude": -175.198242,
    "arrivals_avg": 42,
    "In_avg_expense": 17.47826087,
    "departure_avg": 0,
    "Out_avg_expense": 8.913043478
  },
  {
    "country": "TRINIDAD AND TOBAGO",
    "latitude": 10.691803,
    "longtitude": -61.222503,
    "arrivals_avg": 398,
    "In_avg_expense": 550.1304348,
    "departure_avg": 45.73913043,
    "Out_avg_expense": 118.3478261
  },
  {
    "country": "TUNISIA",
    "latitude": 33.886917,
    "longtitude": 9.537499,
    "arrivals_avg": 5922,
    "In_avg_expense": 2466.478261,
    "departure_avg": 1966.782609,
    "Out_avg_expense": 438.4347826
  },
  {
    "country": "TURKEY",
    "latitude": 38.963745,
    "longtitude": 35.243322,
    "arrivals_avg": 22402,
    "In_avg_expense": 16166.26087,
    "departure_avg": 6188.826087,
    "Out_avg_expense": 3228.695652
  },
  {
    "country": "TURKMENISTAN",
    "latitude": 38.969719,
    "longtitude": 59.556278,
    "arrivals_avg": 46,
    "In_avg_expense": 2.565217391,
    "departure_avg": 38.08695652,
    "Out_avg_expense": 8.608695652
  },
  {
    "country": "TURKS AND CAICOS ISLANDS",
    "latitude": 21.694025,
    "longtitude": -71.797928,
    "arrivals_avg": 240,
    "In_avg_expense": 152.2608696,
    "departure_avg": 0,
    "Out_avg_expense": 0.586956522
  },
  {
    "country": "TUVALU",
    "latitude": -7.109535,
    "longtitude": 177.64933,
    "arrivals_avg": 1,
    "In_avg_expense": 0,
    "departure_avg": 1.134782609,
    "Out_avg_expense": 2.656521739
  },
  {
    "country": "UGANDA",
    "latitude": 1.373333,
    "longtitude": 32.290275,
    "arrivals_avg": 672,
    "In_avg_expense": 483.4347826,
    "departure_avg": 270.4782609,
    "Out_avg_expense": 151.173913
  },
  {
    "country": "UKRAINE",
    "latitude": 48.379433,
    "longtitude": 31.16558,
    "arrivals_avg": 14295,
    "In_avg_expense": 2697.608696,
    "departure_avg": 16133.56522,
    "Out_avg_expense": 2841.869565
  },
  {
    "country": "UNITED ARAB EMIRATES",
    "latitude": 23.424076,
    "longtitude": 53.847818,
    "arrivals_avg": 2018,
    "In_avg_expense": 6681.869565,
    "departure_avg": 0,
    "Out_avg_expense": 0
  },
  {
    "country": "UNITED KINGDOM",
    "latitude": 55.378051,
    "longtitude": -3.435973,
    "arrivals_avg": 27663,
    "In_avg_expense": 39777.30435,
    "departure_avg": 80388.26087,
    "Out_avg_expense": 55326.95652
  },
  {
    "country": "UNITED STATES OF AMERICA",
    "latitude": 37.09024,
    "longtitude": -95.712891,
    "arrivals_avg": 56372,
    "In_avg_expense": 153602.0435,
    "departure_avg": 62475.6087,
    "Out_avg_expense": 81655.86957
  },
  {
    "country": "UNITED STATES VIRGIN ISLANDS",
    "latitude": 18.335765,
    "longtitude": -64.896335,
    "arrivals_avg": 521,
    "In_avg_expense": 1127.869565,
    "departure_avg": 0,
    "Out_avg_expense": 0
  },
  {
    "country": "URUGUAY",
    "latitude": -32.522779,
    "longtitude": -55.765835,
    "arrivals_avg": 2221,
    "In_avg_expense": 1219.73913,
    "departure_avg": 1003.478261,
    "Out_avg_expense": 499.4782609
  },
  {
    "country": "UZBEKISTAN",
    "latitude": 41.377491,
    "longtitude": 64.585262,
    "arrivals_avg": 845,
    "In_avg_expense": 34.34782609,
    "departure_avg": 0,
    "Out_avg_expense": 0
  },
  {
    "country": "VANUATU",
    "latitude": -15.376706,
    "longtitude": 166.959158,
    "arrivals_avg": 75,
    "In_avg_expense": 124.9565217,
    "departure_avg": 17.30434783,
    "Out_avg_expense": 16.39130435
  },
  {
    "country": "VENEZUELA, BOLIVARIAN REPUBLIC OF",
    "latitude": 6.42375,
    "longtitude": -66.58973,
    "arrivals_avg": 656,
    "In_avg_expense": 735.9130435,
    "departure_avg": 1173.608696,
    "Out_avg_expense": 1577.043478
  },
  {
    "country": "VIET NAM",
    "latitude": 14.058324,
    "longtitude": 108.277199,
    "arrivals_avg": 5802,
    "In_avg_expense": 3277.826087,
    "departure_avg": 0,
    "Out_avg_expense": 0
  },
  {
    "country": "YEMEN",
    "latitude": 15.552727,
    "longtitude": 48.516388,
    "arrivals_avg": 458,
    "In_avg_expense": 249.3043478,
    "departure_avg": 0,
    "Out_avg_expense": 113.3043478
  },
  {
    "country": "ZAMBIA",
    "latitude": -13.133897,
    "longtitude": 27.849332,
    "arrivals_avg": 663,
    "In_avg_expense": 0,
    "departure_avg": 0,
    "Out_avg_expense": 98.08695652
  },
  {
    "country": "ZIMBABWE",
    "latitude": -19.015438,
    "longtitude": 29.154857,
    "arrivals_avg": 2540,
    "In_avg_expense": 177.7826087,
    "departure_avg": 965.4782609,
    "Out_avg_expense": 110.3478261
  }
]

const cities = myjson.map(jsonObj => {
  return {
    name: jsonObj.country,
    location: [jsonObj.latitude, jsonObj.longtitude],
    arrivals: jsonObj.arrivals_avg*1000
  }
})
// // Each city object contains the city's name, location and population
// var cities = [
//   {
//     name: "New York",
//     location: [40.7128, -74.0059],
//     population: 8550405
//   },
//   {
//     name: "Chicago",
//     location: [41.8781, -87.6298],
//     population: 2720546
//   },
//   {
//     name: "Houston",
//     location: [29.7604, -95.3698],
//     population: 2296224
//   },
//   {
//     name: "Los Angeles",
//     location: [34.0522, -118.2437],
//     population: 3971883
//   },
//   {
//     name: "Omaha",
//     location: [41.2524, -95.9980],
//     population: 446599
//   }
// ];

// Loop through the cities array and create one marker for each city object
for (var i = 0; i < cities.length; i++) {
  L.circle(cities[i].location, {
    fillOpacity: 0.75,
    color: "white",
    fillColor: "purple",
    // Setting our circle's radius equal to the output of our markerSize function
    // This will make our marker's size proportionate to its population
    radius: markerSize(cities[i].arrivals)
  }).bindPopup("<h1>" + cities[i].name + "</h1> <hr> <h3>Arrivals: " + cities[i].arrivals + "</h3>").addTo(myMap);
}

});




//Create dropdown menu 
function init() {

  
  console.log('test init');



  // Grab a reference to the dropdown select element
  //var selector = d3.select("#selCountry");
  var selector = d3.select("#selCountry");
  d3.csv("static/js/country_data.csv", function(data) {
    //console.log('This is a test')
    //console.log(data);

    data.forEach((sample, index) => {
      country = sample['country']
      selector
        .append("option")
        .text(country)
        .property("value", country)

    // Use the first sample from the list to build the initial plots
    const firstSample = data[0];
    //console.log(firstSample)
    //buildCharts(firstSample);
    //buildCharts(firstSample);
    //buildMetadata(firstSample);
  });
  });

};

// function makeplot2() {
//   Plotly.d3.csv("static/js/tourist.csv", function(data){ processData2(data) } );
// };
 
// function processData2(allRows) {
//  console.log(allRows);
//  var country = [], arrivals_avg = [], departure_avg = [];
//  for (var i=0; i<allRows.length; i++) {
//      row = allRows[i];
//      country.push( row['country'] );
//      arrivals_avg.push( row['arrivals_avg'] );
//      departure_avg.push(row['departure_avg']);
//  }
//  console.log( 'Country',country, 'Average_Arrivals',arrivals_avg, 'Average_Departure',departure_avg );
//  makePlotly( country, arrivals_avg, departure_avg );
// }
// function makePlotly( country, arrivals_avg, departure_avg ){
//  var plotDiv = document.getElementById("plot");
//  var trace1 = {
//      x: country, 
//      y: arrivals_avg,
//      name: 'Average Arrivals',
//      type: 'bar'
//  };
//  var trace2 = {
//   x: country, 
//   y: departure_avg,
//   name: 'Average Departure',
//   type: 'bar'
// };
// var data=[trace1, trace2];
// var layout={
//   title: 'Arrivals v/s Departure in Top 30 countries',
//   xaxis: {
//       title: 'Country',
//       tickfont: {
//       size: 10,
//       color: 'rgb(107, 107, 107)',
//       automargin: true
//     }},
//   yaxis: {
//     title: 'Passengers (100 Thousand)',
//     titlefont: {
//       size: 10,
//       color: 'rgb(107, 107, 107)',
//       automargin: true
//     },
//     tickfont: {
//       size: 10,
//       color: 'rgb(107, 107, 107)'
//     }
//   },
//   barmode: 'group',
//   bargap: 0.5,
//   bargroupgap: 0.1
// };
//  Plotly.newPlot('Bar', data, layout, {responsive: true});
// };
// makeplot2();

// function makeplot() {
//   d3.csv("static/js/tourist.csv", function(data){ processData(data) } );
// };
 
// function processData(allRows) {
//  console.log(allRows);
//  var country = [], arrivals_avg = [], departure_avg = [], in_avg_expense=[], out_avg_expense=[];
//  for (var i=0; i<allRows.length; i++) {
//      row = allRows[i];
//      country.push( row['country'] );
//      arrivals_avg.push( row['arrivals_avg'] );
//      departure_avg.push(row['departure_avg']);
//      in_avg_expense.push(row['In_avg_expense']);
//      out_avg_expense.push(row['Out_avg_expense']);
//  }
//  console.log( 'Country',country, 'Average_Arrivals',arrivals_avg, 'Average_Departure',departure_avg, 'Tourism_Expenditure_Credit',in_avg_expense, 'Tourism_Expenditure_Debit',out_avg_expense );
//  makePlotly(country, arrivals_avg,in_avg_expense);
// //    makePlotly3(country,departure_avg,out_avg_expense);
// }

// function makePlotly( country, arrivals_avg,in_avg_expense ){
//  var plotDiv = document.getElementById("plot");
//  var trace1 = {
//      x: country, 
//      y: arrivals_avg,
//      name: 'Average Arrivals',
//      type: 'bar'
//  };
//  var trace2 = {
//   x: country, 
//   y: in_avg_expense,
//   name: 'In_avg_expense',
//   type: 'scatter'
// };
// var data=[trace1, trace2];
// var layout={
//   title: 'Arrivals v/s Expense',
//   xaxis: {
//       title: 'Country',
//       tickfont: {
//       size: 10,
//       color: 'rgb(107, 107, 107)',
//       automargin: true
//     }},
//   yaxis: {
//     title: 'Expenditure (Credit- USD million)',
//     titlefont: {
//       size: 10,
//       color: 'rgb(107, 107, 107)',
//       automargin: true
//     },
//     tickfont: {
//       size: 10,
//       color: 'rgb(107, 107, 107)'
//     }
//   },
// };
//  Plotly.newPlot('Bar2', data, layout, {responsive: true});
// };
// makeplot();

init();