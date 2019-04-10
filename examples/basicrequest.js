//Replace this with `var tf2api = require('tf2keys-api');` if used outside of the module directory
var tf2api = require('../index.js');
//Config for easy use
var config = require('./settings/config.json');
//Your API Key
var key = config.apiKey;

//API object
var API = new tf2api({
  apiKey: key
});

//All methods (Get all available price data)
API.all((err, res, data) => {
  if(err) {
  	console.log(err)
  } else {
  	//Do something with the price data
  	console.log(data);
  	//Save the data
  	API.save(data, (err, status) => {
  	  if(err) {
  	  	console.log(err);
  	  } else {
  	  	console.log(status);
  	  }
  	});
  }
});
