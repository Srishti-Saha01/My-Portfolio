// Simple example: Add Smooth scrolling to anchor links
document.querySelectorAll('a[href = "#"]').forEach(anchor => {
    anchor.addEventListener('click',function(e) {

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// Create gradient
var grd = ctx.createLinearGradient(0,10,200,0);
grd.addColorStop(0,"aqua");
grd.addColorStop(1,"yellow");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(0,0,200,121);

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.font = "20px Georgia";
ctx.strokeText("Hey, I am Srishti",15,58.5);
