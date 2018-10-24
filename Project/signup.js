$(document).ready( function(){//simple validation at client's end
    
    var username;
    var email;

    $("#username1").on("blur", function() {
        // body...
        username = $("#username1").val();
        $.ajax({
            type:"post",
            url:"signupCheck.php",
            data:{"username1": username},
            success:function(response)
            {
                if(response == "OK")
                {
                    $("#info1").text("Username available");
                }
                else
                {
                    $("#info1").text("Username already exists. Please enter a new username");
                }
            }

        });

    });

    $("#email1").on("blur", function(){
        email = $("#email1").val();
        $.ajax({
            type:"post",
            url:"signupCheck.php",
            data:{"email1": email},
            success:function(response)
            {
                if(response == "OK")
                {
                    $("#info2").text("Email available");
                }
                else
                {
                    $("#info2").text("Email already exists. Please enter a new email");
                }
            }

        });
    });

    $( "button" ).click(function(event){ //on form submit 

        var error_free = true;
        name = $("#username1").val();
        email = $("#email1").val();
        var psw = $("#password1").val();
        var pswConfirm = $("#confirmpwd1").val();
        var fname = $("#fname1").val();
        var lname = $("#lname1").val();
        

        if(username == ""){
            $("#username1").addClass("error");
            alert("Please enter your username");
            error_free = false;
        }

        if(email == ""){
            $("#email1").addClass("error");
            alert("Please enter your Email Address");
            error_free = false;
        }

        if(psw == "" || psw.length < 6 ){
            $("#password1").addClass("error");
            alert("Invalid Password");
            error_free = false;
        }
        else if(!psw.match(/[a-zA-Z]/)  || !psw.match(/[0-9]/))
        {
        	alert("Invalid password");
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
    
});
