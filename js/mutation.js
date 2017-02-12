function mutation ()
{
		var input_sequence = document.getElementById("original_sequence").value;


	
		var mutation_rate = document.getElementById("jstp_value").value;
		console.log(input_sequence);
		console.log(mutation_rate);
		var mutation_constant = 20 * mutation_rate;
		init_mutation (mutation_constant, input_sequence);

}

function init_mutation (mutation_constant, input_sequence)
{
		for (i = 0; i < mutation_constant; i++)
			{
			var mutationtype = Math.floor((Math.random() * 3) + 1);
			console.log(mutationtype);
			if (mutationtype == 1){ insert(input_sequence); }
			if (mutationtype == 2){}
			if (mutationtype == 3){}
			}
}


