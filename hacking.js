
var hacking_cursor = document.getElementById("hackingCursor");
var hacking_cursor_interval = null;
var hacking_cursor_state = true;

function hacking_main() {
	document.body.addEventListener("keydown", hacking_keydown);

	hacking_cursor_interval = setInterval(() => {
		hacking_cursor_state = !hacking_cursor_state;
		if (hacking_cursor_state) hacking_cursor.style.display = "block";
		else                      hacking_cursor.style.display = "none";
	}, 500)
}


function hacking_keydown(e) {
	hackingForgroundBox.innerHTML += "\n>alskjhljakfdg"
	hacking_cursor.style.display = "block";
}