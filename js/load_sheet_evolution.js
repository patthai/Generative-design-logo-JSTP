function load_original_sequence()
	{
	
	var url = "https://spreadsheets.google.com/feeds/list/17jh5-1uCEFY0haO4I55i7N2nh26kcPsjeyGEF2JmoWI/od6/public/basic?alt=json";
	var i = 0;
	

 load_original_sequence.move_scene =  function move_scene(direction){

 $.getJSON(url, function(data) // Get JSON from google sheet
 	{
		var JSON_data = data.feed.entry;
		var JSON_length = JSON_data.length;
		
		
		if ( direction == 1 && i < JSON_data.length)
		{
		 i++;
		}
		
		else if ( direction == 0 && i > 0)
		{
		 i--;
		}
		
		
		//original sequence is the starting point for mutation;
		//var original_sequence = JSON [];
		//console.log (JSON_data.length);
		
		
		var string_data = JSON_data[i].content.$t;
		//<*********** convert each line to JSON ***********>
		string_data = "{" + "\"" + string_data.replace(/:/g,"\":\"") +  "\"" + "}" ;
		string_data = string_data.replace(/,/g,"\",\"");
		string_data = string_data.replace(/\" /g,"\"");
		var final_data = JSON.parse(string_data);
		//<*********** convert each line to JSON ***********>
		var original_sequence = final_data.originalsequence; 
		
		////////console.log(final_data);
		document.getElementById("generation").innerHTML = "Generation " + i +  " by " + final_data.name;
		if (final_data.comment != null)
			{
			document.getElementById("comment").innerHTML = final_data.comment;
			}
		else{document.getElementById("comment").innerHTML = "";}
		draw_init ('only_canvas',original_sequence);
		
 		 	
 	});
 	}
  load_original_sequence.move_scene(100);

}
 

