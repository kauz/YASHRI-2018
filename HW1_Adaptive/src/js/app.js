const Event = require('./Event');

let event = new Event;

document.querySelector('.get-data').addEventListener('click', event.loadEvents);

console.log(event);