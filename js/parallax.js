var parallax = function(){

    var controller = new ScrollMagic.Controller();
    // define movement of panels
    var wipeAnimation = new TimelineMax()
        .fromTo("#roots", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone})  // in from left
        .fromTo("#boroughs",    1, {x:  "100%"}, {x: "0%", ease: Linear.easeNone})  // in from right
        .fromTo("#society", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone}) // in from top
        .fromTo("#humanity", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone}) // in from bottom
        .fromTo("#speakers", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone})
        .fromTo("#committee", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone})
        .fromTo("#faq", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone});
    new ScrollMagic.Scene({
        triggerElement: "body.tedxunc-body",
        triggerHook: "onLeave",
        duration: "300%"
    })
    .setPin("body.tedxunc-body")
    .setTween(wipeAnimation)
    .addTo(controller);

    // var bg_tween = TweenMax.to('.speakersTrigger', 1, {
    //     backgroundColor: '#FFA500',
    //     ease: Linear.easeNone
    // });
    // var bg_scene = new  ScrollMagic.Scene({
    //     triggerElement: '.speakersTrigger',
    //     triggerHook: "onLeave"
    // })
    // .setTween(bg_tween)
    // .addTo(controller);

    // var scrollAnimation = new TimelineMax()
    //     .fromTo("#humanity", 1, {y: "0%"}, {y: "-100%", ease: Linear.easeNone})
    //     .fromTo("#speakers", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone});
    // new ScrollMagic.Scene({
    //     triggerElement: "#speakers",
    //     triggerHook: "onEnter",
    //     duration: "300%"
    // })
    // .setPin("#speakers")
    // .setTween(scrollAnimation)
    // .addTo(controller);

}
parallax();