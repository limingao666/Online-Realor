$(document).ready(function(){

	$("#add").click(function(){

		 var error_free = true;
		var vusername = $("#username").val();
		var vemail = $("#email").val();
		
		var member = {
			username: vusername,
			email: vemail
		}

		$.ajax({
			method: 'POST',
			url: 'api/members',
			data: member,
			success:function(newmembers){

			    $("#res").html(newmembers.username + "<br>" + newmembers.email);
			},
			error: function(){
				alert("error saving members");
			}
		});

		
	});
	
});