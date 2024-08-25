var input = document.getElementById('to_field');
var span = document.getElementById('toField');

input.addEventListener('blur', function() {
  submit();
});

input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        submit();
    }
});

function submit(){
    var text = input.value;
    span.innerHTML = text;
}

var select = document.getElementById("picture");
var picture = document.getElementById("thePicture");

select.addEventListener('change', function(){
    var option = select.value;
    if (option == "CatInGlass") {
        picture.src = "images/CatInGlass.jpg";
    }
    else {
        picture.src = "images/CatToothbrush.jpg";
    }
    select.blur();
});

var canvas = document.getElementById("myCanvas");
var you = document.querySelectorAll(".you");
var draw = canvas.getContext("2d");
var image = new Image();
image.src = "images/crazycat.gif";

var x = 0;
var y = 0;
var step = 5;
var text = "Hello Kitty";
draw.font = '12px Comic Sans MS';

image.onload = function() {
    update();
};

function update() {
    draw.clearRect(0, 0, canvas.width, canvas.height);
    draw.fillText(text, canvas.width - draw.measureText(text).width - 2, canvas.height - 4);
    draw.drawImage(image, x, y);
    
    if (x + image.width >= canvas.width && y + image.height >= canvas.height) {
        alert("SURPRISE!!!");
        you.forEach(function(e) {
            e.style.backgroundColor = "red";
            e.style.color = "white";
            e.style.textTransform = "uppercase";
        });
    }
}

document.addEventListener('keydown', function(e) {
    if (e.key == "ArrowRight") {
        if (x + image.width <= canvas.width) {
            x += step;
            update();
        }
    }
    else if (e.key == "ArrowLeft") {
        if (x - step >= 0) {
            x -= step;
            update();
        }
    }
    else if (e.key == "ArrowUp") {
        if (y - step >= 0) {
            y -= step;
            update();
        }
    }
    else if (e.key == "ArrowDown") {
        if (y + step + image.height <= canvas.height) {
            y += step;
            update();
        }
    }
});