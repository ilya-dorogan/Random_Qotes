"use strict";

window.addEventListener('DOMContentLoaded', () => {

	const btn = document.querySelector('.btn '),
		qouteElement = document.getElementById("qoute"),
		authorElement = document.getElementById("author");

	var qoutes = {
		'Albert Einstein': `“Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and it's beauty.`,
		'Pierce Brown': `“Man cannot be freed by the same injustice that enslaved it.”`,
		'Carrie Bradshaw': `“Maybe some women aren't meant to be tamed. Maybe they just need to run free until they find someone just as wild to run with them.`,
		'Alysha Speer': `“You never really know what's coming. A small wave, or maybe a big one. All you can really do is hope that when it comes, you can surf over it, instead of drown in its monstrosity.”`,


	};

	let authors = Object.keys(qoutes);

	function setContent() {
		let author = authors[Math.floor(Math.random() * authors.length)];
		let qoute = qoutes[author];
		qouteElement.innerHTML = qoute;
		authorElement.innerHTML = author;
	}

	btn.addEventListener('click', setContent);

	setInterval(setContent, 5000);

});