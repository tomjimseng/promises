/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('request');
var Promise = require('bluebird');
var nodeStyle = require('./callbackReview.js');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function (filePath) {
  // TODO
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err, console.log('has error of some sort'));
      } else {
        var test = data.replace(/(\r\n|\n|\r)/gm, '|');
        var lines = test.split('|');
        resolve(lines[0].toString());
      }
    });
  });
};
// Promise.promisify(nodeStyle.pluckFirstLineFromFile)

// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function (url) {
  // TODO
  return new Promise((resolve, reject) => {
    request.get(url, (err, response) => {
      if (err) {
        reject(err, console.log('thrown error'));
      } else {
        // console.log(response);
        resolve(response.statusCode);
      }
    });
  });
};
// Promise.promisify(nodeStyle.getStatusCode);

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
