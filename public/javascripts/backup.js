
        if(iusername == ""){
            $("#username1").addClass("error");
            alert("Please enter your username");
            error_free = false;
        }

        if(iemail == ""){
            $("#email1").addClass("error");
            alert("Please enter your Email Address");
            error_free = false;
        }

        if(ipsw == "" || ipsw.length < 6 ){
            $("#password1").addClass("error");
            alert("Invalid Password");
            error_free = false;
        }
        else if(!ipsw.match(/[a-zA-Z]/)  || !ipsw.match(/[0-9]/))
        {
        	alert("Invalid password");
        	error_free = false;
        }

        if(!(ipsw).match(ipswConfirm)){
            $("#pswConfirm").addClass("error");
            alert("Your passwords don't match. Please enter again");
            error_free = false;
        }

        if(ifname == ""){
            $("#fname1").addClass("error");
            alert("Please enter your First Name");
            error_free = false;
        }

        if(ilname == ""){
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
            var member = {
                username: iusername,
                email: iemai,
                password: ipassword,
                firstName: ifname,
                lastName: ilname,
                isAgent: iisAgent
            };

            $.ajax({
                method: 'POST',
                url: 'api/members',
                data: video,
                success:function(newVideos){
                    var outputResponseB = "";

                    $.each(members, function(i, member){
                    if(member.isAgent == 'Yes')
                    {
                        outputResponseB += member.firstName + "  " + member.lastName + "  " + "<br><a href=\"mailto:#\">" + email;;
                    }
                    //$("#agentDetails").append(member.email);

                });
                
                alert(outputResponseB);
                $("#agentDetails").html(outputResponseB);
                },
                error: function(){
                    alert("error saving members");
                }
            });
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