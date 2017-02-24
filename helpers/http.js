var http = require('http');

// http.get({
//   hostname: 'localhost',
//   port: 80,
//   path: '/',
//   agent: false  // create a new agent just for this one request
// }, (res) => {
//   // Do stuff with response
//   console.log("aha")
// });


module.exports = {
  get: (url) => {
    console.log( "Get request", url);
  },
       
  post: function(url, data) {
    console.log("POSt")
  }
};