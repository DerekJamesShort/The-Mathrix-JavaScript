//Retreive canvas by ID
var canvas = document.getElementById("matrixCanvas");
var ctx = canvas.getContext("2d");

//Make the canvas full screen.
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

//array of mathematical symbols in unicode characters
var matrix = [
"\u2200", 
"\u2203", 
"\u2204", 
"\u2205", 
"\u2206", 
"\u2208", 
"\u2209", 
"\u220F", 
"\u2210", 
"\u2211", 
"\u2213", 
"\u2218", 
"\u221A", 
"\u221B", 
"\u221C", 
"\u221E", 
"\u2220", 
"\u2221", 
"\u2222", 
"\u2226", 
"\u2229", 
"\u222D", 
"\u222E", 
"\u2233", 
"\u2234", 
"\u223A", 
"\u223B", 
"\u223F", 
"\u2241", 
"\u2242", 
"\u2244", 
"\u2248", 
"\u2249", 
"\u224B", 
"\u224D", 
"\u2251", 
"\u2257", 
"\u2258", 
"\u2259", 
"\u225B", 
"\u225C", 
"\u2260", 
"\u2261", 
"\u2264", 
"\u2268", 
"\u226A", 
"\u226C", 
"\u226D", 
"\u2282", 
"\u2285", 
"\u229C", 
"\u22BE", 
"\u22BF", 
"\u22C8", 
"\u2A0B"
];

var font_size = 20;

//number of columns for the rain
var columns = canvas.width / font_size;

//array of drops; one per column
var drops = [];

//x = X coordinate of the drop
//1 = Y coordinate of the drop (same for every drop, initially)
for(var x = 0; x < columns; x++)
	drops[x] = 1; 

//Draw the characters and background.
function draw()
{
	//Black-colored background for the canvas and translucent background to show trail.
	ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
	//context.fillRect(x, y, width, height);
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	ctx.fillStyle = "#00FF00"; //green-colored text
	ctx.font = "20px Arial";
	
	//Loop the rain drops.
	for(var i = 0; i < drops.length; i++)
	{
		//a random character to print
		var text = matrix[Math.floor(Math.random() * matrix.length)];
		
		//X-coordinate = i * font_size
		//Y-coordinate = value of drops[i] * font_size
		ctx.fillText(text, i * font_size, drops[i] * font_size);

		//Send the drop back to the top randomly after it has crossed the screen.
		//Add a randomness to the reset to make the drops scattered on the Y axis.
		if(drops[i] * font_size > canvas.height && Math.random() > 0.975)
			drops[i] = 0;

		//Increment the Y coordinate.
		drops[i]++;
	}
	
	//Draw center title text over black-colored background.
	ctx.fillStyle = "#000000"; //black
	var centerText = "Enter The Mathrix";
	//ctx.fillRect(x, y, width, height);
	ctx.fillRect((canvas.width/2)-(Math.floor(ctx.measureText(centerText).width)), (canvas.height/2)-20, Math.floor(ctx.measureText(centerText).width)*2, 45);
	ctx.fillStyle = "#00FF00"; //green-colored text
	ctx.font = "30px Arial"; //font size and style
	ctx.textAlign = "center"; 
	ctx.textBaseline = "middle";
	ctx.fillText(centerText, canvas.width/2, canvas.height/2);
}
//Draw the canvas every 45 milliseconds.
setInterval(draw, 45);