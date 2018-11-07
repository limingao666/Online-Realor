$(document).ready( function(){//simple validation at client's end
    
    var iusername = "";
    var iemail = "";

    $("#username1").on("blur", function() {
        // body...
        iusername = $("#username1").val();
        //alert(username);
        $.ajax({
            type:"GET",
            url:"api/members",
            success:function(members)
            {
                $.each(members, function(i, member){
                    if(iusername == member.username)
                    {
                        console.log(iusername + " " + member.username);
                        console.log($.type(member.username));
                        $("#info1").text("Username already exists. Please enter a new username");
                    }
                    /*else 
                    {
                        $("#info1").text("Username available");
                    }*/
                });

            }

        });

    });

    $("#email1").on("blur", function(){
        iemail = $("#email1").val();
        $.ajax({
            type:"GET",
            url:"api/members",
            success:function(members)
            {
                $.each(members, function(i, member){
                    if(member.email == iemail)
                    {
                        $("#info2").text("email already exists. Please enter a new email");
                    }
                    /*else
                    {
                        $("#info2").text("email available");
                    }*/
                });

            }


        });
    });

    $("#submit").click(function(){

        var error_free = true;
        iusername = $("#username1").val();
        iemail = $("#email1").val();
        var psw = $("#password1").val();
        var pswConfirm = $("#confirmpwd1").val();
        var fname = $("#fname1").val();
        var lname = $("#lname1").val();
        var type = $('input[name=optradio]:checked').val();
        
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

            var member = {
                username: iusername,
                email: iemail,
                password: psw,
                firstName: fname,
                lastName: lname,
                isAgent: type
            }

            $.ajax({
                method: 'POST',
                url: 'api/members',
                data: member,
                success:function(newmembers){
                    alert("success saving new members")
                },
                error: function(){
                    alert("error saving new members");
                }
            });
            return true;
        }
        
    });
    
});