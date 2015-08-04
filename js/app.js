/*!
 * Mowe Webtal Project v1.0.0 (http://gomowe.org/)
 * Copyright 2013-2015 Noibe Developers
 * Licensed under MIT (https://github.com/noibe/villa/blob/master/LICENSE)
 */

var _emailService = 'comercial.webtal@gmail.com';
//_emailService = 'eduardo@kabanas.info';
var _emailServiceURL = 'http://letsmowe.com/wtal/i/mail/';
_emailServiceURL = 'i/mail/';
var emailServiceCount = 4;
var emailServiceClickCount = 8;

window.onload = function () {

	$('#prices .slide .nav>li').distinct({
		content: $("#prices .slide .content .pricelist"),
		defaultClass: $("#prices").attr("class"),
		startName: "slide",
		target: $("#prices")
	});

};

/* CONTACT FUNCTIONS START HERE */

var setSubmitAlert = function(a, b) {
	a.classList.remove('active');
	a.classList.remove('sent');
	a.classList.add(b);
};

/**
 * Load and send the response
 */
var sendResponse;
sendResponse = function() {
	var a = this.parentNode;
	var aa = $(a).find('[name=name]').val();
	var ab = $(a).find('[name=phone]').val();
	var ac = document.getElementById('city').value;

	// Test number of clicks to request (MAX = 4)
	if (emailServiceClickCount > 0) {

		// Test if fields are null
		if ((aa.length > 0) && (ab.length > 0)) {

			emailServiceClickCount--;
			var b = $(a).parent().parent();
			var	c = {
				city: ac,
				name: aa,
				phone: ab,
				product: $(a).find('.title').html(),
				reference: $(b).attr('data-product-reference'),
				mail: _emailService
			};
			// Test number of requests (MAX = 4)
			if (emailServiceCount > 0) {
				//console.log(c);
				//emailServiceCount--;
				//setSubmitAlert(a, 'success');
				$.ajax({
					cache: false,
					data: c,
					beforeSend: function() {
						a.classList.add('sent');
					},
					error: function(data) {
				        setSubmitAlert(a, 'error');
					},
					success: function(data) {
				        setSubmitAlert(a, 'success');
						emailServiceCount--;
					},
					url: _emailServiceURL
				});
			} else {
				$(a).removeClass('active-form');
				$(a).addClass('fail');
			}
		} else {
			alert('Campos vazios');
		}
	} else {
		$(a).removeClass('active-form');
		$(a).addClass('fail');
	}
};

var minifyAllForms = function() {
	var b = document.querySelectorAll('.pricelist .content > li');
	for (var i = b.length; i--; )
		minifyForm(b[i]);
};

var minifyForm = function(a) {
	a.classList.remove('error');
	a.classList.remove('success');
	a.classList.remove('active');
};

/**
 * Handler of send button to calls the sendResponse function
 */
var toggleForm;
toggleForm = function() {

	var a = this.parentNode;

	if ((a.classList.contains('error')) || (a.classList.contains('success'))) {
		minifyForm(a);
	} else {
		if (a.classList.contains('active')) {
			a.classList.remove('active');
		} else {
			minifyAllForms();
			a.classList.add('active');
			a.querySelectorAll('[name=name]')[0].focus();
		}

	}

};

var buildForm;
buildForm = function(e) {
	var link = document.createElement('a');
	link.setAttribute('class', 'action user-unselect cursor-pointer toggle-contact-form');

	var inputName = document.createElement('input');
	inputName.type = 'text';
	inputName.setAttribute('class', 'contact-form');
	inputName.setAttribute('name', 'name');
	inputName.setAttribute('placeholder', 'Nome');
	inputName.setAttribute('autocomplete', 'off');

	var inputPhone = document.createElement('input');
	inputPhone.type = 'tel';
	inputPhone.setAttribute('class', 'contact-form');
	inputPhone.setAttribute('name', 'phone');
	inputPhone.setAttribute('placeholder', 'Telefone (apenas números)');
	inputPhone.setAttribute('autocomplete', 'off');

	var inputSubmit = document.createElement('a');
	inputSubmit.setAttribute('class', 'contact-form action response-send user-unselect cursor-pointer');

	var submitAlert = document.createElement('span');
	submitAlert.classList.add('alert');

	e.appendChild(link);
	e.appendChild(inputName);
	e.appendChild(inputPhone);
	e.appendChild(inputSubmit);
	e.appendChild(submitAlert);
};

/**
 * Append the form and add the lister events
 */
var appendForm;
appendForm = function() {
	var i;

	var pricelistItems = document.querySelectorAll('.pricelist .content > li');

	for (i = pricelistItems.length; i--; ) {
		var item = pricelistItems[i];
		buildForm(item);
	}

	var toggleFormBtn = document.getElementsByClassName('toggle-contact-form');
	var sendBtn = document.getElementsByClassName('response-send');

	for (i = toggleFormBtn.length; i--; )
		toggleFormBtn[i].addEventListener('click', toggleForm);

	for (i = sendBtn.length; i--; )
		sendBtn[i].addEventListener('click', sendResponse);
};

window.addEventListener('load', appendForm);

/* CONTACT FUNCTIONS ENDS HERE */
