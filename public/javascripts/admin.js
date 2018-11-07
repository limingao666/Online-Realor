$(document).ready(function(){
    
	$("#saveBtn").click(function(){
		var error_free = true;
		var minYear = 1970;
		var maxYear = 2018;
		
		var istreet = $("inputStreet").val();
		var icity = $("inputCity").val();
		var istate = $("inputState").val();
		var istatus = $("inputStatus").val();
		var itype = $("inputType").val();
		var ibedrooms = $("inputBedrooms").val();
		var ibathrooms = $("inputBathrooms").val();
		var iprice = $("inputPrice").val();
		var iyear = $("inputBuiltYear").val();
		var isize = $("inputSize").val();

		if (istreet == "" || icity == "" || istatus == "" || istate == "" || ibedrooms == "" || ibathrooms == "" || iprice == "" || iyear == "" || isize == "") {
			alert("All field are needed!");
			error_free = false;
		}

		if (iprice != "") {
			alert("asdfw");
			error_free = false;
		}
		if(iprice == ""){
			alert("sdf");
			error_free = false;
		}
		if (!iprice.match(/[0-9]/)) {
			alert("Price should be pure number!")
			$("inputPrice").addClass("error");
			error_free = false;
		}
		alert("asdf");
		if (!isize.match(/[0-9]/)) {
			alert("Size should be pure number!")
			$("inputSize").addClass("error");
			error_free = false;
		}
		if (!ibathrooms.match(/[0-9]/)) {
			alert("Bathrooms should be pure number!")
			$("inputBathrooms").addClass("error");
			error_free = false;
		}
		if (!ibedrooms.match(/[0-9]/)) {
			alert("Bedrooms should be pure number!")
			$("inputBedrooms").addClass("error");
			error_free = false;
		}
		if (iyear > maxYear || iyear < minYear || !iyear.match(/[0-9]/)){
			alert("Built year should in (1970~2018).");
			$("inputBuiltYear").addClass("error");
			error_free = false;
		}
		if(error_free == true){

			var property = {
                Street: istreet,
                City: icity,
                State: istate,
                Status: istatus,
                Type: itype,
                Bedrooms: ibedrooms,
                Bathrooms: ibathrooms,
                Price: iprice,
                BuiltYear: iyear,
                Size: isize
            }

		    $.ajax({
			    method: 'POST',
			    url: 'api/propertys',
			    data: property,
			    success:function(newpropertys){
			        alert("success saving new propertys")
			    },
			    error: function(){
			        alert("error saving new propertys");
			    }
			});
		}
	});
});




