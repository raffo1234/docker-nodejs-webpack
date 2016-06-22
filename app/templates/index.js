module.exports = angular.module('app', []);

function printMessage (status='working') {
// let
  let message = 'ES6';
// template string
  console.log(`${message} is ${status}`);
}
printMessage();