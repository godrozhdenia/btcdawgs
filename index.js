
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
function expandAns(num){
  if(document.getElementById('border'+num).style.visibility != "hidden"){
    document.getElementById('answers'+num).style.display = "initial";
    document.getElementById('answers'+num).style.animation = "opacityTr .5s linear forwards";
    document.getElementById('arrow'+num).style.transform= "rotate(180deg)";
    document.getElementById('border'+num).style.visibility= "hidden";
    console.log(document.getElementById('answers'+num).style.visibility)
  }
  else if(document.getElementById('border'+num).style.visibility == "hidden"){
    document.getElementById('answers'+num).style.display= "none";
    document.getElementById('arrow'+num).style.transform= "rotate(0deg)";
    document.getElementById('answers'+num).style.animation = "none";
    console.log(document.getElementById('answers'+num).style.visibility)
    document.getElementById('border'+num).style.visibility= "visible";
  }
}
var section1 = {
  q1: "Who are the BTC Dawgs?",
  a1: "BTC dawgs is an exclusive collection of cute fat dawgs that will live forever on native Bitcoin. Our team is in the pizza lab, crafting hybrid runes/ordinals tech. Details are top secret, but trust us, we’re COOKING something epic! We’re all about community, education, and whipping up tools that make Bitcoin more fun and relevant than ever.",
  q2: "What is dawgtopia?",
  a2: "BTC dawgs is an exclusive collection of cute fat dawgs that will live forever on native Bitcoin. Our team is in the pizza lab, crafting hybrid runes/ordinals tech. Details are top secret, but trust us, we’re COOKING something epic! We’re all about community, education, and whipping up tools that make Bitcoin more fun and relevant than ever.",
  q3: "What are dawgtools?",
  a4: "DAWGTOOLS are BTC ecosystem tools made by us for you and other BTC founders, creating a better future for BTC chain as a whole or do some experimental and fun together."
}

var section2 = {
  q1: "What are Ordinals?",
  a1: "Ordinals are bitcoin native NFTs. Unlike other NFTs that only contains referral to the source art, Ordinal mints images, videos or GIFs directly to a satoshi on the blockchain, and is immutable because of that. They become a permanent part of the Bitcoin blockchain. ",
  q2: "How are ordinals inscribed?",
  a2: "The process of creating an Ordinal involves broadcasting commit and reveal transactions to the Bitcoin network's mempool. This can take some time, but don’t worry, once the your commitment to mint has been broadcasted, the mint will be reserved just for you.",
  q3: "What is a BRC-20 token?",
  a3: "BRC-20 tokens are similar to ERC-20 tokens on Ethereum; They uses a JSON data file to define properties of a collection of fungible tokens on Ordinal Protocol. It’s able to capitalize on Bitcoin Blockchain’s decentralized security, however there isn’t smart contract functionalities for BRC-20s unlike ERC-20.",
  q4: "What’s a Satoshi?",
  a4: "Satoshis, or sats, are the tiniest morsels of Bitcoin, with 100 million sats making up one whole Bitcoin. Some sats hold a special place in history, mined in the early days or tied to significant transactions.  As there are only a limited amount of satoshis on specific transactions that hold significance in history, there are rankings of rarity of these sats, often referred to as rare sats!",
  q5: "What are runes, how is it different from BRC-20?",
  a5: "Runes is a newer protocol on Bitcoin blockchain aiming for greater efficiency compared to BRC-20s by eliminating reliance on meta-protocol and reduce congestion during transaction by utilizing utilize UTXO model. Both BRC-20 and Rune protocols are highly experimental and new innovations for both being created by many talented individuals and groups within the space!"
}
function changeSection(num){
  if(num == 1){
    
  }
}