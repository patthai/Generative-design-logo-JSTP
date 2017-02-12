$(document).ready(function( $ ) {
	
	
	
	window.post_to_sheet = function(){
	    var count = 0;
		var request;
		$("#data").submit(function(event){
		
		if (count < 1){
			var $form = $("#data");
			var $inputs = $form.find("input, select, button, textarea");
			var serializedData = $form.serialize();
	
			$inputs.prop("disabled", true);
			$('#result').text('Sending data...');
	
			request = $.ajax({
				url: "https://script.google.com/macros/s/AKfycbwGWMMJDHvxGI0WVP1G5OasN2zOmfoRsfHGw1GqSnhaysvgGufs/exec",
				type: "post",
				data: serializedData
			});
	
			request.done(function (response, textStatus, jqXHR){
				$('#result').html('<a href="https://docs.google.com/spreadsheets/d/17jh5-1uCEFY0haO4I55i7N2nh26kcPsjeyGEF2JmoWI/edit?usp=sharing" target="_blank">Success - see Google Sheet</a>');
				console.log("Hooray, it worked!");
			
			});
			request.fail(function (jqXHR, textStatus, errorThrown){
				console.error(
				"The following error occured: "+
				textStatus, errorThrown
			);
			});
	
			request.always(function () {
			$inputs.prop("disabled", false);
			});
	
			event.preventDefault();
			}
			count ++;
		});
	
	}
	
	
});

function post_it()
{
	post_to_sheet();
}