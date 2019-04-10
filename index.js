'use strict';

module.exports = API;

/**
 * Creates a new instance of tf2keys-api
 * @class
 * @param {object} options
 */

//Tilføje events måske?

function API(options) {
  //The users API Key
  this.apiKey = options.apiKey;
  //The default directory to save files
  this.dataDirectory = '../';
  //Optional settings 
  this.options = options || {};
}

require('./lib/requests.js');
require('./lib/saving.js');