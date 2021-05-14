var canvas=document.getElementById('myCanvas');
var pen=canvas.getContext('2d');

// pen.moveTo(200,200)
// pen.lineTo(300,300)
// pen.stroke();


function circle(x,y,color){
    pen.beginPath();
    pen.strokeStyle=color
    pen.lineWidth=5;
    pen.arc(x,y,50,0,6.28);
    pen.stroke();
    
}

circle(200,200,"red")