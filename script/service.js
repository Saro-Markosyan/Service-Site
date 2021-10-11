
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
});