$(document).ready(function(){
	// body...

	$.ajax({
		method: "GET",
		url: "api/propertys",
		//async: false,
		success: function (propertys) {
		

			$.each(propertys, function(i, property){

				$("#prop").append('<div class="col-lg-4 col-sm-6"><div class="thumbnail" ><img src="../images/' + property._id 
					    + '.jpg"><div class="top-left" style="position: absolute; top: 15px; left: 30px;"><button class="btn btn-success">Available</button></div>' 
                        + '<div class="top-left" style="position: absolute; top: 15px; left: 300px;"><button class="btn btn-danger" id="save">Save</button></div>' 	          
                        + property.title + "<br/>" + property.price + '</div></div>');
			});

		},
		error:function(){
			alert("Error accessing propertys");
		}
	});


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

	$("#agentLogin").click(function()
	{
		var userA = $('#usernameA').val();
		var passA = $('#passwordA').val();

        $.ajax({
            type:"GET",
            url:"api/members",
            data:{"usernameA": userA, "passwordA": passA},
            success:function(members)
            {
            	$.each(members, function(i, member){
            		if(member.username == userA && member.password == passA && member.isAgent == 'Yes')
	                {
	                    window.location = "admin.html";
	                }
              
            	});
            }

        });
		
		//window.location = "agentLogin.html?password=" + passA + "&username=" + userA;
	});

	$("#buyerLogin").click(function()
	{
		var userB = $('#usernameB').val();
		var passB = $('#passwordB').val();
		//window.location = "buyerLogin.html";

        $.ajax({
            type:"GET",
            url:"api/members",
            data:{"usernameB": userB, "passwordB": passB},
            success:function(members)
            {
            	$.each(members, function(i, member){
            		if(member.username == userB && member.password == passB && member.isAgent == 'No')
	                {
	                    window.location = "buyerLogin.html";
	                }
              
            	});
            }

        });
		
	});

});
