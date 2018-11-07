$(document).ready(function(){
	// body...

	$.ajax({
		type: "GET",
		url: "api/members",
		//async: false,
		success: function (members) {
			var outputResponseB = "";

			$.each(members, function(i, member){
				if(member.isAgent == 'Yes')
				{
					outputResponseB += member.firstName + "  " + member.lastName + "  " + member.email + "<br/>";
				}
				//$("#agentDetails").append(member.email);

			});
			
			//alert(outputResponseB);
			$("#agentDetails").html(outputResponseB);
		},
		error:function(){
			alert("Error accessing members");
		}
	});

	$("#search").click(function(){
		
		var location = $("#location1").val();
		var res = "";

		$.ajax({
			method: "GET",
			url: "api/propertys",
			//async: false,
			success: function (propertys) {
			
				$.each(propertys, function(i, property){

					if(location == property.location)
					{
						res += '<div class="col-lg-4 col-sm-6"><div class="thumbnail" ><img src="../images/' + property._id 
						       + '.jpg"><div class="top-left" style="position: absolute; top: 15px; left: 30px;"><button class="btn btn-success">Save</button></div>'
						       + '<div class="top-left" style="position: absolute; top: 15px; left: 300px;"><button class="btn btn-danger" id="save">Save</button></div>'
	                           + property.title + '<br/>' + property.price + '<br/>' + property.location + '</div></div>';
					}
					$("#res1").html(res);
				});

			},
			error:function(){
				alert("Error accessing propertys");
			}
		});
	});

	$("#showAll").click(function(){
		var res = "";

		$.ajax({
			method: "GET",
			url: "api/propertys",
			//async: false,
			success: function (propertys) {
				$.each(propertys, function(i, property){
					res += '<div class="col-lg-4 col-sm-6"><div class="thumbnail" ><img src="../images/' + property._id 
						       + '.jpg"><div class="top-left" style="position: absolute; top: 15px; left: 30px;"><button class="btn btn-success">Available</button></div>' 
	                           + property.title + "<br/>" + property.price + "<br/>" + property.location + '</div></div>';
				});
				$("#res1").html(res);
			},
			error:function(){
				alert("Error accessing propertys");
			}
		});
	});

	$("#save").click(function(){
		var id = $("#save")

		$.ajax({
			method: "GET",
			url: "api/propertys",
			//async: false,
			success: function (propertys) {
				$.each(propertys, function(i, property){
					$("#favList").append('<div class="col-lg-4 col-sm-6"><div class="thumbnail" ><img src="../images/' + property._id 
					    + '.jpg"><div class="top-left" style="position: absolute; top: 15px; left: 30px;"><button class="btn btn-success">Available</button></div>' 
                        + '<div class="top-left" style="position: absolute; top: 15px; left: 300px;"><button class="btn btn-danger" id="save">Save</button></div>' 	          
                        + property.title + "<br/>" + property.price + '</div></div>');
				});
			},
			error:function(){
				alert("Error accessing propertys");
			}
		});
	});

});
