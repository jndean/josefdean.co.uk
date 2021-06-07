
var hacking_cursor = document.getElementById("hackingCursor");
var hacking_cursor_interval = null;
var hacking_cursor_state = true;


function debug_straight_to_hacking() {
	document.body.onkeydown = null;
	loginPage.parentNode.removeChild(loginPage);
	hacking_intro();
}
// debug_straight_to_hacking();


function hacking_intro() {
    hackingPage.style.display = "block";
    animate_typing(
        hackingForegroundBox,
        hacking_startup_text_1,
        () => animate_typing(
        		hackingForegroundBox,
        		hacking_startup_text_2,
        		hacking_main,
        		true,
        		0
        	),
        false,
        0
    );
}


function hacking_main() {
	document.body.addEventListener("keydown", hacking_keydown);

    step_hacking_progress_bar(0);

    hacking_cursor.style.display = "block";
	hacking_cursor_interval = setInterval(() => {
		hacking_cursor_state = !hacking_cursor_state;
		if (hacking_cursor_state) hacking_cursor.style.opacity = "1";
		else                      hacking_cursor.style.opacity = "0";
	}, 500)
}


var hacking_pos = 0;
const total_hacking_keystrokes = 200;
var hacking_stats_box = new hackingStatsBoxState();
function hacking_keydown(e) {
	hacking_pos++;
	var progress = hacking_pos / total_hacking_keystrokes;

	// Press enter to finish
	if (progress > 1 && e.keyCode == 13) {
		document.body.removeEventListener("keydown", hacking_keydown);
		clear_hacking_page();
		show_access_granted_page();
		return;
	}

	step_hacking_foreground(progress);
	step_hacking_background_LHS(progress);
	step_hacking_background_RHS(progress);
	step_hacking_progress_bar(progress);
	step_hacking_style(progress);
	hacking_stats_box.step(progress);

	if (hacking_cursor_interval != null) {
		clearInterval(hacking_cursor_interval);
		hacking_cursor_interval = null;
		hackingCursor.parentNode.removeChild(hackingCursor);
	}

}

hacking_main_text += "\n" + LHS_hacking_content_text;
var hacking_foreground_pos = 0;
var hacking_foreground_content = hacking_startup_text_1 + hacking_startup_text_2;
function step_hacking_foreground(progress) {

	var step = Math.round(1 + 60 * progress * Math.random());
	hacking_foreground_content += hacking_main_text.slice(hacking_foreground_pos, hacking_foreground_pos + step);
	hacking_foreground_pos += step;

	var numLines = Math.floor(0.76 * screenRectangle.offsetHeight / 20);
	var lines = hacking_foreground_content.split('\n');
	while (lines.length > numLines) lines.shift();
	hacking_foreground_content = lines.join('\n');
	hackingForegroundBox.innerHTML = hacking_foreground_content + '█';
	hacking_cursor.style.display = "block";
}


var hacking_background_RHS_content = "";
var rhs_pos = 0;
function step_hacking_background_RHS(progress) {
	var height = Math.round(screenRectangle.offsetHeight * 0.92)

	var step = Math.round(200 * progress * Math.random());
	hacking_background_RHS_content += RHS_hacking_content_text.slice(rhs_pos, rhs_pos + step);
	rhs_pos = (rhs_pos + step) % RHS_hacking_content_text.length;

	var numLines = Math.floor(0.77 * screenRectangle.offsetHeight / 15);
	var lines = hacking_background_RHS_content.split('\n');
	while (lines.length > numLines) lines.shift();
	while (lines.length < numLines) lines.unshift('');
	hacking_background_RHS_content = lines.join('\n');
	hackingBackgroundRHS.innerHTML = hacking_background_RHS_content + '█';
}


var hacking_background_LHS_content = "";
var lhs_pos = 0;
function step_hacking_background_LHS(progress) {
	var height = Math.round(screenRectangle.offsetHeight * 0.92)

	var step = Math.round(500 * progress * Math.random());
	hacking_background_LHS_content += LHS_hacking_content_text.slice(lhs_pos, lhs_pos + step);
	lhs_pos = (lhs_pos + step) % LHS_hacking_content_text.length;

	var numLines = Math.floor(0.77 * screenRectangle.offsetHeight / 15);
	var lines = hacking_background_LHS_content.split('\n');
	while (lines.length > numLines) lines.shift();
	hacking_background_LHS_content = lines.join('\n');
	hackingBackgroundLHS.innerHTML = hacking_background_LHS_content + '█';
}



var screen_object = document.getElementsByClassName("screen")[0];

