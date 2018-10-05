const Event = require('./Event');

let event = new Event;

document.addEventListener('DOMContentLoaded', event.loadEvents);

document.querySelector('.events').addEventListener('pointerdown', myFunc);

function myFunc(e) {
    if (e.target.classList.contains('cam__img') && e.pointerType === 'touch') {

        let evCache = new Array();
        let prevDiff = -1;
        console.log(e.pointerType + " " + e.type + " on a "+ e.target.nodeName);
}
    e.preventDefault();
}

function init() {
    // Install event handlers for the pointer target
    var el=document.getElementById("target");
    el.onpointerdown = pointerdown_handler;
    el.onpointermove = pointermove_handler;

    // Use same handler for pointer{up,cancel,out,leave} events since
    // the semantics for these events - in this app - are the same.
    el.onpointerup = pointerup_handler;
    el.onpointercancel = pointerup_handler;
    el.onpointerout = pointerup_handler;
    el.onpointerleave = pointerup_handler;
}


if (window.PointerEvent) {
    // Pointer Events enabled.
} else {
    // Pointer Events not supported
}