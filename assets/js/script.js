const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.75 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
// tl.fromTo("nav", { opacity: "0" }, { opacity: "1", duration: 1 });
tl.fromTo(".main", { opacity: "0" }, { opacity: "1", duration: 1.5 }, "-=0.5");

const letterBoxes = document.querySelectorAll("[data-letter-effect]");

let activeLetterBoxIndex = 0;
let lastActiveLetterBoxIndex = 0;
let totalLetterBoxDelay = 0;

const setLetterEffect = function () {
  // loop through all letter boxes
  for (let i = 0; i < letterBoxes.length; i++) {
    // set initial animation delay
    let letterAnimationDelay = 0;

    // get all character from the current letter box
    const letters = letterBoxes[i].textContent.trim();
    // remove all character from the current letter box
    letterBoxes[i].textContent = "";

    // loop through all letters
    for (let j = 0; j < letters.length; j++) {
      // create a span
      const span = document.createElement("span");

      // set animation delay on span
      span.style.animationDelay = `${letterAnimationDelay}s`;

      // set the "in" class on the span, if current letter box is active
      // otherwise class is "out"
      if (i === activeLetterBoxIndex) {
        span.classList.add("in");
      } else {
        span.classList.add("out");
      }

      // pass current letter into span
      span.textContent = letters[j];

      // add space class on span, when current letter contain space
      if (letters[j] === " ") span.classList.add("space");

      // pass the span on current letter box
      letterBoxes[i].appendChild(span);

      // skip letterAnimationDelay when loop is in the last index
      if (j >= letters.length - 1) break;
      // otherwise update
      letterAnimationDelay += 0.05;
    }

    // get total delay of active letter box
    if (i === activeLetterBoxIndex) {
      totalLetterBoxDelay = Number(letterAnimationDelay.toFixed(2));
    }

    // add active class on last active letter box
    if (i === lastActiveLetterBoxIndex) {
      letterBoxes[i].classList.add("active");
    } else {
      letterBoxes[i].classList.remove("active");
    }
  }

  setTimeout(function () {
    lastActiveLetterBoxIndex = activeLetterBoxIndex;

    // update activeLetterBoxIndex based on total letter boxes
    activeLetterBoxIndex >= letterBoxes.length - 1
      ? (activeLetterBoxIndex = 0)
      : activeLetterBoxIndex++;

    setLetterEffect();
  }, totalLetterBoxDelay * 1000 + 3000);
};

// call the letter effect function after window loaded
window.addEventListener("load", setLetterEffect);

const txts = document.querySelector(".animate-text").children,
  txtsLen = txts.length;
let index = 0;
const textInTimer = 3000,
  textOutTimer = 2800;

function animateText() {
  for (let i = 0; i < txtsLen; i++) {
    txts[i].classList.remove("text-in", "text-out");
  }
  txts[index].classList.add("text-in");

  setTimeout(function () {
    txts[index].classList.add("text-out");
  }, textOutTimer);

  setTimeout(function () {
    if (index == txtsLen - 1) {
      index = 0;
    } else {
      index++;
    }
    animateText();
  }, textInTimer);
}

window.onload = animateText;
var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".part_2",
    start: "0% 70%",
    end: "50% 50%",
    scrub: true,
    // markers: true,
  },
});

tl2.to(".rounded_div_wrapper", {
  height: 0,
  marginTop: 0,
});

gsap.set(".photo:not(:first-child)", { opacity: 0, scale: 0.5 });

const animation = gsap.to(".photo:not(:first-child)", {
  opacity: 1,
  scale: 1,
  duration: 1,
  stagger: 1,
});

ScrollTrigger.create({
  trigger: ".gallery",
  start: "top top",
  end: "bottom bottom",
  pin: ".right",
  animation: animation,
  scrub: true,
});
// let tl4 = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".part-4",
//     start: "50% 50%",
//     end: "200% 50%",
//     pin: true,
//     // markers: true,
//     scrub: 1,
//   },
// });
// tl4.to(
//   ".c-one",
//   {
//     marginTop: "-25%",
//     opacity: "1",
//   },
//   "sct-1"
// );
// tl4.to(
//   ".c-two",
//   {
//     opacity: "1",
//   },
//   "sct-2"
// );
// tl4.to(
//   ".c-one",
//   {
//     marginTop: "-190",
//     opacity: "0",
//   },
//   "sct-2"
// );
// tl4.to(
//   ".c-three",
//   {
//     opacity: "1",
//   },
//   "sct-3"
// );
// tl4.to(
//   ".c-two",
//   {
//     opacity: "0",
//   },
//   "sct-3"
// );
// tl4.to(
//   ".c-one",
//   {
//     marginTop: "-210%",
//   },
//   "sct-3"
// );
// tl4.to(
//   ".c-one",
//   {
//     marginTop: "-400%",
//   },
//   "sct-4"
// );
// tl4.to(
//   ".c-three",
//   {
//     opacity: "0",
//   },
//   "sct-4"
// );
// tl4.to(
//   ".cir-part-4",
//   {
//     marginLeft: "100%",
//     rotate: 360,
//   },
//   "sct-4"
// );

document.addEventListener("DOMContentLoaded", function () {
  const capItems = document.querySelectorAll(".cap_item");
  const cap = document.querySelector(".cap");
  const overlay = document.querySelector(".overlay");
  const prevElements = document.querySelectorAll(".prev");

  overlay.style.top = "0%";
  overlay.style.left = "13.25%";
  document.querySelector("#prev-2").classList.add("active");

  function removeActiveClass() {
    prevElements.forEach(function (prev) {
      prev.classList.remove("active");
    });
  }
  capItems.forEach((item, index) => {
    item.addEventListener("mouseover", function () {
      removeActiveClass();
      const activePrev = document.querySelector("#prev-1" + (index + 1));
      if (activePrev) {
        activePrev.classList.add("active");
      }
      cap.classList.add("hovered");
      switch (index) {
        case 0:
          overlay.style.top = "50%";
          overlay.style.left = "50%";
          cap.className = "cap bg_color_orange hovered";
          break;
        case 1:
          overlay.style.top = "0%";
          overlay.style.left = "13.25%";
          cap.className = "cap bg_color_blue hovered";
          break;
        case 2:
          overlay.style.top = "-50%";
          overlay.style.left = "-23.25%";
          cap.className = "cap bg_color_green hovered";
          break;
      }
    });
    item.addEventListener("mouseout", function () {
      cap.classList.remove("hovered");
      cap.className = "cap";
      overlay.style.top = "0%";
      overlaystyle.left = "13.25%";
      removeActiveClass();
      document.querySelector("#prev-2").classList.add("active");
    });
  });
});

const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}
