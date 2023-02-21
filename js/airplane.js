const $ = (selector) => document.querySelector(selector);

let airplaneContainer = $(".airplane-container");
lax.init();
lax.addDriver("scrollY", () => window.scrollY);
lax.addElements(".airplane-container", {
	scrollY: {
		translateX: [
			["elInY", "elCenterY", "elOutY"],
			[200, "(-1 * screenWidth/2) + 300", "-1 * screenWidth + 300"],
		],
	},
});
