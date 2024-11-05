
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

const carousel = document.querySelector('.meet-cards-container');

let isDragging = false;
let startPosition = 0;
let currentTranslate = 0;
let prevTranslate = 0;
const dragLimit = -carousel.clientWidth; // Limit to -600px to the right

// Event listeners for mouse events
carousel.addEventListener('mousedown', startDrag);
carousel.addEventListener('mousemove', drag);
carousel.addEventListener('mouseup', endDrag);
carousel.addEventListener('mouseleave', endDrag);

// Event listeners for touch events
carousel.addEventListener('touchstart', startDrag);
carousel.addEventListener('touchmove', drag);
carousel.addEventListener('touchend', endDrag);

// Start drag function
function startDrag(e) {
  isDragging = true;
  startPosition = getPositionX(e);
  carousel.style.transition = 'none'; // Remove transition for smooth dragging
  carousel.style.cursor = 'grabbing';
}

// Drag function
function drag(e) {
  if (!isDragging) return;

  const currentPosition = getPositionX(e);
  let dragDistance = currentPosition - startPosition;
  currentTranslate = prevTranslate + dragDistance;

  // Enforce drag limits
  if (currentTranslate > 0) {
    currentTranslate = 0; // Prevent dragging beyond the left edge
  } else if (currentTranslate < dragLimit) {
    currentTranslate = dragLimit; // Prevent dragging beyond 600px to the right
  }

  carousel.style.transform = `translateX(${currentTranslate}px)`;
}

// End drag function
function endDrag() {
  if (!isDragging) return;
  isDragging = false;

  // Set prevTranslate for the next drag
  prevTranslate = currentTranslate;
  
  // Smooth transition when ending drag
  carousel.style.cursor = 'grab';
}

// Helper function to get the position for both touch and mouse events
function getPositionX(e) {
  return e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
}