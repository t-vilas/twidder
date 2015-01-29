displayView = function()
{
	// The code required to display a view.
};

window.onload = function()
{
	var elem = document.getElementById('notlogview');
	var div = document.getElementById('nonlogview');
	div.innerHTML = elem.innerHTML;
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


};

function signin(){
	var pass = document.getElementById('sipassword').value;

	if (pass.length < 8){
		window.alert('password too short (min 8)');
		return false;
	}

}