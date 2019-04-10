//HTTP calls
const request = require('request');

const url = require('../resources/urls.js');

const API = require('../index.js');

//Request all the available price data
API.prototype.all = function(callback) {
  if(!this.apiKey) {
  	callback(new Error(`Missing apiKey for ${this}`), false);
  	return;
  }
  request(url.all, (err, res, data) => {
    if(err) {
      callback(new Error(`Error requesting data from API: ${err}`), false);
      return;
    } 
    data = JSON.parse(data);
    //Callback the parsed data
    callback(err, res, data);
  });
};

//Request a specefic items price data
API.prototype.search = function(item, callback) {
  if(!this.apiKey) {
  	callback(new Error('Missing apiKey'), false);
  	return;
  }
  request(`${url.search}/${item}`, (err, res, data) => {
  	if(err) {
  	  callback(new Error(`Error requesting data from API: ${err}`), false);
  	  return
  	}
  	data = JSON.parse(data);
  	//Callback the parsed data
  	callback(err, res, data);
  });
};

module.exports = API;