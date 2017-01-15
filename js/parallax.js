var parallax = function(){

    var controller = new ScrollMagic.Controller();
    // define movement of panels
    // var wipeAnimation = new TimelineMax()
    //     .fromTo("#roots", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone})  // in from left
    //     .fromTo("#boroughs",    1, {x:  "100%"}, {x: "0%", ease: Linear.easeNone})  // in from right
    //     .fromTo("#society", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone}) // in from top
    //     .fromTo("#humanity", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone}) // in from bottom
    //     .fromTo("#speakers", 1, {x: "-100%", y: "100%"}, {x: "0%", y: "0%", ease: Linear.easeNone})
    //     .fromTo("#committee", 1, {x: "100%", y: "100%"}, {x: "0%", y: "0%", ease: Linear.easeNone})
    //     .fromTo("#faq", 1, {x: "-100%", y: "-100%"}, {x: "0%", y: "0%", ease: Linear.easeNone})
    //     .fromTo("#contact", 1, {x: "100%", y: "-100%"}, {x: "0%", y: "0%", ease: Linear.easeNone});
    // new ScrollMagic.Scene({
    //     triggerElement: "body.tedxunc-body",
    //     triggerHook: "onLeave",
    //     duration: "300%"
    // })
    // .setPin("body.tedxunc-body")
    // .setTween(wipeAnimation)
    // .addTo(controller);

    // get all slides
    var slides = document.querySelectorAll(".anchor");

    // create scene for every slide
    for (var i=0; i<slides.length; i++) {
        new ScrollMagic.Scene({
                triggerElement: slides[i],
                triggerHook: 0
            })
            .setPin(slides[i])
            .addTo(controller);
    }


    // change behaviour of controller to animate scroll instead of jump
	// controller.scrollTo(function (newpos) {
	// 	TweenMax.to(window, 0.5, {scrollTo: {y: newpos}});
	// });

	//  bind scroll to anchor links
	$(document).on("click", "a[href^='#']", function (e) {
		var id = $(this).attr("href");
		if ($(id).length > 0) {
			e.preventDefault();

			// trigger scroll
			controller.scrollTo(id);

				// if supported by the browser we can even update the URL.
			if (window.history && window.history.pushState) {
				history.pushState("", document.title, id);
			}
		}
	});
}
parallax();