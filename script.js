
// import { Application } from '@splinetool/runtime';

window.onload = function () {
  var controller = new ScrollMagic.Controller();
  var blackRectangleHeight = window.innerHeight;

  var scene1 = new ScrollMagic.Scene({
    triggerElement: '#blue-rectangle',
    duration: '35%',
    triggerHook: 0.7,
  })
    .setTween(".animated-text p", 1, { left: "calc(80% - 50vw)", ease: Power1.easeInOut }) // trigger a TweenMax.to tween
    .addTo(controller);

  var scene2 = new ScrollMagic.Scene({
    triggerElement: '#blue-rectangle',
    duration: '55%',
    triggerHook: 0,
  })
    .setTween(
      gsap.timeline().to(".animated-text p", {
        left: "200%",
        top: "200%",
        ease: Power1.easeInOut,
        duration: 1
      })
    )
    .addTo(controller);

  var scene3 = new ScrollMagic.Scene({
    triggerElement: '#black-rectangle',
    duration: '200%',
    triggerHook: 0,
  })
    .setPin("#black-rectangle")
    .setTween("#zerosones-text", { y: "-100%", ease: Power1.easeInOut })
    .addTo(controller);

  var scene4 = new ScrollMagic.Scene({
    triggerElement: '#black-rectangle',
    duration: '67%',
    triggerHook: 0,
  })
    .setTween(".animated-text-zerosones p", 1, { color: "white", ease: Power1.easeInOut })
    .addTo(controller);


  var scene5 = new ScrollMagic.Scene({
    triggerElement: '#black-rectangle',
    offset: blackRectangleHeight * 0.67,
    duration: '33%',
    triggerHook: 0,
  })
    .setTween(".animated-text-zerosones p", 1, { color: "hotpink", ease: Power1.easeInOut })
    .addTo(controller);


  var scene6 = new ScrollMagic.Scene({
    triggerElement: '#black-rectangle',
    offset: blackRectangleHeight * 0.3,
    duration: '100%',
    triggerHook: 0,
  })
    .setTween(
      gsap.timeline().to("#black-rectangle, #black-rectangle *", {
        scale: 3,
        ease: Power1.easeInOut,
        duration: 1
      })
    )
    .addTo(controller);

  var text = document.getElementById('typeout-text');
  var textLength = text.children.length;
  var scrollStart = $('#transparent-rectangle').offset().top;
  var scrollEnd = scrollStart + $('#transparent-rectangle').height();

  var scene7 = new ScrollMagic.Scene({
    triggerElement: '#transparent-rectangle',
    duration: '100%',
    triggerHook: 0,
  })
    .on("update", function (event) {
      var scrollPos = event.scrollPos;
      var relativeScroll = (scrollPos - scrollStart) / (scrollEnd - scrollStart);
      var numChars = Math.floor(relativeScroll * textLength);
      for (var i = 0; i < textLength; i++) {
        if (i <= numChars) {
          text.children[i].style.opacity = 1;
        } else {
          text.children[i].style.opacity = 0;
        }
      }
    })
    .addTo(controller)


  window.addEventListener('scroll', function () {
    const textElement = document.getElementById('typeout-text');
    const blackRectangleElement = document.getElementById('black-rectangle');
    const blackRectBottom = blackRectangleElement.offsetTop + blackRectangleElement.offsetHeight;
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    if (window.scrollY <= blackRectBottom) {
      textElement.style.position = 'fixed';
      textElement.style.top = '50%';
    } else if (window.scrollY > blackRectBottom && window.scrollY <= totalHeight) {
      let pos = (window.scrollY - blackRectBottom) / (totalHeight - blackRectBottom);
      textElement.style.top = `${Math.max((1 - pos) * 50, 10)}%`;
      if ((1 - pos) * 50 <= 10) {
        textElement.style.position = 'sticky';
      } else {
        textElement.style.position = 'fixed';
      }
    }
  });

  let tween0 = gsap.to("#plane0", {
    x: "200%",
    scrollTrigger: {
      trigger: "animatedphoto0",
      start: "top bottom",
      end: "bottom bottom",
      scrub: true,
    }
  });

  let tween1 = gsap.to("#plane1", {
    x: "100%",
    scrollTrigger: {
      trigger: ".animatedphoto1",
      start: "top bottom",
      end: "bottom bottom",
      scrub: true,
    }
  });

  let tween2 = gsap.to("#plane2", {
    x: "-100%",
    scrollTrigger: {
      trigger: ".animatedphoto2",
      start: "top bottom",
      end: "bottom bottom",
      scrub: true,
    }
  });

  let tween3 = gsap.to("#plane3", {
    x: "100%",
    scrollTrigger: {
      trigger: ".animatedphoto3",
      start: "top bottom",
      end: "bottom bottom",
      scrub: true,
    }
  });


};








