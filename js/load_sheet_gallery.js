function load_original_sequence()
	{
	
	var url = "https://spreadsheets.google.com/feeds/list/17jh5-1uCEFY0haO4I55i7N2nh26kcPsjeyGEF2JmoWI/od6/public/basic?alt=json";
	

 $.getJSON(url, function(data) // Get JSON from google sheet
 	{
		var JSON_data = data.feed.entry;
		var JSON_length = JSON_data.length;
		
		//original sequence is the starting point for mutation;
		//var original_sequence = JSON [];
		//console.log (JSON_data.length);
		
		
		var string_data = JSON_data[JSON_length-1].content.$t;
		//<*********** convert each line to JSON ***********>
		string_data = "{" + "\"" + string_data.replace(/:/g,"\":\"") +  "\"" + "}" ;
		string_data = string_data.replace(/,/g,"\",\"");
		string_data = string_data.replace(/\" /g,"\"");
		var final_data = JSON.parse(string_data);
		//<*********** convert each line to JSON ***********>
		var original_sequence = final_data.originalsequence; 
		
		////////console.log(final_data);
		document.getElementById("original_sequence").innerHTML = original_sequence;
		document.getElementById("generation_count").innerHTML = "Generation : " + JSON_data.length;
		draw_init ('myCanvas_ancestral',original_sequence);
		mutation ();
 		 	
 	});

}
 

