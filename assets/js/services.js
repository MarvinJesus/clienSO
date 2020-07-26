
$( document ).ready(function() {
	createElements(getAllData());
});

function getAllData()
{
	$.urlParam = function(name){
		var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
		return results[1] || 0;
	}
	var ids = decodeURIComponent($.urlParam('ids')).split("-");
	var data = getdata(ids[0]);
	return data;
}
function createElements(data)
{
	
	$('#titleDescrip').text(data.name);
	$('#TextDescrip').text(data.descrption);
  	var items = [];
  	$.each(data.instalacion, function( key, val ) {
  		if(key === 0)
  		{
  		 	items.push( "<a onclick=setIFrame('"+ val.link +"') class='list-group-item list-group-item-action active'>" + val.name + "</li>" );
  		}
  		else
  		{
  		 	items.push( "<a onclick=setIFrame('"+ val.link +"')  class='list-group-item list-group-item-action'>" + val.name + "</li>" );
  		}
   
  	});
  	$("#videosInstal").append(items);
    	var items = [];
  	$.each(data.configuracion, function( key, val ) {
  		if(key === 0)
  		{
  		 	items.push( "<a onclick=setIFrame('"+ val.link +"')  class='list-group-item list-group-item-action active'>" + val.name + "</li>" );
  		}
  		else
  		{
  		 	items.push( "<a onclick=setIFrame('"+ val.link +"') ' class='list-group-item list-group-item-action'>" + val.name + "</li>" );
  		}
   
  	});
  	$("#videosConfig").append(items);
}
function setIFrame(url)
{
	$("#iframeVideo").empty();
	var item = "<iframe id='video' src='"+url+"' width='640' height='480'></iframe>";
	$("#iframeVideo").append(item);

} 