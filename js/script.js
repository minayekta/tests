$(function () { 
    var controller = new ScrollMagic.Controller();
    var wipeAnimation = new TimelineMax().to(".moving-words", 1,   {y: "-25%"})
                                        .to(".moving-words", 1,   {y: "-50%"})
                                        .to(".moving-words", 1, {y:"-75%"})

    new ScrollMagic.Scene({
            triggerElement: "#moving-texts",
            triggerHook: "onLeave",
            duration: "300%"
        })
        .setPin("#moving-texts")
        .setTween(wipeAnimation)
        .addTo(controller);

    ////////////////////////////////////////////////
    
    var tween = TweenMax.from("#animate", 2, {autoAlpha: 0, scale: 0.1});
    new ScrollMagic.Scene({triggerElement: ".trigger-poster", duration: 500, triggerHook: "onLeave"})
        .setTween(tween)
        .addIndicators() 
        .addTo(controller)

    controller.scrollTo(function (newpos) {
        TweenMax.to(window, 0.5, {scrollTo: {y: newpos}});
    });
});