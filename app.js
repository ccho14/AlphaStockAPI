/**
 * Init Alpha Vantage with your API key.
 *
 * @param {String} key 
 *   Your Alpha Vantage API key.
 */
const alpha = require('alphavantage')({
  key: '5BXBGO0O397FNY19'
});
var util = require('util');

// Simple examples
// alpha.data.intraday(`ACB.TO`).then(data => {
//   console.log(data);
// });

alpha.technical.rsi(`ACB.TO`, `60min`, 14, `close`).then(data => {
  var data1 = data;
  // console.log(data); 
  var jsonRes = {};

  jsonRes = JSON.stringify(data1);
  
  console.log(jsonRes);
});




// obj = JSON.parse(json);
// console.log(obj.count);


// alpha.data.batch([`msft`, `aapl`]).then(data => {
//   console.log(data);
// });

// alpha.forex.rate('btc', 'usd').then(data => {
//   console.log(data);
// });

// alpha.crypto.daily('btc', 'usd').then(data => {
//   console.log(data);
// });

// alpha.technical.sma(`msft`, `daily`, 60, `close`).then(data => {
//   console.log(data);
// });

// alpha.performance.sector().then(data => {
//   console.log(data);
// });