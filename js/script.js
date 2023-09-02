$(function () {
  let controller = new ScrollMagic.Controller();
  let wipeAnimation = new TimelineMax()
    .to(".moving-words", 1, { y: "-25%" })
    .to(".moving-words", 1, { y: "-50%" })
    .to(".moving-words", 1, { y: "-75%" });

  new ScrollMagic.Scene({
    triggerElement: "#moving-texts",
    triggerHook: "onLeave",
    duration: "350%",
  })
    .setPin("#moving-texts")
    .setTween(wipeAnimation)
    .addTo(controller);

  ////////////////////////////////////////////////

  let tween = TweenMax.from(".variety-frame", 2, { autoAlpha: 0, scale: 0.1 });
  new ScrollMagic.Scene({
    triggerElement: ".trigger-poster",
    duration: 200,
    triggerHook: "onLeave",
  })
    .setTween(tween)
    .addTo(controller);

  ////////////////////////////////////////////////

  let discover_variety_frame = 1;
  let discover_variety_frame_step = 1;
  $(".pictures-frame").on("click", function () {
    // change POSTER
    discover_variety_frame++;
    $(".GlobalTour .poster-wrap").addClass("step-two");
    // change TEXT
    $(".GlobalTour .all-text-box").addClass("step-two");

    // change SLIDE
    if (
      discover_variety_frame == 3 ||
      discover_variety_frame == 5 ||
      discover_variety_frame == 7
    ) {
      $(".GlobalTour .all-text-box").removeClass("step-two");
      $(".GlobalTour .poster-wrap").removeClass("step-two");

      let = icon_vehicle = $(
        ".GlobalTour .vehicles-icons .step-" + discover_variety_frame_step
      );
      icon_vehicle.removeClass("step-" + discover_variety_frame_step);

      $(".GlobalTour .viriety-posters").removeClass(
        "frame-" + discover_variety_frame_step
      );
      discover_variety_frame_step++;
      icon_vehicle.addClass("step-" + discover_variety_frame_step);

      $(".GlobalTour .viriety-posters").addClass(
        "frame-" + discover_variety_frame_step
      );
    }

    console.log(discover_variety_frame);
    console.log(discover_variety_frame_step);
  });

  // MANAGERS SECTION
  gsap.to(".anime-titles", {
    x: "",
    y: "",
    duration: 1,
  });

  ////////////////////////////////////////////////

  new ScrollMagic.Scene({ triggerElement: ".title-managers", offset: 100 })
    .setClassToggle(".title-managers", "go-top")
    .addTo(controller);

  ////////////////////////////////////////////////
  // LARGER TITLES

  // new ScrollMagic.Scene({
  //     triggerElement: "#trigger-no-worries-titles", duration: 2000,offset: 100
  // })
  // .setClassToggle(".title-no-worries", "pinned")
  // .setTween("#larger-title", {scale: 10, ease: Linear.easeNone})
  // .addTo(controller)

  // COMMING CONTACTS

  // var controllerFuck = new ScrollMagic.Controller({
  //   globalSceneOptions: {
  //     triggerHook: 'onLeave',
  //   }
  // });
  // new ScrollMagic.Scene({
  //     triggerElement: ".no-worries",
  //   })
  //   .setPin(".no-worries", {pushFollowers: false}).addIndicators().addTo(controllerFuck);

  gsap.registerPlugin(ScrollTrigger);

  gsap.to("#larger-title", {
    scrollTrigger: {
      trigger: "#larger-title",
      scrub: true,
      pin: true,
      start: "center center",
      end: "+=1000",
      ease: "power2",
    },
    scale: 4.5,
    opacity: 0,
    height: 0,
  });

  gsap.to(".go-connect", {
    scrollTrigger: {
      trigger: ".go-connect",
      scrub: true,
      pin: true,
      start: "center center",
      end: "+=2500",
      ease: "power2",
    },
    opacity:1,
  });

  gsap.to(".connect-title", {
    scrollTrigger: {
      trigger: ".go-connect",
      scrub: true,
      // pin: true,
      start: "center center",
      end: "+=500",
      ease: "power2",
    },
    y:"-200px",
  });

  gsap.to(".office-posters-wrap", {
    scrollTrigger: {
      trigger: ".go-connect",
      scrub: true,
      // pin: true,
      start: "center center",
      end: "+=500",
    },
    y:"-400px",
    opacity:1,
    duration:10,
    ease: Linear.easeNone
  });

  gsap.to(".office-2", {
    scrollTrigger: {
      trigger: ".office-2",
      scrub: true,
      // pin: true,
      start: "center center",
      end: "+=500",
      ease: "power2",
    },
    y:"-490px",
  });

  gsap.to(".office-3", {
    scrollTrigger: {
      trigger: ".office-3",
      scrub: true,
      // pin: true,
      start: "center center",
      end: "+=500",
      ease: "power2",
    },
    y:"-980px",
  });


  gsap.to(".negotiate-posters-wrap", {
    scrollTrigger: {
      trigger: ".negotiate-posters-wrap",
      scrub: true,
      pin: true,
      start: "center center",
      end: "+=1500",
    },
  });
  gsap.to(".negotiate-2", {
    scrollTrigger: {
      trigger: ".negotiate-2",
      scrub: true,
      start: "center center",
      ease: "power2",
    },
    y:"-559px",
  });

  //////////////////////////////////////////////// SLIDER_CAROUSEL

  $(".owl-carousel").owlCarousel();

  //////////////////////////////////////////////////// FUNCTION FOR RECIEVE TO ELEMENT SCROLL

  $(window).scroll(function () {
    let topToElement = $(".no-worries").offset().top,
      heightElement = $(".no-worries").outerHeight(),
      windowHeight = $(window).height(),
      scrollFromTop = $(this).scrollTop();
    console.log(topToElement, heightElement, windowHeight, scrollFromTop);
    if (scrollFromTop > topToElement - windowHeight) {
      // alert('you have scrolled to the h1!');
    }
  });
});


