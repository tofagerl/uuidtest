const uuid = require('node-uuid');
const colors = require('colors');
const commander = require('commander');
const pretty = require('pretty-cli')();

commander.version('0.2')
  .option('-n, --number', 'Specify the number of UUIDs to test')
  .option('-z, --forever', 'Run until aborted')
  .option('-b, --benchmark', 'Test 100.000 UUIDs and see how long it takes')
  .option('-t, --test', 'Generate UUIDs and test against initial UUID to see if one of them match those already created')
  .parse(process.argv);

let currentTime;
start(commander);

function start(args){
  currentTime = new Date();
}

function test (n = -1 , cb) {
  let array = [];
  let matched = false;
  if (array.length === n) {
    return cb();
  }
  while (!matched) {
    let current = uuid.v4();
    if (array.length % 1000 === 0) {
      time();
    }
    return match(current);
  }
}
function benchmark(n = -1, function(){

}){
  let iterations = n>0? n: 100000;
  test()
}
function match (current) {
  if (array.includes(current)) {
    pretty.log('uuid is matched!');
    matched = true;
  } else {
    array.push(current);
  }
}
function time (cb, current) {
  let now = new Date();
  let result = now - currentTime;
  currentTime = now;
  let message = `Now comparing against ${array.length} UUIDs. The last 1000 comparisons took ${msToTime(result)}`;
  pretty.info(message.yellow);
}
function msToTime (s) {
  var ms = s % 1000;
  s = (s - ms) / 1000;
  var secs = s % 60;
  s = (s - secs) / 60;
  var mins = s % 60;
  var hrs = (s - mins) / 60;
  return hrs + 'h ' + mins + 'm ' + secs + 's ' + ms + 'ms';
}
