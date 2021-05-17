
var hacking_cursor = document.getElementById("hackingCursor");
var hacking_cursor_interval = null;
var hacking_cursor_state = true;

function hacking_intro() {
	deniedPage.parentNode.removeChild(deniedPage);
    hackingPage.style.display = "block";
    animate_typing(
        hackingForegroundBox,
        backdoor_startup_text,
        hacking_main,
        true,
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
function hacking_keydown(e) {
	step_foreground(hacking_pos);
	step_background_LHS(hacking_pos);
	step_background_RHS(hacking_pos);
	hacking_pos++;

	if (hacking_cursor_interval != null) {
		clearInterval(hacking_cursor_interval);
		hacking_cursor_interval = null;
		hackingCursor.parentNode.removeChild(hackingCursor);
	}
}

var hacking_foreground_content = backdoor_startup_text;
function step_foreground(pos) {
	var step = 5;
	hacking_foreground_content += hacking_main_text.slice(step * pos, step * (pos + 1));
	var numLines = Math.floor(0.77 * screenRectangle.offsetHeight / 20);
	var lines = hacking_foreground_content.split('\n');
	while (lines.length > numLines) lines.shift();
	hacking_foreground_content = lines.join('\n');
	hackingForegroundBox.innerHTML = hacking_foreground_content + '█';
	hacking_cursor.style.display = "block";
}


var hacking_background_RHS_content = "";
var rhs_pos = 0;
function step_background_RHS(pos) {
	var height = Math.round(screenRectangle.offsetHeight * 0.92)
	hackingBackgroundRHS.style.height = height + 'px';

	var step = Math.round(Math.random() * pos);
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
function step_background_LHS(pos) {
	var height = Math.round(screenRectangle.offsetHeight * 0.92)
	hackingBackgroundLHS.style.height = height + 'px';

	var step = Math.round(Math.random() * pos * 0.1);
	hacking_background_LHS_content += LHS_hacking_content_text.slice(lhs_pos, lhs_pos + step);
	lhs_pos = (lhs_pos + step) % LHS_hacking_content_text.length;

	var numLines = Math.floor(0.77 * screenRectangle.offsetHeight / 15);
	var lines = hacking_background_LHS_content.split('\n');
	while (lines.length > numLines) lines.shift();
	while (lines.length < numLines) lines.unshift('');
	hacking_background_LHS_content = lines.join('\n');
	hackingBackgroundLHS.innerHTML = hacking_background_LHS_content + '█';
}
