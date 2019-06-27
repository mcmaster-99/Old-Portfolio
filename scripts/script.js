$(document).ready(function() {


	// Scrolling animation
	$("#homeNavButton, #projectsNavButton, #contactNavButton").click(function(e) {
		// if error, prevent animation
		e.preventDefault();

		// declare target
		var target;

		// the page will scroll based on what the user
		// clicks from the navigation bar.
		if ($(this).get(0).id == "homeNavButton") {
			target = $("#homePage")
		} else if ($(this).get(0).id == "projectsNavButton") {
			target = $("#projectsDiv");
		} else if ($(this).get(0).id == "contactNavButton") {
			target = $("#contactDiv");
		}

		// Stops the scrolling exactly at the start of the div.
		$("html, body").animate({
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

});