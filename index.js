
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


document.addEventListener('DOMContentLoaded', () => {
  const sectionItems = document.querySelectorAll('.sections-item');
  const questionContainers = document.querySelectorAll('.questions');
  const questionItems = document.querySelectorAll('.questions-item');

  // Switch between categories
  sectionItems.forEach((item, index) => {
      item.addEventListener('click', () => {
          // Map button text to data-category values
          const categories = ['btc-dawgs', 'btc-chain'];
          const selectedCategory = categories[index]; // Map based on index order

          // Add 'active' class to the clicked section and remove from others
          sectionItems.forEach(section => section.classList.remove('active'));
          item.classList.add('active');

          // Show the selected category and hide others
          questionContainers.forEach(container => {
              if (container.getAttribute('data-category') === selectedCategory) {
                  container.style.display = 'block'; // Show the matching category
              } else {
                  container.style.display = 'none'; // Hide non-matching categories
              }
          });

          // Reset all active answers when switching categories
          questionItems.forEach(item => {
              item.classList.remove('active');
              const answer = item.querySelector('.questions-answer');
              if (answer) answer.style.maxHeight = null; // Collapse all answers
              const arrow = item.querySelector('.arrow');
              if (arrow) arrow.style.transform = 'rotate(0deg)';
          });
      });
  });

  // Toggle answers within a category
  questionItems.forEach(item => {
      const title = item.querySelector('.questions-item-title');

      title.addEventListener('click', () => {
          // Close all other answers in the same category
          const currentContainer = item.closest('.questions');
          const itemsInCategory = currentContainer.querySelectorAll('.questions-item');

          itemsInCategory.forEach(otherItem => {
              if (otherItem !== item) {
                  otherItem.classList.remove('active');
                  const otherAnswer = otherItem.querySelector('.questions-answer');
                  if (otherAnswer) otherAnswer.style.maxHeight = null; // Collapse the answer
                  const otherArrow = otherItem.querySelector('.arrow');
                  if (otherArrow) otherArrow.style.transform = 'rotate(0deg)';
              }
          });

          // Toggle the clicked item's answer
          const answer = item.querySelector('.questions-answer');
          const arrow = item.querySelector('.arrow');
          const isActive = item.classList.contains('active');

          if (isActive) {
              item.classList.remove('active');
              answer.style.maxHeight = null; // Collapse the answer
              if (arrow) arrow.style.transform = 'rotate(0deg)';
          } else {
              item.classList.add('active');
              answer.style.maxHeight = answer.scrollHeight + 'px'; // Expand the answer
              if (arrow) arrow.style.transform = 'rotate(180deg)';
          }
      });
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const backToTopButton = document.querySelector('.back-to-top');
  // Smooth scroll to the top when clicked
  backToTopButton.addEventListener('click', () => {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });
});

