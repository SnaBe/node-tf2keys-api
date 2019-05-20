//HTTP calls
const request = require('request');

const url = require('../resources/urls.js');

const API = require('../index.js');

//Request all the available price data
API.prototype.getAllItems = function(callback) {
  request(url.all, (err, res, data) => {
    if(err) { 
      return callback(new Error(`Error requesting data from API: ${err}`), false);
    } 
    data = JSON.parse(data);
    //Callback the parsed data
    callback(err, res, data);
  });
};

//Request a specefic items price data
API.prototype.getItem = function(item, callback) {
  request(`${url.search}/${item}`, (err, res, data) => {
  	if(err) {
      return callback(new Error(`Error requesting data from API: ${err}`), false);
  	}
  	data = JSON.parse(data);
  	//Callback the parsed data
  	callback(err, res, data);
  });
};

//Export methods
module.exports = API;