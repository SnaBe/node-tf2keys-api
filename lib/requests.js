//HTTP calls
const request = require('request');

const url = require('../resources/urls.js');

const API = require('../index.js');

//Request all the available price data
API.prototype.getAllItems = function(callback) {
  if(!this.apiKey) {
    callback(new Error(`API Key ${this.apiKey}`), false);
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
API.prototype.getItem = function(item, callback) {
  if(!this.apiKey) {
    callback(new Error(`API Key ${this.apiKey}`), false);
  	return;
  }
  request(`${url.search}/${item}`, (err, res, data) => {
  	if(err) {
      callback(new Error(`Error requesting data from API: ${err}`), false);
  	  return;
  	}
  	data = JSON.parse(data);
  	//Callback the parsed data
  	callback(err, res, data);
  });
};

//Add an item to the API's database
API.prototype.addItem = function(item, callback) {
  //Function body...
  if(!this.apiKey) {
    callback(new Error(`API Key ${this.apiKey}`), false);
    return;
  }
  request(`${url.add}/${item.name}/${item.buyKeys}/${item.buyRef}/${item.sellKeys}/${item.sellRef}`, (err, res, data) => {
    if(err) {
      callback(new Error(`Error requesting data from API: ${err}`), false);
      return;      
    }
    data = JSON.parse(data);
    //Callback the parsed data
    callback(err, res, data);
  });
};

//Remove an item to the API's database
API.prototype.removeItem = function(item, callback) {
  //Function body...
  if(!this.apiKey) {
    callback(new Error(`API Key ${this.apiKey}`), false);
    return; 
  }
  console.log('This feature is currently not available.');
};

module.exports = API;