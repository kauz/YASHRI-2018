let robot = require('../img/robot.png');
let logo = require('../img/logo.svg');

let eventsJson = require('../../src/data/events.json');

module.exports = class Event {

    loadEvents() {
        let xhr = new XMLHttpRequest();

        xhr.open('GET', `./src/data/events.json`, true);

        xhr.onload = function() {

            let output = '';


            if (this.status === 200) {
                let response = JSON.parse(this.responseText);

                response.events.forEach(function(event) {
                    output += `<div class="event event_type_${event.type} event_size_${event.size}">
                                    <div class="event__heading">
                                        <i class="event__icon icon__${event.icon}"></i>
                                        <p class="event__title">${event.title}</p>
                                    </div>
                                    <div class="event__status">
                                        <div class="event__source">${event.source}</div>
                                        <div class="event__time">${event.time}</div>
                                    </div>
                                    ${event.description !== null ? `<div class="event__body">` + event.description : ``}
                                    ${event.data !== undefined && event.data.image !== undefined ? `<img class="event__img" src="public/${robot}DELETE" alt="${event.title}">` : ``}
                                    ${event.data !== undefined && event.data.type === 'graph' ? `<img class="event__img" src="graph.jpg" alt="${event.title}">` : ``}
                                    ${event.data !== undefined && event.data.albumcover !== undefined ? `<img class="event__img" src="album.jpg" alt="${event.title}">` : ``}
                                    ${event.data !== undefined && event.data.humidity !== undefined ? `<div class="event__data"><p>Температура: ${event.data.temperature}</p> <p>Влажность: ${event.data.humidity}</p></div>` : ``}
                                    ${event.data !== undefined && event.data.buttons !== undefined ? `<button>${event.data.buttons[0]}</button> <button>${event.data.buttons[1]}</button>` : ``}
                               </div>
                              ` + `</div>`;
                });

            }

            else {
                output += '<li>Something went wrong</li>'
            }

            document.querySelector('.events').innerHTML = output;
            console.log(eventsJson.events);
            console.log(robot);

        };

        xhr.send();
    }
}