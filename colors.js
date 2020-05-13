var isDay = true;
var target = document.querySelector('body');

var Body = {
    setColor : function(color) {
        $('body').css('color',color);
    },
    setBackgroundColor : function(color) {
        $('body').css('backgroundColor',color);
    }
}

var Links = {
    setColor : function(color) {
        // var links = document.querySelectorAll('a');
        // for(key in links) {
        //     links[key].style.color = color;
        // }
        $('a').css('color', color);
    }
}

function clickButton() {
    var buttons = document.querySelectorAll('.toggle');
    var i = 0;
    if(isDay) {
        Body.setBackgroundColor('black');
        Body.setColor('white');
        isDay=false;
        for(var b in buttons) {
            buttons[b].value='day';
        }
        Links.setColor('yellow');
    }
    else {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        isDay=true;
        for(var b in buttons) {
            buttons[b].value='night';
        }
        Links.setColor('blue');
    }
}