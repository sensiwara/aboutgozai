const cards = document.querySelectorAll('.card');


function showCard(cardNumber) {
  cards.forEach((card, index) => {
      if (index + 1 === cardNumber) {
          card.style.display = "flex";
          if (cardNumber === 1) {
              const helloMessage = card.querySelector('.hello-message');
              helloMessage.style.display = "block";
              setTimeout(() => {
                  helloMessage.style.opacity = 1;
              }, 100); 
              setTimeout(() => {
                helloMessage.style.opacity = 0;
              }, 1500); 
              const headermessage = card.querySelector('.headersite');
              headermessage.style.display = "block";
              setTimeout(() => {
                headermessage.style.opacity = 1;
            }, 2000); 
            }
      } else {
          card.style.display = "none";
      }
  });
}




document.addEventListener("DOMContentLoaded", function () {
  showCard(1);
});

