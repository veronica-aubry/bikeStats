exports.compareColor = function(stolenBikes) {
  var matchedBikes = [];
  var bikestats = {};
  stolenBikes.forEach(function(bike) {

    bike.frame_colors.forEach(function(color) {
        matchedBikes.push(bike.frame_colors);
    });

    for (var i = 0, j = matchedBikes.length; i < j; i++) {
       bikestats[matchedBikes[i]] = (bikestats[matchedBikes[i]] || 0) + 1;
    }
  });
  return bikestats;
};
