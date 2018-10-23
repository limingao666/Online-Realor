$(document).ready( function(){//simple validation at client's end
    $( "button" ).click(function(event){ //on form submit 

        var error_free = true;
        var username = $("#username1").val();
        var psw = $("#password1").val();
        var pswConfirm = $("#confirmpwd1").val();
        var fname = $("#fname1").val();
        var lname = $("#lname1").val();
        var email = $("#email1").val();

        if(username == ""){
            $("#username1").addClass("error");
            alert("Please enter your username");
            error_free = false;
        }

        if(psw == "" || psw.length < 6 ){
            $("#password1").addClass("error");
            alert("Invalid Password");
            error_free = false;
        }
        else if(!psw.match(/[a-z]/))
        {
        	alert("Contain special characters");
        	error_free = false;
        }
        else if(!psw.match(/[A-Z]/))
        {
        	alert("Contain special characters");
        	error_free = false;
        }
        else if(!psw.match(/[0-9]/))
        {
        	alert("Contain special characters");
        	error_free = false;
        }

        if(pswConfirm == ""){
            $("#confirmpwd1").addClass("error");
            alert("Please enter Password again");
            error_free = false;
        }


        if(!(psw).match(pswConfirm)){
            $("#pswConfirm").addClass("error");
            alert("Your passwords don't match. Please enter again");
            error_free = false;
        }

        if(fname == ""){
            $("#fname1").addClass("error");
            alert("Please enter your First Name");
            error_free = false;
        }

        if(lname == ""){
            $("#lname1").addClass("error");
            alert("Please enter your Last Name");
            error_free = false;
        }

        if(email == ""){
            $("#email1").addClass("error");
            alert("Please enter your Email Address");
            error_free = false;
        }

        if(!($("#agentYes").is(":checked")) && !($("#agentNo").is(":checked")))
        {
        	alert("Please select user type");
        	error_free = false;
        }

        if(!($('#check').prop('checked'))){
            alert("Please check the Term of Use & Privacy Policy");
            error_free = false;
        }

        if(error_free){ //if form is valid submit form
            alert("No error: The form will be submitted");
            return true;
        }
        event.preventDefault(); 
    });
    
     //reset previously set border colors and hide all message on .keyup()
    $("input").keyup(function() { 
        $("input").removeClass("error");
        //$("input").css('border-color',''); 
        $("#result").slideUp();
    });

    $.ajax({
    	type:"post",
    	url:"signup.php",
    	data:{"username1": username, "email1": email},
    	success:function(response)
    	{
    		$("You are successfully signed in");
    	}

    });
});