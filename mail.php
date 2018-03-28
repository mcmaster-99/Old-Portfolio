<?php

	if ($_SERVER["REQUEST_METHOD"] == "POST") {
		// Grab the form fields and remove all whitespace
		$name = strip_tags(trim($_POST["name"]));
			$name = str_replace(array("\r","\n"), array(" "," "),$name);
		$email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
		$message = trim($_POST["message"]);

		// Check that data was sent successfully
		if (empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
			// Set a 400 (bad request) response code and exit.
			http_response_code(400);
			echo "There was an issue submitting this form. Please try again.";
		}

		// Set my (recipient) email address
		$recipient = "bsulaimanh@gmail.com";

		// Email subject
		$subject = "Web contact from $name";

		// Email content
		$email_content = "Name: $name\n";
		$email_content = "Email: $email\n";
		$email_content = "Message: \n$message\n";

		// Email headers
		$email_headers = "From: $name <$email>";

		// Sending the email
		if (mail($recipient, $subject, $email_content, $email_headers)) {
			// if sending is successful
			http_response_code(200);
		} else {
			// if sending is not successful
			http_response_code(500);
			echo "There was an error. Please try again.";
		}
	} else {
		http_response_code(403);
		echo "There was an error. Please try again";
	}

?>