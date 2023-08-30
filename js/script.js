$ (function () {
  let controller = new ScrollMagic.Controller ();
  let wipeAnimation = new TimelineMax ()
    .to ('.moving-words', 1, {y: '-25%'})
    .to ('.moving-words', 1, {y: '-50%'})
    .to ('.moving-words', 1, {y: '-75%'});

  new ScrollMagic.Scene ({
    triggerElement: '#moving-texts',
    triggerHook: 'onLeave',
    duration: '350%',
  })
    .setPin ('#moving-texts')
    .setTween (wipeAnimation)
    .addTo (controller);

  ////////////////////////////////////////////////

  let tween = TweenMax.from ('.variety-frame', 2, {autoAlpha: 0, scale: 0.1});
  new ScrollMagic.Scene ({
    triggerElement: '.trigger-poster',
    duration: 200,
    triggerHook: 'onLeave',
  })
    .setTween (tween)
    .addTo (controller);

  ////////////////////////////////////////////////

  let discover_variety_frame = 1;
  let discover_variety_frame_step = 1;
  $ ('.pictures-frame').on ('click', function () {
    // change POSTER
    discover_variety_frame++;
    $ ('.GlobalTour .poster-wrap').addClass ('step-two');
    // change TEXT
    $ ('.GlobalTour .all-text-box').addClass ('step-two');

    // change SLIDE
    if (
      discover_variety_frame == 3 ||
      discover_variety_frame == 5 ||
      discover_variety_frame == 7
    ) {
        $ ('.GlobalTour .all-text-box').removeClass ('step-two');
        $ ('.GlobalTour .poster-wrap').removeClass ('step-two');

        let = icon_vehicle = $ (
            '.GlobalTour .vehicles-icons .step-' + discover_variety_frame_step
        )
        icon_vehicle.removeClass ('step-' + discover_variety_frame_step);

        $ ('.GlobalTour .viriety-posters').removeClass (
            'frame-' + discover_variety_frame_step
        );
        discover_variety_frame_step++;
        icon_vehicle.addClass ('step-' + discover_variety_frame_step);

        $ ('.GlobalTour .viriety-posters').addClass (
            'frame-' + discover_variety_frame_step
        );
    }

    console.log (discover_variety_frame);
    console.log (discover_variety_frame_step);
  });

  // MANAGERS SECTION 
    gsap.to(".anime-titles", {
        x: '',
        y: '',
        duration: 1,
    });

    ////////////////////////////////////////////////
    new ScrollMagic.Scene({triggerElement: ".title-managers",offset: 100})
        .setClassToggle(".title-managers", "go-left") 
        .addTo(controller);
});
