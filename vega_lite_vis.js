var vg_1 = "Passenger_Count_Bar.vega";
vegaEmbed("#vis1", vg_1,{ "actions": false }).then(function(result) {
//(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_2 = "map1.vega";
vegaEmbed("#map1", vg_2,{ "actions": false }).then(function(result) {
//(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_3 = "map2.json";
vegaEmbed("#map2", vg_3,{ "actions": false }).then(function(result) {
//(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_4 = "LRT_MRT_station_pie.vega";
vegaEmbed("#donut", vg_4,{ "actions": false }).then(function(result) {
//(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);