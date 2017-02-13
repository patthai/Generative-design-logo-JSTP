	var canvas_width_center = 900/14;
	var canvas_height_center = 900/14;

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
		else if (reading_codon == "CC"){ output = output + "0";}
		else if (reading_codon == "CG"){ output = output + "1";}
		else if (reading_codon == "GA"){ output = output + "2";}
		else if (reading_codon == "GT"){ output = output + "3";}
		else if (reading_codon == "GC"){ output = output + "4";}
		else if (reading_codon == "GG"){ output = output + "5";}
		}
		
		return(output);
	
	
	}
	




function draw_square(input, operon_size)
	{
		//check if the sequence is completed
		var repeat_n = parseInt(DNA_to_number(input.substring(34, 36)));
		var repeat_distance = parseInt(DNA_to_number(input.substring(36, 38)));
		var repeat_switch = input.charAt(33);
		if (input.length == operon_size)
		{
			var count = 0;
			var point_x_1 = parseInt(DNA_to_number(input.substring(1, 5)))*3 + canvas_width_center ; var point_y_1 = parseInt(DNA_to_number(input.substring(5, 9)))*3 + canvas_height_center;
			var point_x_2 = parseInt(DNA_to_number(input.substring(9, 13)))*3 + canvas_width_center; var point_y_2 = parseInt(DNA_to_number(input.substring(13,17)))*3 + canvas_height_center;
			var point_x_3 = parseInt(DNA_to_number(input.substring(17,21)))*3 + canvas_width_center; var point_y_3 = parseInt(DNA_to_number(input.substring(21,25)))*3 + canvas_height_center;
			var point_x_4 = parseInt(DNA_to_number(input.substring(25,29)))*3 + canvas_width_center; var point_y_4 = parseInt(DNA_to_number(input.substring(29,33)))*3 + canvas_height_center;
			
			function draw_one_square()
				{
			
					var myPath = new Path();
					myPath.strokeColor = 'black';
					myPath.add(new Point(point_x_1, point_y_1));
					myPath.add(new Point(point_x_2, point_y_2));
					myPath.add(new Point(point_x_3, point_y_3));
					myPath.add(new Point(point_x_4, point_y_4));
					myPath.closed = true;
				
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
	



function draw_process(input_DNA_string)
	{
	//develop colour scheme first
	var colour_A = DNA_to_hex (input_DNA_string.substring(0, 12));
	var colour_B = DNA_to_hex (input_DNA_string.substring(12, 24));
	var colour_C = DNA_to_hex (input_DNA_string.substring(24, 36)); 
	var coding_sequence = input_DNA_string.substring(36, input_DNA_string.length);
	var coding_sequence_length = coding_sequence.length;
	console.log(coding_sequence_length);
	//reading sequence
	var i = 0;

	var operon_size = 46;
	
	draw_process.read_sequence = function read_sequence ()
		{
		if (i < coding_sequence_length)
				{
				i = i+operon_size; 

	
				if(coding_sequence.charAt(i) == 'A')
					{ draw_square(coding_sequence.substring(i, i+operon_size), operon_size); }
				else if(coding_sequence.charAt(i) == 'G')
					{ draw_square(coding_sequence.substring(i, i+operon_size), operon_size); }	
				else if(coding_sequence.charAt(i) == 'T')
					{ draw_square(coding_sequence.substring(i, i+operon_size), operon_size); }	
				else if(coding_sequence.charAt(i) == 'C')
					{ draw_square(coding_sequence.substring(i, i+operon_size), operon_size); }		
				else
					{draw_process.read_sequence ();}	
					
				}
				
				
			
		}
		
	draw_process.read_sequence ();


	}
	




function draw_init ()
	{

	paper.install(window)          
	paper.setup('myCanvas')

	var input_DNA_string = "CGAAACTCAGCGATCGGTTTCAGCACCCCATCGCTTGCATCGGAAGACACCCAAAAATTTAAAATCGACTCAGATACAATCGAACTCAGCGATCGTAACCGTAGCTAGGCTAGACACATTTAAACGTTTCAGCACCCCATCAGCTTGCATCGGACGACACCCCAAAAATTTAAAATCGACTCAGATACAATCGAACTCAGCGATCGTAACCGTAGCTAGGCTAGACACATTTAAACGTTTCAGCACCCCATCAGCTTGCATCGGACGACACCCCAAAAATTT";
	draw_process(input_DNA_string);


	}

draw_init ();