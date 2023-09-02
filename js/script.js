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

  // LARGER TITLES
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

  // CONNETCT OFFICES (behind titles)
  gsap.to(".connect-title", {
    scrollTrigger: {
      trigger: ".go-connect",
      scrub: true,
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
      start: "center center",
      end: "+=500",
      ease: "power2",
    },
    y:"-980px",
  });

  // NEGOTIATE TEAMS 
  gsap.to(".go-negotiate", {
    scrollTrigger: {
      trigger: ".go-negotiate",
      scrub: true,
      pin: true,
      start: "center center",
      end: "+=3600",
    },
  });

  gsap.to(".negotiate-2", {
    scrollTrigger: {
      trigger: ".negotiate-2",
      scrub: true,
      start: "center center",
      delay:10, 
    
    },
    ease:"slow(0.7, 0.7, false)",
    y:"-560px",
  });
  
  gsap.to(".negotiate-3", {
    scrollTrigger: {
      trigger: ".negotiate-3",
      scrub: true,
      start: "center center",
    },
    ease:"slow(0.7, 0.7, false)",
    duration: 10,
    y:"-1120px",
  });

  gsap.to(".negotiate-4", {
    scrollTrigger: {
      trigger: ".negotiate-4",
      scrub: true,
      start: "center center",
    },
    ease:"slow(0.7, 0.7, false)",
    duration: 10,
    y:"-1680px",
    // css:{className:"finish negotiate-4"}, 
   
  });

  //////////////////////////////////////////////// MOVING FORM

  $(window).scroll(function () {
    let topToElement = $(".space-test").offset().top,
      heightElement = $(".space-test").outerHeight(),
      windowHeight = $(window).height(),
      scrollFromTop = $(this).scrollTop();
      let howMuchTrigger = topToElement - windowHeight
    if (scrollFromTop > howMuchTrigger  && scrollFromTop - howMuchTrigger < 300 ) {
      console.log('you have scrolled to the h1!');
      $(".moving-form .image-part").removeClass("separated")
      $(".moving-form .form-part").removeClass("separated")
    }
  });

  //////////////////////////////////////////////// RED SPACE


  gsap.to(".red-space", {
    scrollTrigger: {
      trigger: ".red-space",
      scrub: true,
      pin: true,
      start: "center center",
      end: "bottom -100%",
      toggleClass: "active",
      ease: "power2"
    },
  });


  gsap.to(".moving-title", {
    scrollTrigger: {
      trigger: ".moving-title",
      scrub: 0.5,
      start: "top bottom",
      end: "bottom -300%",
      ease: "power2"
    },
    y: "-30%"
  });

  

  //////////////////////////////////////////////// SLIDER_CAROUSEL

  $(".owl-carousel").owlCarousel();

  //////////////////////////////////////////////////// FUNCTION FOR RECIEVE TO ELEMENT SCROLL


});


