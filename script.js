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
		
				$("#main").empty;
				var table=$("<table/>");
				
				var tr=getLine("City:",city);
				table.append(tr);
				var tr=getLine("Temperature:", data.main.temp-273.15,1);
				table.append(tr);
				var tr=getLine("Humidity:", data.main.humidity );
				table.append(tr);
				var tr=getLine("Description:", data.main.description );
				table.append(tr);
				var tr=getLine("Pressure:", data.main.pressure );
				table.append(tr);

				if($("#details").is(':checked')){
				var tr=getLine("Sunrise:", data.main.sunrise);
				table.append(tr);
				var tr=getLine("Sunset:", data.main.sunset);
				table.append(tr);
				var tr=getLine("Wind Speed:", data.main.wind);
				table.append(tr);
				var tr=getLine("Min:", data.main.temp_min);
				table.append(tr);
				var tr=getLine("Max:", data.main.temp_max);
				table.append(tr);
				var tr=getLine("Visibility:", data.main.visibility);
				table.append(tr);
		
				}



				


				$("#main").append(table);

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

}


});