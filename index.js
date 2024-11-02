const scrollContainer = document.querySelector('.scroll-container')
scrollContainer.animate(
    [
      // keyframes
      { transform: "translateY(0px)" },
      { transform: "translateY(-36px)" },
    ],
    {
      // timing options
      duration: 1000,
      iterations: Infinity,
      fill: "both",
      easing: "ease-out"
    },
  );