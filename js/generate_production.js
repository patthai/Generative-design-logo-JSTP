	var canvas_width_center = 400/14;
	var canvas_height_center = 400/14;
	var colour_A;
	var colour_B;
	var colour_C; 

function DNA_to_hex(input)
	{
	//number of time to split
	var num_split = (input.length)/2;
	var output ="";
	
	for (i = 0; i< num_split; i++)
		{
		var reading_codon = input.charAt(i*2)+ input.charAt((i*2)+1);
		     if (reading_codon == "AA"){ output = output + "0";}
		else if (reading_codon == "AT"){ output = output + "1";}
		else if (reading_codon == "AC"){ output = output + "2";}
		else if (reading_codon == "AG"){ output = output + "3";}
		else if (reading_codon == "TA"){ output = output + "4";}
		else if (reading_codon == "TT"){ output = output + "5";}
		else if (reading_codon == "TC"){ output = output + "6";}
		else if (reading_codon == "TG"){ output = output + "7";}
		else if (reading_codon == "CA"){ output = output + "8";}
		else if (reading_codon == "CT"){ output = output + "9";}
		else if (reading_codon == "CC"){ output = output + "A";}
		else if (reading_codon == "CG"){ output = output + "B";}
		else if (reading_codon == "GA"){ output = output + "C";}
		else if (reading_codon == "GT"){ output = output + "D";}
		else if (reading_codon == "GC"){ output = output + "E";}
		else if (reading_codon == "GG"){ output = output + "F";}
		}
		
		return(output);
	
	
	}

function DNA_to_number(input)
	{
	//number of time to split
	var num_split = (input.length)/2;
	var output ="";
	
	for (i = 0; i< num_split; i++)
		{
		var reading_codon = input.charAt(i*2)+ input.charAt((i*2)+1);
		     if (reading_codon == "AA"){ output = output + "0";}
		else if (reading_codon == "AT"){ output = output + "1";}
		else if (reading_codon == "AC"){ output = output + "2";}
		else if (reading_codon == "AG"){ output = output + "3";}
		else if (reading_codon == "TA"){ output = output + "4";}
		else if (reading_codon == "TT"){ output = output + "5";}
		else if (reading_codon == "TC"){ output = output + "6";}
		else if (reading_codon == "TG"){ output = output + "7";}
		else if (reading_codon == "CA"){ output = output + "8";}
		else if (reading_codon == "CT"){ output = output + "9";}
		else if (reading_codon == "CC"){ output = output + "10";}
		else if (reading_codon == "CG"){ output = output + "11";}
		else if (reading_codon == "GA"){ output = output + "12";}
		else if (reading_codon == "GT"){ output = output + "13";}
		else if (reading_codon == "GC"){ output = output + "14";}
		else if (reading_codon == "GG"){ output = output + "15";}
		}
		
		return(output);
	
	
	}
	

function color_object(input, draw_object)
	{
		//colour switch
		var color_switch = input.charAt(37);
		
		function color_picking(DNA_input)
			{
			var output_color;
			if (DNA_input == 'A'){output_color = "#"+colour_A;}
			else if (DNA_input == 'T'){output_color = "#"+colour_B;}
			else if (DNA_input == 'C'){output_color = "#"+colour_C;}
			else if (DNA_input == 'G'){output_color = "#"+colour_C;}
			
			return (output_color);
			} 
		
		
		//colour pallet
		var colour_1 = color_picking (input.charAt(38));
		var colour_2 = color_picking (input.charAt(39));

		
		
		//plain
		if (color_switch == 'A'){draw_object.fillColor = colour_1; draw_object.strokeWidth = 2;}
		else if (color_switch == 'T'){draw_object.strokeColor = colour_1; draw_object.strokeWidth = 2;}
		else if (color_switch == 'C'){draw_object.fillColor = {gradient: {stops: [[colour_1,], [colour_2, 0.5]],radial: false},origin: draw_object.position, destination: draw_object.bounds.rightCenter}; draw_object.strokeWidth = 2; }	
		else if (color_switch == 'G'){draw_object.strokeColor = {gradient: {stops: [[colour_1], [colour_2]],radial: false},origin: draw_object.position, destination: draw_object.bounds.rightCenter}; draw_object.strokeWidth = 2;}
	
		draw_object.blendMode = 'saturation';
		
		
		
		
		
		
	}

