// init controller
var controller = new ScrollMagic.Controller();

// create a scene
var scene = new ScrollMagic.Scene({
                duration: 400,    // the scene should last for a scroll distance of 100px
                offset: 50        // start this scene after scrolling for 50px
            })
            .setPin("#roots") // pins the element for the scene's duration
            .addTo(controller); // assign the scene to the controller
            