const Event = require('./Event');
let surveillance = require('./surveillance');

let event = new Event;

document.addEventListener('DOMContentLoaded', event.loadEvents);