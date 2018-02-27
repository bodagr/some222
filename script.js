$(function(){
	$.ajax({
		url: 'https://gsclasses-ajax.herokuapp.com/portfolio',
		method: 'get',
		dataType: 'json',
		success: function(data){
			for(var i in data) {	
				createElem(data[i].img, data[i].category, data[i].description);
			}
		}	
	})	
})

function createElem(img, category, description){
	var colTag = $('<div/>');
	var imgTag = $('<img/>');
	var spanTag = $('<span/>');
	var h2Tag = $('<h2/>');

	$(colTag).addClass('col-sm-3');
	$(imgTag).prop('src', img);
	$(h2Tag).text(category);
	$(spanTag).text(description);	
	colTag.append(imgTag);
	colTag.append(h2Tag);
	colTag.append(spanTag);
	$('.row').append(colTag);
}




