load_original_sequence();
var submit = 0;
 
  
function show_comment()
 	{
 		if (submit == 0){
 			document.getElementById("text_comment").value = "" ;
 			$('#like_button').html('<i class="fa fa-paper-plane" aria-hidden="true"></i> Submit');
 			document.getElementById('div_comment').style.display = 'block';
 			submit = 1;
 			}
 		else if (submit == 1)
 			{
 			
 				if ( document.getElementById("name").value == "" || document.getElementById("jstp_value").value == "" )
					{
					swal("โปรดระบุชื่อเเละรุ่น JSTP", "ขอบคุณครับ", "info");
					
					//alert ("Please type your name");
					}
		
				else 
					{
				
					submit = 0;
					post_it (100);
					
 					$('#like_button').html('<i class="fa fa fa-heart" aria-hidden="true"></i> Like this');
 					document.getElementById('div_comment').style.display = 'none';
 					
					}
 	
 			}
			
	}