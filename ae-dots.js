// Color Dots Generator
// by Aessence (aessence.webflow.io)
let dotSize = 32;
let colors = ['#fefefe', '#000000'];
let dots = 10;
let canvasSize = ['100%', '100%']; // x, y
let canvasBG = 'transparent';
let appendTo = 'body';
let interact = 0;
let delay = 0;

// Get Settings
dotSize = document.currentScript.getAttribute('size');
let colorsArray = document.currentScript || Array.prototype.slice.call(document.getElementsByTagName('colors')).pop();
colors = (colorsArray.getAttribute('colors') || '').split(/, */);
dots = document.currentScript.getAttribute('number');
appendTo = document.currentScript.getAttribute('append');
interact = document.currentScript.getAttribute('interact');
delay = document.currentScript.getAttribute('delay');

var canvas = $('<div id="dots"></div>')
$(canvas).css({
    'width': canvasSize[0],
    'height': canvasSize[1],
    'background': canvasBG,
    'position': 'absolute',
});
$(appendTo).append(canvas);


function Circle(delay) {
    var dot = $('<span class="dot"></span>');
    $(dot).css({
        'position': 'absolute',
        'top': Math.floor(Math.random() * (($('#dots').height() - 20) - 20 + 1)) + 20,
        'left': Math.floor(Math.random() * (($('#dots').width() - 20) - 20 + 1)) + 20,
        'border-radius': '100%',
        'background': colors[Math.floor(Math.random() * colors.length)],
        'width': dotSize + "px",
        'height': dotSize + "px",
        'transform': 'scale(0)'
    });
    $('#dots').append(dot);

    setTimeout(function() {
        anime({
            targets: '#dots span',
            autoplay: true,
            scale: 1,
            duration: 700,
            easing: 'easeOutQuad',
            delay: anime.stagger(50)
        });
    }, delay);

}

if (interact = "1") {
    $(document).click(function() {
        Circle(0);
    });
}

function drawdots(times) {
    times && --times && drawdots(times);
    Circle(delay);
}

drawdots(dots);
