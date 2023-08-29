$ (function () {
  let controller = new ScrollMagic.Controller ();
  let wipeAnimation = new TimelineMax ()
    .to ('.moving-words', 1, {y: '-25%'})
    .to ('.moving-words', 1, {y: '-50%'})
    .to ('.moving-words', 1, {y: '-75%'});

  new ScrollMagic.Scene ({
    triggerElement: '#moving-texts',
    triggerHook: 'onLeave',
    duration: '300%',
  })
    .setPin ('#moving-texts')
    .setTween (wipeAnimation)
    .addTo (controller);

  ////////////////////////////////////////////////

  let tween = TweenMax.from ('#viriety-posters', 2, {autoAlpha: 0, scale: 0.1});
  new ScrollMagic.Scene ({
    triggerElement: '.trigger-poster',
    duration: 200,
    triggerHook: 'onLeave',
  })
    .setTween (tween)
    .addTo (controller);

  ////////////////////////////////////////////////

  let discover_variety_frame = 1;
  let discover_variety_frame_step = 1
  $(".pictures-frame").on("click",function(){
    discover_variety_frame_step = 2
    $(".GlobalTour .poster-wrap").addClass("step-two")
  })
});
