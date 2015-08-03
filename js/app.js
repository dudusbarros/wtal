/*!
 * Mowe Webtal Project v0.9.9 (http://gomowe.org/)
 * Copyright 2013-2015 Noibe Developers
 * Licensed under MIT (https://github.com/noibe/villa/blob/master/LICENSE)
 */

var _emailService = 'comercial.webtal@gmail.com';
var _emailServiceURL = 'http://letsmowe.com/wtal/i/mail/';
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
				console.log('enviando email');
				emailServiceCount--;
				console.log(c);
				/*$.ajax({
					cache: false,
					data: c,
					error: function(data) {
						$(a).removeClass('active-form');
						$(a).addClass('fail');
					},
					success: function(data) {
						$(a).removeClass('active-form');
						$(a).addClass('success');
						emailServiceCount--;
					},
					url: _emailServiceURL
				});*/
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

/**
 * Handler of send button to calls the sendResponse function
 */
var toggleForm;
toggleForm = function() {

	var a = this.parentNode;

	if (!a.classList.contains('active')) a.classList.add('active');
	else a.classList.remove('active');
	/*
	// Remove Success and Fail class and fix de title
	$('.pricelist .content > .success').removeClass('success').
			find('[data-toggle=contact-form]').
			html('Assine Já');
	$('.pricelist .content > .fail').removeClass('fail').
			find('[data-toggle=contact-form]').
			html('Assine Já');

	// Get the Parent and some possible element with form enabled
	var a = $(this).parent(), b, c;

	// If the current element has active, disable it
	if ($(a).hasClass('active-form')) {
		$(a).removeClass('active-form');
		// Fix the title of button
		$(a).find('[data-toggle=contact-form]').html('Assine Já');
		b = true;
	}

	// Disable the form of any element with form enabled
	c = $('.pricelist .content > .active-form');
	if (c.length) {
		$(c).removeClass('active-form');
		// Fix the title of button of enabled itens
		$(c).find('[data-toggle=contact-form]').html('Assine Já');
	}

	// IF var b is ok, enable the form of current element
	if (!b) {
		// Enable the form of current element
		$(a).addClass('active-form');

		// Add the fallback to title of button
		$(this).html('Voltar');

		$(a).find('[name=name]').focus();
	}
	*/

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

	var inputSubmit = document.createElement('input');
	inputSubmit.type = 'submit';
	inputSubmit.setAttribute('class', 'contact-form action response-send user-unselect cursor-pointer');
	inputSubmit.value = "Solicitar Contato!";

	e.appendChild(link);
	e.appendChild(inputName);
	e.appendChild(inputPhone);
	e.appendChild(inputSubmit);
};

/**
 * Append the form and add the lister events
 */
var appendForm;
appendForm = function() {
	var i;

	var contactForm = '<a class="action user-unselect cursor-pointer toggle-contact-form"></a>' +
		'<input type="text" class="contact-form" name="name" placeholder="Nome" autocomplete="off"/>' +
		'<input type="tel" class="contact-form" name="phone" placeholder="Telefone (apenas números)" autocomplete="off" maxlength="11"/>' +
		'<input type="submit" class="contact-form action response-send user-unselect cursor-pointer" value="Solicitar Contato!"/>' +
		'<span class="action sent">Obrigado! :D<br/>Entraremos em contato em breve!</span>' +
		'<span class="action not-sent">Ops! :(<br/>Houve algum problema! Tente novamente mais tarde!</span>';

	// Do the append
	//$('.pricelist .content > li').insertHTML(contactForm);

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
