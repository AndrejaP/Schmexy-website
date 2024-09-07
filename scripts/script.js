/*to animate 2 sections in the same way-slide up into viewport */

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Create a perpetual "heartbeat" animation
gsap.to(".hero-image", {
    scale: 1.03,         // Scale up to 1.1x the original size
    duration: 0.5,      // Animation duration (half a second per beat)
    ease: "power1.inOut", // Ease in and out for smooth scaling
    yoyo: true,         // Reverse the animation after each cycle
    repeat: -1          // Infinite repetition
  });
  

// Target all elements with the correct class selector
gsap.utils.toArray(".w-layout-blockcontainer.container.animated.w-container").forEach((element) => {
  gsap.from(element, {
    duration: 1,
    y: 100,
    opacity: 0,
    ease: "power2.out",
    scrollTrigger: {
      trigger: element,  // Trigger the animation for each individual element
      start: "top 80%",  // Start when the element's top reaches 80% of the viewport
      toggleActions: "play none none none"  // Only play once when in view
    }
  });
});



