/* Toggle navigation menu on small screens */
var navToggle = document.querySelector('.nav-toggle');
var navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', function() {
	document.body.classList.toggle('nav-open');
});

navLinks.forEach(function(link) {
	link.addEventListener('click', function() {
		document.body.classList.remove('nav-open');
	});
});

/* Show and hide project details */
var projectImages = document.querySelectorAll('.project img');
var projectDetails = document.querySelectorAll('.project p');

projectImages.forEach(function(image, index) {
	image.addEventListener('click', function() {
		projectDetails[index].classList.toggle('show');
	});
});

/* Validate contact form */
var contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(event) {
	event.preventDefault();
	var name = document.getElementById('name').value.trim();
	var email = document.getElementById('email').value.trim();
	var message = document.getElementById('message').value.trim();
	var error = document.getElementById('error');

	if (name === '' || email === '' || message === '') {
		error.innerHTML = 'Please fill in all fields.';
	} else {
		error.innerHTML = '';
		alert('Message sent successfully!');
	}
});
