'use strict';

const async = require('async');

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
  //Ready 
  if(!this.apiKey) {
    console.log('Error: You can\'t leave your API Key empty, exiting.');
    process.exit(1);
  }
}

require('./lib/requests.js');
require('./lib/saving.js');