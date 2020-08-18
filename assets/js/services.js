
$( document ).ready(function() {
	createElements(getAllData());
});
var indexVideo = 0;
function getAutors(id)
{
	var autors=[
		{
			name:"Daniel Amir",
			descrption:"Tecnología de Información y Comunicación",
			email:"damirc@ucenfotec.ac.cr",
		},
		{
			name:"Gabriel Jara Catarinella",
			descrption:"Desarrollo de Software",
			email:"gjarac@ucenfotec.ac.cr"
		},
		{
			name:"Ignacio Molina Alvarado",
			descrption:"Desarrollo de Software",
			email:"molinaa@ucenfotec.ac.cr",
		},
		{
			name:"Marvin Calvo Acuña",
			descrption:"Desarrollo de Software",
			email:"mcalvoa@ucenfotec.ac.cr",
		},
	];
	return autors[id];
}

function getAllData()
{
	$.urlParam = function(name){
		var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
		return results[1] || 0;
	}
	var ids = decodeURIComponent($.urlParam('ids')).split("-");
	var data = getdata(ids[0]);
	updateIframe(data.videos[ids[1]].name,data.videos[ids[1]].link,data.videos[ids[1]].autorId);
	indexVideo = ids[1];
	return data;
}
function createElements(data)
{
console.log(data);
	$('#titleDescrip').text(data.name);
	$('#TextDescrip').text(data.descrption);
  	var items = [];
  	var autor = '';
  	$.each(data.videos, function( key, val ) {
  		if(key === parseInt(indexVideo))
  		{
  		 	items.push( "<a onclick=setIFrame(this,'"+val.link+"',"+val.autorId+") class='btnlink list-group-item list-group-item-action active'>" + val.name + "</li>" );
  		}
  		else
  		{
  		 	items.push( "<a onclick=setIFrame(this,'"+val.link+"',"+val.autorId+") class='btnlink list-group-item list-group-item-action'>" + val.name + "</li>" );
  		}
   
  	});
  	$("#videosInstal").append(items);
}

function setIFrame(e,url,autorId) 
{
	$('.btnlink').removeClass('active');
	$(e).addClass("active");
	updateIframe( $(e).html(),url,autorId);
} 
function updateIframe(title,url,autorId)
{
	var item ='';
	$("#titleService").empty();
	item = "<h3>"+ title +"</h3>";
	$("#titleService").append(item);

	$("#iframeVideo").empty();
	item = "<iframe id='video' src='"+url+"' width='640' height='480'></iframe></br>";
	$("#iframeVideo").append(item);

	$("#autorInfo").empty();
	var autor = getAutors(parseInt(autorId));
	item = "<h6>Autor:&nbsp;"+autor.name+"</h6>";
	item = item+ "<h6>Email:&nbsp;"+autor.email+"</h6>";
	item = item+ "<h6>Puesto: &nbsp;"+autor.descrption+"</h6>";
	$("#autorInfo").append(item);
}