function save_picture(canvas)
	{

	var canvas = document.getElementById(canvas);
	var img    = canvas.toDataURL("image/png");
	//document.write('<img src="'+img+'"/>');
	
	var a = $("<a>").attr("href", img ).attr("download", "img.png").appendTo("body");
	a[0].click();
	a.remove();
	
	}