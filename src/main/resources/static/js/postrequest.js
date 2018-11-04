$( document ).ready(function() {
	
	var url = window.location;
	// SUBMIT FORM
    $("#inputForm").submit(function(event) {
		// Prevent the form from submitting via the browser.
		event.preventDefault();
		ajaxPost();
	});

    
    function ajaxPost(){
    	
    	// PREPARE FORM DATA
    	var formData = {
    	    username : $("#username").val(),
    	    startdate : $("#startdate").val(),
    		benchpress : $("#benchpress").val(),
    		militarypress :  $("#militarypress").val(),
    		deadlift :  $("#deadlift").val(),
    		squat :  $("#squat").val(),
    		closegripbenchpress :  $("#closegripbenchpress").val(),
    		stifflegdeadlift :  $("#stifflegdeadlift").val(),
    		frontsquat :  $("#frontsquat").val(),
    		inclinebenchpress :  $("#inclinebenchpress").val()
    	}

    	
    	// DO POST
    	$.ajax({
			type : "POST",
			contentType : "application/json",
			url : url + "/postuser",
			data : JSON.stringify(formData),
			dataType : 'json',
			success : function(result) {
				if(result.status == "Done"){
				console.log("Saved user: "+formData.username);
					$("#postResultDiv").html("<strong>" + "Saved!" + "</strong>");
				}else{
					$("#postResultDiv").html("<strong>Error</strong>");
				}
				console.log(result);
			},
			error : function(e) {
			console.log("ERR Formdata: "+formData.username);
				alert("Error!")
				console.log("ERROR: ", e);
			}
		});

    }
    
    function resetData(){
    	$("#benchpress").val("");
    	$("#militarypress").val("");
    }



})