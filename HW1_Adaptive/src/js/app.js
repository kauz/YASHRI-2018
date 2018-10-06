let loadEvents = require('./Event');
let touch = require('./TouchCtrl');

let App = (function (TouchCtrl) {


    let loadEventListeners = function () {
        //document.addEventListener('DOMContentLoaded', loadEvents());
        //document.querySelector('.events').addEventListener('pointerdown', TouchCtrl.myFunc);
    };

    return {
        init: function() {

            loadEventListeners();
            TouchCtrl.init();
        }
    }
    
})(touch);


App.init();