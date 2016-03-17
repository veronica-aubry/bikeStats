var compareColor = require('./../js/color.js').compareColor;
var graph = require('./../js/map.js').graph;



$(document).ready(function() {
  $('#stolen_bikes').click(function() {
    var city = $('#location').val();
    $.get('https://bikeindex.org:443/api/v2/bikes_search/stolen?page=1&per_page=500&proximity=' + city + '&proximity_square=100', function(response) {
      var bikeColors = compareColor(response.bikes);

      var data = [];
      data =  $.map(bikeColors, function(val, key) {
        var obj = {label: key, value: val};
        return obj;
      });

      data.sort(function(a,b) {
        if (a.value > b.value){
        return -1;
        }
        if (a.value < b.value) {
          return 1;
        }
        return 0;
      });

      var topsix = data.slice(0, 6);


    $("#chart").append("<br><br><h1>Colors most stolen in " + city + "</h1>");

      graph(topsix);

      data = [];

        });
    });
});
