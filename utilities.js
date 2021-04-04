

function sound(src, vol=1) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  this.sound.volume = vol;
  document.body.appendChild(this.sound);
  this.play = () => this.sound.play();
  this.stop = () => this.sound.pause();
  this.volume = (v) => this.sound.volume = v;
}

var blip_sound = new sound('res/blip.mp3', 0.05);
var fail_sound = new sound('res/fail.mp3', 0.05);



// ------------------------------- Print animation ---------------------------------- //

function animate_typing(dest, text, callback, newline_pause=true, print_delay=8) {
	var pause_time = 0;
	var written_text = dest.innerHTML;
	var typing_interval = setInterval(function() {
		if (pause_time > 0) {
			pause_time -= 1;
			return;
		}
		if (text.length == 0) {
			clearInterval(typing_interval);
			if (callback !== undefined) callback();
			return;
		}
		var c = text[0];
		if (newline_pause && c == '\n') pause_time = Math.random() * 100;
		text = text.substring(1);
		written_text += c;
		dest.innerHTML = written_text;
		if (text.length != 0) dest.innerHTML += '█';
		blip_sound.play();
	}, print_delay);
}


// ------------------------------- Input capture ---------------------------------- //

var global_input_field = document.getElementById('inputField');
const input_alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-!?#[]~:.,$"
const max_input_length = 80;

function input_filter(str) {
  return str.split('')
            .filter(x => input_alphabet.includes(x))
            .join('')
            .slice(0, max_input_length);
}
function pwd_filter(str) {
	return '*'.repeat(str.length);
}


function connectToInput(display_span, input_fmt, newline_callback) {
	display_span.innerHTML = "";
	global_input_field.value = "";
	global_input_field.focus();
	var caretBlinkState = false;

	function updateDisplay(keyEvent) {
		global_input_field.value = input_fmt(global_input_field.value);
  		var fill = global_input_field.value + ' ';
  		if (caretBlinkState || keyEvent != undefined) {
	   		var i = global_input_field.selectionStart;
	    	fill = fill.slice(0, i) + "█" + fill.slice(i+1);
  		}
  		display_span.innerHTML = fill;
	};

	global_input_field.addEventListener('input', updateDisplay, false);
	document.body.onkeyup = () => updateDisplay(true);
	var caretBlinkInterval = setInterval(() => {caretBlinkState=!caretBlinkState; updateDisplay();}, 600);
	updateDisplay();

	// Callback on enter //
	document.body.onkeydown = function(keyEvent){
		// TODO playKeyboardSound(keyEvent.keyCode);
		global_input_field.focus();
		global_input_field.value = input_fmt(global_input_field.value);
		if (keyEvent.keyCode == 13) {  // Enter key
			var value = global_input_field.value;
			global_input_field.value = "";
			global_input_field.removeEventListener('input', updateDisplay, false);
			clearInterval(caretBlinkInterval);
			document.body.onkeydown = null;
			document.body.onkeyup = null;
			caretBlinkState = false;
			updateDisplay();
			newline_callback(value);
		}
	};
}
