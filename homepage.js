
var current_home_page = 0;

const homepages = [
	['Home', homepage_home_text],
	['Exploit Generator', homepage_exploit_generator_text],
	['Hackerman', homepage_hackerman_text],
	['Contact', homepage_contact_text],
	['Shutdown', homepage_shutdown_text],
];


function debug_straight_to_homepage() {
	document.body.onkeydown = null;
	loginPage.parentNode.removeChild(loginPage);
	openHomePage();
}
// debug_straight_to_homepage();


function openHomePage() {
	homePage.style.display = "block";
	generate_homepage_header();
	homepage_keydown(key=0);

	document.body.addEventListener("keydown", homepage_keydown);
}

function generate_homepage_header() {

	var fill = '';
	for (var i = 0; i < homepages.length; ++i) {
		if (i == current_home_page) fill += '[' + (i+1) + '] ';
		else                        fill += ' ' + (i+1) + '  ';
		fill += homepages[i][0];
		if (i != homepages.length - 1) fill += '      ';
	}

	homepageHeader.innerHTML = homepage_header_text + '\n' + fill + '\n' + '―'.repeat(fill.length);
}


function homepage_keydown(e=null, key=null) {
	if (e !== null && key === null) 
		key = e.keyCode;

	if (key == 37) {
		current_home_page = (current_home_page - 1 + homepages.length) % homepages.length;
	} else if (key == 39) {
		current_home_page = (current_home_page + 1 + homepages.length) % homepages.length;
	} else if (key >= 49 && key <= 53) {
		current_home_page = key - 49;
	}
	homepageBody.innerHTML = homepages[current_home_page][1];
	generate_homepage_header();

	if (key == 13) { // ENTER pressed
		switch (homepages[current_home_page][0]) {
			case 'Exploit Generator':
				homepageBody.innerHTML = '\nEXPLOIT GENERATOR\n\n' + random_hacking_text() + '\n\nPress ENTER to generate another suggestion';
				break;
			case 'Hackerman':
				clear_home_page();
				hacking_intro();
				break;
			case 'Shutdown':
				document.body.removeEventListener("keydown", homepage_keydown);
				homepageBody.innerHTML = 'Goodbye';
				screenRectangle.style.animation = 'turn-off 0.61s cubic-bezier(0.230, 1.000, 0.320, 1.000)';
				setTimeout(() => {document.body.innerHTML = ''}, 570);
				break;
		}	
	}
}


var current_verbs = [], current_nouns = [], current_locations = [], current_comments = [];
function random_hacking_text() {
  if (current_verbs.length == 0)
    current_verbs = shuffle(exploit_verbs.slice());
  if (current_nouns.length == 0)
    current_nouns = shuffle(exploit_nouns.slice());
  if (current_locations.length == 0)
    current_locations = shuffle(exploit_locations.slice());
  if (current_comments.length == 0)
    current_comments = shuffle(exploit_comments.slice());
  return [
    current_verbs.pop(),
    current_nouns.pop(),
    current_locations.pop() + '.\n',
    current_comments.pop(),
  ].join(' ');
}



function clear_home_page() {
	homePage.style.display = "none";
	document.body.removeEventListener("keydown", homepage_keydown);
}