function step_hacking_style(progress) {
	var loThresh = 0.2, hiThresh = 0.8;
	if (progress > loThresh && progress <= hiThresh) {
		var s = (progress - loThresh) / (hiThresh - loThresh);
		var t = 1-s;
		var rgb = [Math.round(t*0  + s*100),
				   Math.round(t*75 + s*20),
		           Math.round(t*35 + s*0)];
		var grad = "radial-gradient(rgba(" + rgb.join(',') + ", 1), black 150%";
		screen_object.style.backgroundImage = grad;

		rgb = [Math.round(t*0x44 + s*0xff),
			   Math.round(t*0xff + s*0x44),
	           Math.round(t*0x44 + s*0x00)];
		screen_object.style.color = 'rgba(' + rgb.join(',') + ', 1.0)';
	}

	if (0.5 < progress && progress < 0.8) {
		hackingPage.style.animation = "hacking-skew1 1.5s infinite";
	}
	if (0.8 < progress) {
		hackingPage.style.animation = "hacking-skew2 1s infinite";
	}
}


var hacking_verb_index = 0;
function step_hacking_progress_bar(progress) {
	if (progress >= 1) {
		hackingProgressBar.innerHTML = '<center><font size=22 style="text-shadow: -6px 0px 4px rgba(0,30,180,0.75)">SUCCESS - press ENTER to launch</font></center>';
		return;
	}

	const middle_len = 18;
	var middle = hacking_verbs[hacking_verb_index] + '...';
	while (middle.length + 1 < middle_len) middle = " " + middle + " ";
	if (middle.length < middle_len) middle = middle + ' ';
	middle = '|' + middle + '|';

	var half_length = Math.round(screenRectangle.offsetWidth / 40);
	var bar_len = Math.round(half_length * 2 * progress);
	var pad_len = 2 * half_length - bar_len;
	var fill = '[' + "█".repeat(bar_len) + "-".repeat(pad_len) + ']';
	fill = fill.substring(0, half_length) + middle + fill.substring(half_length);
	hackingProgressBar.innerHTML = fill;

	if (Math.random() * 2 < progress) {
		hacking_verb_index = (hacking_verb_index + 1) % hacking_verbs.length;
	}
}


function hackingStatsBoxState() {

	this.CPU = 0;
	this.GPU = 0;
	this.RAM = 0;
	this.SWAP = 0;
	this.HTML = 0;

	this.step = function(progress) {
		if (Math.random() < 0.1)
			this.CPU = Math.max(0, Math.round(2 * 100 * progress + 40 * (Math.random() - 0.5)));
		if (Math.random() < 0.3)
			this.RAM = Math.round(127 * progress);
		if (Math.random() < 0.3)
			this.SWAP = Math.round(64 * progress);
		if (Math.random() < 0.3)
			this.GPU = Math.round(100 - 10 * Math.random());
		this.HTML = Math.round(6 * progress);

		var CPU = (this.CPU + '%').padEnd(4);
		var RAM = (this.RAM + 'G').padEnd(4);
		var SWAP = (this.SWAP + 'T').padEnd(4);
		var GPU = (this.GPU + '%').padEnd(4);
		var HTML = ('V' + this.HTML).padEnd(4);

		var content = '\
		CPU: ' + CPU + ' RAM: ' + RAM + ' |\n\
		GPU: ' + GPU + ' TPU: NaN  |';

		content = "\
		CPU : " + CPU + "\n\
		RAM : " + RAM + "\n\
		SWAP: " + SWAP + "\n\
		GPU : " + GPU + "\n\
		TPU : NaN \n\
		HTML: " + HTML;

		hackingStatsBox.innerHTML = content;
	}

	this.reset = function() {
		this.CPU = 0;
		this.GPU = 0;
		this.RAM = 0;
		this.SWAP = 0;
		this.HTML = 0;
	}
}


function clear_hacking_page() {
	hackingPage.style.display = 'none';
	hackingForegroundBox.innerHTML = '';
	hackingBackgroundLHS.innerHTML = '';
	hackingBackgroundRHS.innerHTML = '';
	hackingProgressBar.innerHTML = '';
	hackingStatsBox.innerHTML = '';
	hacking_pos = 0;
	rhs_pos = 0;
	lhs_pos = 0;
	hacking_verb_index = 0;
	hacking_foreground_pos = 0;
	hacking_foreground_content = hacking_startup_text_1 + hacking_startup_text_2;
	hacking_background_RHS_content = '';
	hacking_background_LHS_content = '';
	hacking_stats_box.reset();
    hackingPage.style.animation = "jitterShadow 5.03s infinite";
	screen_object.style.backgroundImage = 'radial-gradient(rgba(0, 75, 35, 1.0), black 150%';
	screen_object.style.color = '#44ff44';
}


function show_access_granted_page() {
	messagePopup.innerHTML = access_granted_popup_text;
	messagePage.style.display = "block";
	messagePopup.style.animation = "jitterShadow";
	messagePage.classList.add("transistionFrame");
	access_sound.play();

	setTimeout(() => messagePage.classList.remove("transistionFrame"), 50);

	setTimeout(() => {
		messagePage.classList.add("transistionFrame");
		setTimeout(() => {
			messagePage.classList.remove("transistionFrame");
			messagePage.style.display = "none";
			openHomePage();
		}, 50);
	}, 2500);
}

