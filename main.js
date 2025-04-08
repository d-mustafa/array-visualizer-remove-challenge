// ARRAY VISUALIZER

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables
let myArray = [];
fillArray();

// Main Program Loop
requestAnimationFrame(draw);

function draw() {
    // Logic
    let barWidth = cnv.width / myArray.length;

    // Drawing
    ctx.clearRect(0, 0, cnv.width, cnv.height);

    // Draw Bar Graph
    ctx.fillStyle = "orange";
    ctx.strokeStyle = "grey";
    for (let i = 0; i < myArray.length; i++) {
        ctx.fillRect(i * barWidth, cnv.height - myArray[i], barWidth, myArray[i]);
        ctx.strokeRect(i * barWidth, cnv.height - myArray[i], barWidth, myArray[i]);        
    }
    

    // Request another Animation Frame
    requestAnimationFrame(draw);
}

//Key Events
document.addEventListener("keydown", keydownHandler)

function keydownHandler(event) {
    console.log(event.code);
    if (event.code == "KeyR") {
        myArray = [];
        fillArray();
    } else if (event.code == "Digit1") {
        myArray = myArray.filter(number => number == 400);
    } else if (event.code == "Digit2") {
        myArray = myArray.filter(number => number == 200);
    }
}


function fillArray() {
    let amountOf200 = 0;
    let amountOf400 = 0;
    for (let i = 0; i < 100; i++) {
        if(amountOf200 == 50) {
            myArray.push(400);
            amountOf400++;
        } else if(amountOf400 == 50) {
            myArray.push(200);
            amountOf200++;
        } else {
            rand = Math.random();
            if (rand > 0.5) {
                myArray.push(200);
                amountOf200++;
            } else {
                myArray.push(400);
                amountOf400++;
            }
        }
    }
}
