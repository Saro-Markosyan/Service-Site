$(function () {
	'use strict';

	const tags = ["navigation-id", "bout-us", "business-types", "services", "testimonials", "contact-us"];
	scrollToElements();

	function scrollToElements () {
			$("li").each(function(i, obj) {

					$(obj).click(function() {

						if (i == 0) {
							//$.scrollTo("bout-us");
						} else if (i == 1) {
							$.scrollTo("#about-us");
						} else if(i == 2) {
							$.scrollTo("#business-types");
						} else if(i == 3) {
							$.scrollTo("#services");
						} else if (i == 4) {
							$.scrollTo("#testimonials");
						} else {
							$.scrollTo("#contact-us");
						}
					});

			});
   }

	 //var tabButtonSend = document.getElementById("#send");

	 $("#send").click(function(){

		 var tagName = $("#name");
		 var tagPhoneNumb = $("#phone-feild");
		 var tagEmail = $("#email-feild");
		 var tagtextAreaMessage = $("#message-feild");
		 /*var link = "mailto:saromark@yahoo.com"+
		 "?subject="+ escape(tagName.value) + "&body="+ escape( escape("name: " + tagPhoneNumb.value) + escape("email: " + tagEmail.value) +
			escape("message: " + tagtextAreaMessage.value));*/
		 /*var link = "mailto:markosyansaro@gmail.com" + "?subject=" + tagName.val()+ "&body=" +
			"phone: " + tagPhoneNumb.val()	+ "email: " +
			 tagEmail.val()+"message: " + tagtextAreaMessage.val();

		 window.location.href = link;
		 window.open(link);*/

		 if (!tagName.val() || !tagPhoneNumb.val() || !tagEmail.val() || !tagtextAreaMessage.val()) {
				 alert("Please check your entries");
		 } else {
		 var message = "Phone: " + tagPhoneNumb.val() + ", " +"/n message: " + tagtextAreaMessage.val();



				 $.ajax({
					 // TODO: : "https://formspree.io/saromark@yahoo.com",
						url: 'phpmailer.php',
					 method: 'POST',
					 data: $('#form-ask-question').serialize(),
					 success: function(result){
						 if (result == 'success'){
								 $('.output_message').text('Message Sent!');
						 } else {
								 $('.output_message').text('Error Sending email!');
						 };

					 }
					 });

				 }

			 //$(this).trigger("reset")}
	 });

	  /*$("#maile-anchor").click(function(){
			 var mail = "mailto:markosyansaro@gmail.com";
			 window.location.href = mail;
			 window.open(mail, '_self');
		});*/
});
