
document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".scroll-item");
    let index = 0;
  
    function switchItems() {
      const currentItem = items[index];
      const nextIndex = (index + 1) % items.length;
      const nextItem = items[nextIndex];
  
      currentItem.classList.remove("active");
      currentItem.classList.add("exit");
  
      setTimeout(() => {
        currentItem.classList.remove("exit");
        nextItem.classList.add("active");
      }, 500);
  
      index = nextIndex;
    }
  
    items[index].classList.add("active");
    setInterval(switchItems, 2000);
  });
const heroAction = document.querySelector(".hero-action");
heroAction.addEventListener("mouseenter", function(e){
    document.querySelector('.dawg').animate(
        [
            { transform: "translate(0, 35%)" },
            { transform: "translate(0, -5%)" },
        ],
        {
            duration: 300,
            iterations: 1,
            easing: "ease-in",
            fill: "forwards"
        }
    );
})
heroAction.addEventListener("mouseleave", function(e){
    document.querySelector('.dawg').animate(
        [
            { transform: "translate(0, -5%)" },
            { transform: "translate(0, 35%)" },
        ],
        {
            duration: 300,
            iterations: 1,
            easing: "ease-out",
            fill: "forwards"
        }
    );
})