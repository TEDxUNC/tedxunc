// // init controller
// //var controller = new ScrollMagic.Controller();

// var controller = new ScrollMagic.Controller({
//     globalSceneOptions: {
//         triggerHook: 'onLeave'
//     }
// });


// // create a scene
// var scene;
            
// var slides = document.querySelectorAll(".anchor");

// // create scene for every slide
// for (var i=0; i<slides.length; i++) {
//     new ScrollMagic.Scene({
//             triggerElement: slides[i]
//         })
//         .setPin(slides[i])
//         .addIndicators() // add indicators (requires plugin)
//         .addTo(controller);
// }


var controller = new ScrollMagic.Controller();
// define movement of panels
var wipeAnimation = new TimelineMax()
    .fromTo("#roots", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone})  // in from left
    .fromTo("#boroughs",    1, {x:  "100%"}, {x: "0%", ease: Linear.easeNone})  // in from right
    .fromTo("#society", 1, {y: "-200%"}, {y: "0%", ease: Linear.easeNone}) // in from top
    .fromTo("#humanity", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone}); // in from bottom
    // create scene to pin and link animation
new ScrollMagic.Scene({
    triggerElement: "body.tedxunc-body",
    triggerHook: "onLeave",
    duration: "300%"
})
.setPin("body.tedxunc-body")
.setTween(wipeAnimation)
.addTo(controller);