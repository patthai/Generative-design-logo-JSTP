function load_original_sequence(gallery_switch)
	{
	
	document.getElementById("gallery").remove();
	var url = "https://spreadsheets.google.com/feeds/list/17jh5-1uCEFY0haO4I55i7N2nh26kcPsjeyGEF2JmoWI/od6/public/basic?alt=json";
	

 $.getJSON(url, function(data) // Get JSON from google sheet
 	{
		
		var JSON_data = data.feed.entry;
		var JSON_length = JSON_data.length;
		
		
		var i = 0;
		var count_to_three = 0;
		
		$( ".container" ).append( $( "<div class=\"row\" id =\"gallery\"></div>" ) );
				
		
		function load_gallery()
			{
				
				
				var string_data = JSON_data[i].content.$t;
					//<*********** convert each line to JSON ***********>
				string_data = "{" + "\"" + string_data.replace(/:/g,"\":\"") +  "\"" + "}" ;
				string_data = string_data.replace(/,/g,"\",\"");
				string_data = string_data.replace(/\" /g,"\"");
				var final_data = JSON.parse(string_data);
				//<*********** convert each line to JSON ***********>
				var original_sequence = final_data.originalsequence;
			
				var canvas_name = String ("myCanvas_"+i);
				var comment_text = final_data.comment;
				if (comment_text == null)
					{
					comment_text = " ";
					}
			
				if (gallery_switch == 1)
					{
					if (final_data.comment == null ) 
						{
						i++;
		   				load_gallery();
						}	
					}
				
					//$( ".container" ).append( $( "<div class=\"row\">" ) );
					$( ".row" ).append( $( "<div class=\"col-md-4\"><canvas id=\"" + canvas_name + "\"width=\"400\" height=\"400\" ></canvas> <center style=\" margin-top: 20px;\"><center><h3> Generation " + i + "</center></h3><center><p>" + comment_text + "</center> <h4><span class=\"badge badge-danger\">" + final_data.name + "</span></h4></center>" ) );
					draw_init (canvas_name,original_sequence);
			
					
				
				
				
		   		if (i < JSON_length)
		   			{
		   			i++;
		   			load_gallery();
		   			}
			}
		
		
		load_gallery();
		

		 	
 	});

}
 



	
