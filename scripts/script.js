$(document).ready(function(){
	// this will show the info it in firebug console
	 $.ajax({
		method: "GET",
		url: "./json/response.json",
		dataType : 'json',
		async: true,
		success: function(response){
			if(response){
				var sectionThreeSource   = $("#section_cont").html();
				var sectionThreeTemp = Handlebars.compile(sectionThreeSource);
		
				$('.section_two').append(sectionThreeTemp(response.cooking));
				$('.section_three').append(sectionThreeTemp(response.season));
				$('.section_four').append(sectionThreeTemp(response.restaurants));
				$('.section_five').append(sectionThreeTemp(response.blogging));
			}
		}
	});
	
});