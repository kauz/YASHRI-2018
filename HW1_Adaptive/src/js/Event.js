module.exports = class Event {

    loadEvents() {
        let xhr = new XMLHttpRequest();

        xhr.open('GET', `./src/data/events.json`, true);

        xhr.onload = function() {

            let output = '';


            if (this.status === 200) {
                let response = JSON.parse(this.responseText);

                console.log(response);

                response.events.forEach(function(event) {
                    output += `<li>${event.title}</li>`;
                });

            }

            else {
                output += '<li>Something went wrong</li>'
            }

            document.querySelector('.events').innerHTML = output;

        };

        xhr.send();
    }
}