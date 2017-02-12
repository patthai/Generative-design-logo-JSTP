paper.install(window)          
paper.setup('myCanvas')

for (i = 0; i < 10; i++){
	var x = i*4;
	var y = i*5
	var shape = new Shape.Circle(new Point(x, y), 30);
	shape.strokeColor = 'black';
	}