
var hacking_cursor = document.getElementById("hackingCursor");
var hacking_cursor_interval = null;
var hacking_cursor_state = true;


function debug_straight_to_hacking() {
	document.body.onkeydown = null;
	loginPage.parentNode.removeChild(loginPage);
	hacking_intro();
}
debug_straight_to_hacking();


function hacking_intro() {
	deniedPage.parentNode.removeChild(deniedPage);
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

	hacking_cursor_interval = setInterval(() => {
		hacking_cursor_state = !hacking_cursor_state;
		if (hacking_cursor_state) hacking_cursor.style.display = "block";
		else                      hacking_cursor.style.display = "none";
	}, 500)
}


var hacking_pos = 0;
const total_hacking_keystrokes = 200;
function hacking_keydown(e) {
	hacking_pos++;
	var progress = hacking_pos / total_hacking_keystrokes;
	step_hacking_foreground(progress);
	step_hacking_background_LHS(progress);
	step_hacking_background_RHS(progress);
	step_hacking_style(progress);

	if (hacking_cursor_interval != null) {
		clearInterval(hacking_cursor_interval);
		hacking_cursor_interval = null;
		hackingCursor.parentNode.removeChild(hackingCursor);
	}
}

var hacking_foreground_pos = 0;
var hacking_foreground_content = hacking_startup_text_1 + hacking_startup_text_2;
function step_hacking_foreground(progress) {
	var step = Math.round(5 + 20 * progress * Math.random());
	hacking_foreground_content += hacking_main_text.slice(hacking_foreground_pos, hacking_foreground_pos + step);
	hacking_foreground_pos += step;

	var numLines = Math.floor(0.77 * screenRectangle.offsetHeight / 20);
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
	hackingBackgroundRHS.style.height = height + 'px';

	var step = Math.round(200 * progress * Math.random());
	hacking_background_RHS_content += RHS_hacking_content_text.slice(rhs_pos, rhs_pos + step);
	rhs_pos = (rhs_pos + step) % RHS_hacking_content_text.length;

	var numLines = Math.floor(0.77 * screenRectangle.offsetHeight / 15);
	var lines = hacking_background_RHS_content.split('\n');
	while (lines.length > numLines) lines.shift();
	hacking_background_RHS_content = lines.join('\n');
	hackingBackgroundRHS.innerHTML = hacking_background_RHS_content + '█';
}

var hacking_background_LHS_content = "";
var lhs_pos = 0;
function step_hacking_background_LHS(progress) {
	var height = Math.round(screenRectangle.offsetHeight * 0.92)
	hackingBackgroundLHS.style.height = height + 'px';

	var step = Math.round(100 * progress * Math.random());
	hacking_background_LHS_content += LHS_hacking_content_text.slice(lhs_pos, lhs_pos + step);
	lhs_pos = (lhs_pos + step) % LHS_hacking_content_text.length;

	var numLines = Math.floor(0.77 * screenRectangle.offsetHeight / 15);
	var lines = hacking_background_LHS_content.split('\n');
	while (lines.length > numLines) lines.shift();
	while (lines.length < numLines) lines.unshift('');
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

}