'use strict';

//Export the API module
module.exports = API;

/**
 * Creates a new instance of tf2keys-api
 * @class
 * @param {object} options
 */

function API(options) {
  //The users API Key
  this.apiKey = options.apiKey;
  //The default directory to save files
  this.dataDirectory = './';
  //Optional settings 
  this.options = options || {};
  //Empty key
  if(!this.apiKey) {
    console.log('Error: You can\'t leave your API Key empty, exiting.');
    //Exit
    process.exit(1);
  }
}

//Require some self written libraries
require('./lib/requests.js');
require('./lib/saving.js');