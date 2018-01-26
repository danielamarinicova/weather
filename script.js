$(document).ready(function(){
	$("#btnOk").click(function(){
		var city=$("#city").val();
		var code=$("#code").val();

	if(city.length>1){
			var urllink='http://api.openweathermap.org/data/2.5/weather?q=';
			urllink=urllink + city;
			if(code.lenght==2){
				urllink=urllink+','+code;
			}
		
			urllink=urllink+'&appid=2058843c4f073fac90cf1a9dbe2e45da';


			$.ajax({	
				url: urllink,
				data:{ format: 'json'	},
		
			error : function(){
				$("#main").html("Error connection.")
			},
			dataType: 'json',
			success : function(data){

				console.log("temp:"+data.main.temp);
				console.log(data);
				console.log("desc:"+data.weather[0].description);
		
				$('#content').empty();
				var table=$("<table/>");
				 table.addClass("weatherTable");
				var tr=getLine('City:',city);
				table.append(tr);
				var tr=getLine('Country',data.sys.country);
				table.append(tr);
				var tr=getLine('Temperature:', data.main.temp-273.15);
				table.append(tr);
				var tr=getLine('Humidity:', data.main.humidity+'%' );
				table.append(tr);
				var tr=getLine('Pressure:', data.main.pressure+'hPa' );
				table.append(tr);

				$('#content').append(table);

				if($("#details").is(':checked')){
				var tr=getLine("Sunrise", new Date(data.sys.sunrise*1000).getHours()+':'+new Date(data.sys.sunrise*1000).getMinutes());
              	table.append(tr);
				var	tr=getLine("Sunset", new Date(data.sys.sunset*1000).getHours()+':'+new Date(data.sys.sunset*1000).getMinutes());
            	table.append(tr);
				var tr=getLine("Wind Speed:", data.wind.speed);
				table.append(tr);
				var tr=getLine("Min:", data.main.temp_min);
				table.append(tr);
				var tr=getLine("Max:", data.main.temp_max);
				table.append(tr);
				var tr=getLine("Google Maps", "<a target='_blank' href='https://www.google.com/maps/search/?api=1&query=" + data.coord.lat + "," + data.coord.lon + "'>"+city+"</a>");
				table.append(tr);
		
				}



			},

			type: 'GET'


			});
	}

		});
function getLine(data1,data2){

	var tr=$("<tr/>");
				var td1 =$("<td/>");
				$(td1).append(data1);
				var td2 =$("<td/>");
				$(td2).append(data2);
				tr.append(td1);
				tr.append(td2);
				return tr;

}


});