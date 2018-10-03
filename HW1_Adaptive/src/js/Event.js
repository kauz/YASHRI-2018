let robot = require('../img/robot.png');
let graph = require('../img/graph.svg');
let logo = require('../img/logo.svg');
let player = require('../img/player.png');

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
                                   
                                        ${event.description !== null ? '<div class="event__body">' + event.description + '</div>': ``}
                                    
                                    
                                    ${event.data !== undefined ? `<div class="event__data">` : ``}
                                        
                                        ${event.data !== undefined && event.data.image !== undefined ? `<img class="data__img event__img" src="public/${robot}" alt="${event.title}">` : ``}
                                        ${event.data !== undefined && event.data.type === 'graph' ? `<img class="data__img event__img" src="public/${graph}" alt="${event.title}">` : ``}
                                        ${event.data !== undefined && event.data.albumcover !== undefined ? `<img class="data__img event__img" src="public/${player}" alt="${event.title}">` : ``}
                                        ${event.data !== undefined && event.data.humidity !== undefined ? `<div class="data__items"><p class="data__item">Температура: ${event.data.temperature}</p> <p class="data__item">Влажность: ${event.data.humidity}</p></div>` : ``}
                                        ${event.data !== undefined && event.data.buttons !== undefined ? `<div class="data__buttons"><button class="data__button button button_primary">${event.data.buttons[0]}</button> <button class="data__button button">${event.data.buttons[1]}</button></div>` : ``}
                                    
                                    ${event.data !== undefined ? `</div>` : ``}
                
                                                    
                                               </div>`;
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