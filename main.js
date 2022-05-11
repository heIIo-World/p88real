
// Create canvas variable
var canvas = new fabric.Canvas('myCanvas');

//Set initial positions for ball and hole images.

bally=0;
ballx=0;
holey=400;
holex=800;

block_image_width = 5;
block_image_height = 5;

function load_img(){
	// write code to Upload golf image on the canvas
    fabric.Image.fromURL("golf-h.png", function(Img){
        holeobj = Img;
        holeobj.scaleToWidth(50);
        holeobj.scaleToHeight(50);
        holeobj.set({
            top:holey,
            left:holex
        });
        canvas.add(holeobj);
    });
	new_image();
}

function new_image()
{
	// write code to Upload ball image on canvas
   fabric.Image.fromURL("ball.png", function(Img){
        ballobj = Img;
        ballobj.scaleToWidth(50);
        ballobj.scaleToHeight(50);
        ballobj.set({
            top:bally,
            left:ballx
        });
        canvas.add(ballobj);
    });
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
    if((ballx==holex)&&(bally==holey)){
    canvas.remove(ballobj);
    document.getElementById("hd3").innerHTML="You have hit the goal!";
    document.getElementById("myCanvas").style.borderColor="red";
}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		// Write a code to move ball upward.
        if(bally >0) {
        bally = bally - block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("When up arrow key is pressed, X = " + ballx + ", Y ="+ bally);
        canvas.remove(ballobj);
        new_image();
        }
	}

	function down()
	{
		 // Write a code to move ball downward.
        if(bally<=445) {
        bally = bally+block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("When down arrow key is pressed, X = " + ballx + ", Y ="+ bally);
        canvas.remove(ballobj);
        new_image();
        }
        else {
        
        }
	}

	function left()
	{
		if(ballx >0)
		{
			// Write a code to move ball left side.
            ballx = ballx-block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("When left arrow key is pressed, X = " + ballx + ", Y ="+ bally);
        canvas.remove(ballobj);
        new_image();
		}
	}

	function right()
	{
		if(ballx <=1045)
		{
			// Write a code to move ball right side.
            ballx = ballx+block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("When down arrow key is pressed, X = " + ballx + ", Y ="+ bally);
        canvas.remove(ballobj);
        new_image();
		}
	}
	
}