//draw_square
function draw_square(input, operon_size)
	{
		//check if the sequence is completed
		
		var repeat_switch = input.charAt(32);
		var repeat_n = parseInt(DNA_to_number(input.substring(33, 35)));
		var repeat_distance = parseInt(DNA_to_number(input.substring(35, 37)));
		
		
		if (input.length == operon_size)
		{
			
			var count = 0;
			var multiplyer = 3;
			var point_x_1 = parseInt(DNA_to_number(input.substring(0, 4)))*multiplyer + canvas_width_center ; var point_y_1 = parseInt(DNA_to_number(input.substring(4, 8)))*multiplyer + canvas_height_center;
			var point_x_2 = parseInt(DNA_to_number(input.substring(8, 12)))*multiplyer + canvas_width_center; var point_y_2 = parseInt(DNA_to_number(input.substring(12,16)))*multiplyer + canvas_height_center;
			var point_x_3 = parseInt(DNA_to_number(input.substring(16,20)))*multiplyer + canvas_width_center; var point_y_3 = parseInt(DNA_to_number(input.substring(20,24)))*multiplyer + canvas_height_center;
			var point_x_4 = parseInt(DNA_to_number(input.substring(24,28)))*multiplyer + canvas_width_center; var point_y_4 = parseInt(DNA_to_number(input.substring(28,32)))*multiplyer + canvas_height_center;
			
			function draw_one_square()
				{
				
				//path
					var draw_object = new Path();
					draw_object.add(new Point(point_x_1, point_y_1));
					draw_object.add(new Point(point_x_2, point_y_2));
					
					draw_object.add(new Point(point_x_4, point_y_4));
					draw_object.add(new Point(point_x_3, point_y_3));
					
					
					draw_object.closed = true;
					
				
				//colour
					color_object(input, draw_object);
					
				
				//if repeat is on!	
				if (repeat_switch == 'C' || repeat_switch == 'G')
					{

						if (count < repeat_n)
						{
						count++;
						point_x_1 = point_x_1 + repeat_distance ; point_y_1 = point_y_1 + repeat_distance;
						point_x_2 = point_x_2 + repeat_distance ; point_y_2 = point_y_2 + repeat_distance;
						point_x_3 = point_x_3 + repeat_distance ; point_y_3 = point_y_3 + repeat_distance;
						point_x_4 = point_x_4 + repeat_distance ; point_y_4 = point_y_4 + repeat_distance;
						draw_one_square();
						}
					}
				}
			
			
			draw_one_square();
		}
		draw_process.read_sequence();
	}
	
//draw_ellipse
function draw_ellipse(input, operon_size)
	{
		//check if the sequence is completed
		var repeat_switch = input.charAt(32);
		var repeat_n = parseInt(DNA_to_number(input.substring(33, 35)));
		var repeat_distance = parseInt(DNA_to_number(input.substring(35, 37)));
		if (input.length == operon_size)
		{
			var count = 0;
			var point_x_1 = parseInt(DNA_to_number(input.substring(0, 4)))*1 + canvas_width_center ; var point_y_1 = parseInt(DNA_to_number(input.substring(4, 8)))*1 + canvas_height_center;
			var size_x = parseInt(DNA_to_number(input.substring(8, 12)))*1 + canvas_width_center; var size_y = parseInt(DNA_to_number(input.substring(12,16)))*1 + canvas_height_center;
			
			function draw_one_ellipse()
				{
				//path
					
					var rectangle = new Rectangle(new Point(point_x_1, point_y_1), new Size(size_x, size_y));
					var draw_object = new Path.Ellipse(rectangle);
					
					draw_object.closed = true;
					
				
				//colour
					color_object(input, draw_object);
					
				
				//if repeat is on!	
								if (repeat_switch == 'C' || repeat_switch == 'G')
					{

						if (count < repeat_n)
						{
						count++;
						point_x_1 = point_x_1 + repeat_distance ; point_y_1 = point_y_1 + repeat_distance;
						size_x = size_x + repeat_distance ; size_y = size_y + repeat_distance;
						
						draw_one_ellipse();
						}
					}
				}
			
			
			draw_one_ellipse();
		}
		draw_process.read_sequence();
	}
	



function draw_process(input_DNA_string)
	{
	
	//develop colour scheme first
	colour_A = DNA_to_hex (input_DNA_string.substring(0, 12));
	colour_B = DNA_to_hex (input_DNA_string.substring(12, 24));
	colour_C = DNA_to_hex (input_DNA_string.substring(24, 36)); 
	var coding_sequence = input_DNA_string.substring(36, input_DNA_string.length);
	var coding_sequence_length = coding_sequence.length;
	
	
	
	//reading sequence
	var i = 0;

	var operon_size = 40;
	
	draw_process.read_sequence = function read_sequence ()
		{
		if (i < coding_sequence_length)
		
				{
				
				var reading_codon = coding_sequence.substring(i, i+2);
				
				if(reading_codon == "AA")
					{ 

					var starting_site_square = i;
					i = i + operon_size + 2; // operon_size+ reading codon
					//console.log("square" + coding_sequence.substring(starting_site_square+2, starting_site_square+operon_size+2));
					draw_square(coding_sequence.substring(starting_site_square+2, starting_site_square+operon_size+2), operon_size);
				
					
					}
					
				else if(reading_codon == "AT")
					{ 
					var starting_site_circle = i;
					i = i + operon_size + 2; // operon_size+ reading codon
					//console.log("circle" + coding_sequence.substring(starting_site_circle+2, starting_site_circle+operon_size+2));
					draw_ellipse(coding_sequence.substring(starting_site_circle+2, starting_site_circle+operon_size+2), operon_size);
					
					}	
					
				else
					{
					i++; 
					draw_process.read_sequence ();

					}	
					
				}
				
				
			
		}
		
	draw_process.read_sequence ();


	}
	




function draw_init (canvas,input_DNA_string)
	{
	
	////////////////console.log(canvas);
	paper.install(window);          
	paper.setup(canvas);
	
	draw_process(input_DNA_string);
	paper.view.draw();

	}

