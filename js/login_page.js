/* TODO: eventually store and validate in a database 
*
*/
function validateLogin(theForm) {
	// Just checking for the credentials "demo" : "demo"

	//use theForm so we can reuse theForm.username for both xs and lg divs
	var username = theForm.username.value;
	var pass = theForm.password.value;

	localStorage.setItem("username", username);
	localStorage.setItem("password", pass);
	
	if (username === "demo" && pass === "demo") {
		return true;
	} else {
		//prompt error message
		$("#lgn_err").removeAttr("hidden");
		$("#lgn_err_xs").removeAttr("hidden");
		return false;
	}
}

/* JS validation for creating account. Only checks if username is "demo" or
* passwords do not match
*/
function validateCreateAccount(theForm){
	//
	var username  = theForm.username.value;
	var email = theForm.email.value;
	var password = theForm.password.value;
	var confirm_password = theForm.confirm_password.value;

	var error = "";

	//need to change this eventually
	if (username === "demo"){
		error += "The username you have entered already exists \n";
	}

	if (password !== confirm_password) {
		error += "The passwords you have entered do not match \n";
	}

	if (error === ""){
		return true;
	}else{
		$("#creation-error").html("<div class='col-sm-8 danger-text'>" + error + "</div>");
		$("#creation-error").removeAttr("hidden");
		return false;
	}
}