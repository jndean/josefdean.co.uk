
var current_home_page = 0;

const homepages = [
	['Home', homepage_home_text],
	['About', homepage_about_text],
	['Contact', homepage_contact_text],
	['Exploit Generator', homepage_exploit_generator_text],
	['Hackerman', homepage_hackerman_text],
]


function debug_straight_to_homepage() {
	document.body.onkeydown = null;
	loginPage.parentNode.removeChild(loginPage);
	openHomePage();
}
// debug_straight_to_homepage();


function openHomePage() {
	homePage.style.display = "block";
	homepageBody.innerHTML = homepages[current_home_page][1];
	generate_homepage_header();

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


function homepage_keydown(e) {
	if (e.keyCode == 37) {
		current_home_page = (current_home_page - 1 + homepages.length) % homepages.length;
	} else if (e.keyCode == 39) {
		current_home_page = (current_home_page + 1 + homepages.length) % homepages.length;
	} else if (e.keyCode >= 49 && e.keyCode <= 53) {
		current_home_page = e.keyCode - 49;
	}
	homepageBody.innerHTML = homepages[current_home_page][1];
	generate_homepage_header();

	// switch(current_home_page) {
	// 	case 1:
	// }

}