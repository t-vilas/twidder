

displayView = function()
{
	// The code required to display a view.
	var tok = JSON.parse(localStorage.getItem("token"));
	var div = document.getElementById('nonlogview');
	var elem = document.getElementById('notlogview');
	if (tok != null){
		elem = document.getElementById('logview');
	}
	div.innerHTML = elem.innerHTML;
};

window.onload = function()
{

	displayView();
	/*var elem = document.getElementById('notlogview');
	var div = document.getElementById('nonlogview');
	div.innerHTML = elem.innerHTML;*/
};

function signup(){
	
	var pass1 = document.getElementById('password').value;
	var pass2 = document.getElementById('repeat_password').value;

	if (pass1 != pass2){
		window.alert('different passwords');
		return false;
	}

	if (pass1.length < 8){
		window.alert('password too short (min 8)');
		return false;
	}

	var dataform = {email: document.getElementById('email').value, password: document.getElementById('password').value, firstname: document.getElementById('firstname').value, familyname: document.getElementById('familyname').value, gender: document.getElementById('gender').value, city: document.getElementById('city').value, country: document.getElementById('country').value};

	var res = serverstub.signUp(dataform);

	window.alert(res.message);


};

function signin(){
	var pass = document.getElementById('sipassword').value;

	if (pass.length < 8){
		window.alert('password too short (min 8)');
		return false;
	}

	var res = serverstub.signIn(document.getElementById('siemail').value, pass);
	var token = null;
	if (res.success == true){
	token = res.data;
	}
	localStorage.setItem("token", JSON.stringify(token));
	displayView();
	window.alert(res.message);
	return true;

};

function logout(){
	var tok = JSON.parse(localStorage.getItem("token"));
	localStorage.setItem("token", null);
	window.alert('youpi3');
	var res = serverstub.signOut(tok);

	displayView();
	return true;
};