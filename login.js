
var login_text_box = document.getElementById("loginText");
var splash_screen = document.getElementById("splashScreen");
splash_screen.innerHTML = splash_text + "[PRESS ANY KEY TO BEGIN]";


var agent = null;
clippy.load('Clippy', (x) => {agent = x;});


document.body.onkeydown = function () {
	document.body.onkeydown = undefined;

    // Move splash for login sequence
    splash_screen.innerHTML = splash_text;
    splash_screen.style.padding = '2vh';

    /*var doc = document.documentElement
        if (doc.requestFullscreen) {
            doc.requestFullscreen();
        } else if (doc.webkitRequestFullscreen) { // Safari
	        doc.webkitRequestFullscreen();
        } else if (doc.msRequestFullscreen) { // IE11
	        doc.msRequestFullscreen();
        }*/

    // Print intro message, then get input name twice
	animate_typing(
		login_text_box, 
		login_text,
		login_loop
	);
}

function login_loop() {

	animate_typing(
		login_text_box, 
		"\n> Enter username: ", 
		() => connectToInput(loginInput, input_filter, (username) => {
			login_text_box.innerHTML += username;
	animate_typing(
		login_text_box, 
		"\n> Enter password: ",
		() => connectToInput(loginInput, pwd_filter, (password) => {
			login_text_box.innerHTML += password;
	animate_typing(
		login_text_box, 
		"\n<b><font color=\"ff222\">Error: </font></b> Authentication failed, try again...\n> Enter username: ",
		() => connectToInput(loginInput, input_filter, (username) => {
			login_text_box.innerHTML += username;
	animate_typing(
		login_text_box, 
		"\n> Enter password: ",
		() => connectToInput(loginInput, pwd_filter, (password) => {
			login_text_box.innerHTML += password;
	animate_typing(
		login_text_box, 
		"\nAuthenticating...",
		() => setTimeout(open_denied_popup, 2000)
	)}))}))}))}));
}


function open_denied_popup() {

	var login_page = document.getElementById("loginPage");
	login_page.classList.add("transistionFrame");
	fail_sound.play();

	setTimeout(() => {
		login_page.parentNode.removeChild(login_page);

		var denied_page = document.getElementById("deniedPage");
		denied_page.style.display = "block";
		var denied_popup = document.getElementById("deniedPopup");
		denied_popup.innerHTML = denied_popup_text;	
		denied_page.classList.add("transistionFrame");

		setTimeout(() => denied_page.classList.remove("transistionFrame"), 50);
		setTimeout(spawn_clippy, 3000);
	}, 50);
}


function spawn_clippy() {
	agent.show();
	agent.play('Greeting');
	agent.speak(clippy_hello_text);
	agent.play('GetAttention');
	setTimeout(() => {
		document.body.addEventListener("keydown", hacking_intro);	
		document.body.addEventListener("mousedown", hacking_intro);	
	}, 4000);
	
}

function kill_clippy() {
	agent.stop();
	agent.hide();
	setTimeout(() => {
	    agent = document.getElementsByClassName('clippy')[0];
	    agent.parentNode.removeChild(agent);
	    agent = document.getElementsByClassName('clippy-balloon')[0];
	    agent.parentNode.removeChild(agent);	
	    agent = null;
	});
}


function hacking_intro() {
	document.body.removeEventListener("keydown", hacking_intro);
	document.body.removeEventListener("mousedown", hacking_intro);
	agent.stop();
	agent.play('Congratulate');

	setTimeout(() => {
        kill_clippy();
	    deniedPage.classList.add("transistionFrame");

	    setTimeout(() => {
	    	deniedPage.parentNode.removeChild(deniedPage);
    	    hackingPage.style.display = "block";

    	    animate_typing(
    	        hackingForgroundBox,
    	        backdoor_startup_text,
    	        hacking_main,
    	        true,
    	        0
    	    );
	    }, 50);
	}, 1500)
}
