//File system
const fs = require('fs');

const API = require('../index.js');

API.prototype.save = function(data, callback) {
  //Stringify the parsed JSON data
  var data = JSON.stringify(data, null, 2);
  //Save the new price data to a chosen directory
  fs.writeFile(this.dataDirectory + 'prices.json', data, (err) => {
  	if(err) {
  	  callback(new Error(`Error saving data: ${err}`), false);
  	  return;
  	}
  	callback(err, `Success saving price data to ${this.dataDirectory}`);
  });
};

module.exports = API;