const $ = (selector) => document.querySelector(selector);

let airplaneContainer = $(".airplane-container");
lax.init();
lax.addDriver("scrollY", () => window.scrollY);
lax.addElements(".airplane-container", {
  scrollY: {
    translateX: [
      ["elInY", "elCenterY", "elOutY"],
      [500, "(-1 * screenWidth/2) + 300", "-1 * screenWidth + 300"],
    ],
  },
});

// const $ = (selector) => document.querySelector(selector);

// let airplaneContainer = $(".airplane-container");
// let bgContainer = $(".bg-container");
// lax.init();
// lax.addDriver("scrollY", () => window.scrollY);
// lax.addElements(".airplane-container", {
//   scrollY: {
//     translateX: [
//       ["elInY", "elCenterY", "elOutY"],
//       [200, "(-1 * screenWidth/2) + 300", "-1 * screenWidth + 300"],
//     ],
//   },
// });
// lax.addElements(".bg-container", {
//   scrollY: {
//     position: [
//       [0, "elCenterY"],
//       ["static", "fixed"],
//     ],
//   },
// });

// // Stop airplane animation after it reaches the end of the screen
// let airplaneAnimationDone = false;
// airplaneContainer.addEventListener("animationend", () => {
//   airplaneAnimationDone = true;
// });

// // Scroll the background until the airplane animation starts
// let bgScrollDone = false;
// window.addEventListener("scroll", () => {
//   if (!airplaneAnimationDone && !bgScrollDone && window.scrollY > 200) {
//     bgContainer.style.position = "fixed";
//     bgContainer.style.top = "0";
//     bgScrollDone = true;
//   }
//   if (airplaneAnimationDone && bgScrollDone) {
//     bgContainer.style.position = "static";
//   }
// });
