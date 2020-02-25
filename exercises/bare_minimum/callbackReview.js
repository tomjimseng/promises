/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  // TODO
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      callback(err, console.log('has error of some sort'));
    } else {
      var test = data.replace(/(\r\n|\n|\r)/gm, '|');
      var lines = test.split('|');
      callback(null, lines[0].toString());
      done();
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  // TODO
  //response.status
  // var response = response.status;
  request.get(url, (err, response) => {
    if (err) {
      callback(err, console.log('thrown error'));
    } else {
      // console.log(response);
      callback(null, response.statusCode);
      done();
    }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
