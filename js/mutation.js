function mutation ()
{
		var input_sequence = document.getElementById("original_sequence").value;


	
		var mutation_rate = document.getElementById("jstp_value").value;
		console.log(input_sequence);
		console.log(mutation_rate);
		
		var mutation_constant = 0.6 * mutation_rate;
		document.getElementById("v_1").value = mutate (mutation_constant, input_sequence);
		document.getElementById("v_2").value = mutate (mutation_constant, input_sequence);
		document.getElementById("v_3").value = mutate (mutation_constant, input_sequence);
		document.getElementById("v_4").value = mutate (mutation_constant, input_sequence);
		

}

function mutate (mutation_constant, input_sequence)
{
	
		
		//******INSERTION*********************
		//******INSERTION*********************
		//******INSERTION*********************
		
		function insertion()
		{
		var sequence_length = inprogress_sequence.length;
		console.log("length" + sequence_length);
		var insert_position = Math.floor((Math.random() * sequence_length) + 1);
		console.log("insert position" + insert_position);
		var left_end = inprogress_sequence.substring(0, insert_position);
		var right_end = inprogress_sequence.substring(insert_position, sequence_length);
		
		var insertion_code = Math.floor((Math.random() * 4) + 1);
			if (insertion_code == 1){ var middel_end = "A"; }
			else if (insertion_code == 2){ var middel_end = "T";}
			else if (insertion_code == 3){ var middel_end = "C";}
			else if (insertion_code == 4){ var middel_end = "G";}
			
		inprogress_sequence = left_end + middel_end + right_end ;
		console.log(inprogress_sequence);
		
		}
		
		//******DELETION*********************
		//******DELETION*********************	
		//******DELETION*********************
		
		function deletion()
		{
		var sequence_length = inprogress_sequence.length;
		console.log("length" + sequence_length);
		var delete_position = Math.floor((Math.random() * sequence_length) + 1);
		console.log("delete position" + delete_position);
		var left_end = inprogress_sequence.substring(0, delete_position-1);
		var right_end = inprogress_sequence.substring(delete_position, sequence_length);
		inprogress_sequence = left_end + right_end ;
		console.log(inprogress_sequence);
		
		}
		
		//******REVERSION*********************
		//******REVERSION*********************
		//******REVERSION*********************
		
		function reversion()
		{
		var sequence_length = inprogress_sequence.length;
		console.log("length" + sequence_length);
		var reversion_position = Math.floor((Math.random() * sequence_length) + 1);
		console.log("reversion_position" + reversion_position);
		var left_end = inprogress_sequence.substring(0, reversion_position-1);
		var right_end = inprogress_sequence.substring(reversion_position+1, sequence_length);
		
		var insertion_code = Math.floor((Math.random() * 4) + 1);
			if (insertion_code == 1){ var middel_end = "A"; }
			else if (insertion_code == 2){ var middel_end = "T";}
			else if (insertion_code == 3){ var middel_end = "C";}
			else if (insertion_code == 4){ var middel_end = "G";}
			
		inprogress_sequence = left_end + middel_end + right_end ;
		console.log(inprogress_sequence);
		
		}
		
		
		
		//******INIT*******************
		//******INIT*******************
		//******INIT*******************
		//******INIT*******************

		
		var inprogress_sequence = input_sequence;
		for (i = 0; i < mutation_constant; i++)
			{
			var mutationtype = Math.floor((Math.random() * 5) + 1);
			console.log(mutationtype);
			if (mutationtype == 1){insertion(); }
			else if (mutationtype == 2)
				{ 
					if (inprogress_sequence.length > 1)
					{
					deletion();
					}
					else {insertion();}
					
				}
			else if (mutationtype == 3){reversion();}
			else if (mutationtype == 4){reversion();}
			else if (mutationtype == 5){insertion();}
		
			}
		return inprogress_sequence;
				
}



