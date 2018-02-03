$(document).ready(function() {


	// Scrolling animation
	$("#homeButton, #projectsNavButton, #contactNavButton").click(function(e) {
		// if error, prevent animation
		e.preventDefault();

		// declare target
		var target;

		// the page will scroll based on what the user
		// clicks from the navigation bar.
		if ($(this).get(0).id == "projectsNavButton") {
			target = $("#projectsDiv");
		} else if ($(this).get(0).id == "contactNavButton") {
			target = $("#contactDiv");
		} else if ($(this).get(0).id == "homeButton") {
			target = $("#homePage");
		}

		// Stops the scrolling exactly at the start of the div.
		$("html, body").stop().animate({
			scrollTop: target.offset().top-0
		}, 1000);

	});

	/*	
		**********************************************
		***ANIMATIONS SECTION BASED ON SCREEN WIDTH***
		**********************************************
	*/
	// iPhone 5 portrait animations/effects
	if (window.screen.availWidth == 320) {
		$("#firstNameBorder").animate({
			marginLeft : "0px"
		}, 1000);
		$("#lastNameBorder").animate({
			marginLeft : "200px"
		}, 1000);
		$(".nameDiv").animate({
			opacity : "1"
		}, 2000);
	// iPhone 5 landscape animations/effects
	} else if (window.screen.availWidth == 568) {
		$("#firstNameBorder").animate({
			marginLeft : "0px"
		}, 1000);
		$("#lastNameBorder").animate({
			marginLeft : "148px"
		}, 1000);
		$(".nameDiv").animate({
			opacity : "1"
		}, 2000);
	// iPhone 6/7/8 portrait animations/effects
	} else if (window.screen.availWidth == 375) {
		$("#firstNameBorder").animate({
			marginLeft : "0px"
		}, 1000);
		$("#lastNameBorder").animate({
			marginLeft : "200px"
		}, 1000);
		$(".nameDiv").animate({
			opacity : "1"
		}, 2000);
	// iPhone 6/7/8 landscape animations/effects
	} else if (window.screen.availWidth == 667) {
		$("#firstNameBorder").animate({
			marginLeft : "0px"
		}, 1000);
		$("#lastNameBorder").animate({
			marginLeft : "148px"
		}, 1000);
		$(".nameDiv").animate({
			opacity : "1"
		}, 2000);
	// iPhone 6/7/8 plus portrait animations/effects
	} else if (window.screen.availWidth == 414) {
		$("#firstNameBorder").animate({
			marginLeft : "0px"
		}, 1000);
		$("#lastNameBorder").animate({
			marginLeft : "208px"
		}, 1000);
		$(".nameDiv").animate({
			opacity : "1"
		}, 2000);
	// iPhone 6/7/8 plus landscape animations/effects
	} else if (window.screen.availWidth == 736) {
		$("#firstNameBorder").animate({
			marginLeft : "0px"
		}, 1000);
		$("#lastNameBorder").animate({
			marginLeft : "208px"
		}, 1000);
		$(".nameDiv").animate({
			opacity : "1"
		}, 2000);
	} else {
		$("#firstNameBorder").animate({
			marginLeft : "0px"
		}, 1000);
		$("#lastNameBorder").animate({
			marginLeft : "400px"
		}, 1000);
		$(".nameDiv").animate({
			opacity : "1"
		}, 2000);
	}


	$(function() {
		//get form
		var form = $("#ajax-contact");

		//get messages div
		var formMessages = $("#form-messages");

		$(form).submit(function(event) {

			//stop browser from submitting form
			event.preventDefault();

			//serialize form data
			var formData = $(form).serialize();


			$.ajax({
				type: "post",
				url: $(form).attr("action"),
				dataType: "json",
				data: formData,
				crossDomain: true
			}).done(function(response){
				// remove error class and add success class
				$(formMessages).removeClass('error');
				$(formMessages).addClass('success');

				$(formMessages).text(response);

				//clear form
				$("#name").val("");
				$("#email").val("");
				$("#messages").val("");
			}).fail(function(data) {
				// remove success class and add error class
				$(formMessages).removeClass('success');
				$(formMessages).addClass('error');

				// set message text
				if (data.responseText !== "") {
					$(formMessages).text(data.responseText);
				} else {
					$(formMessages).text("An error occured. Try again.");
				}
			});
		})


	})

	

});