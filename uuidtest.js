const uuid = require('node-uuid');
let array = [];
let matched = false;
let currentTime = new Date();
while (!matched) {
  let current = uuid.v4();
  if (array.length % 1000 === 0) {
    time();
  }
  match(current);
}
function match (current) {
  if (array.includes(current)) {
    console.log('uuid is matched!');
    matched = true;
  } else {
    array.push(current);
  }
}
function time (cb, current) {
  let now = new Date();
  let result = now - currentTime;
  currentTime = now;
  console.log('Now comparing against', array.length, 'UUIDs. The last 1000 comparisons took', msToTime(result));
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
