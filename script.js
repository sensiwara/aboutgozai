const cards = document.querySelectorAll('.card');

function showCard(cardNumber) {
  cards.forEach((card, index) => {
      if (index + 1 === cardNumber) {
          card.style.display = "flex";
          if (cardNumber === 1) {
              // Если отображается карточка 1, показываем сообщение "Привет!" с плавным эффектом
              const helloMessage = card.querySelector('.hello-message');
              helloMessage.style.display = "block";
              setTimeout(() => {
                  helloMessage.style.opacity = 1;
              }, 100); // Задержка перед плавным появлением сообщения
              setTimeout(() => {
                helloMessage.style.opacity = 0;
              }, 1500); // Задержка перед плавным появлением сообщения
              const headermessage = card.querySelector('.headersite');
              headermessage.style.display = "block";
              setTimeout(() => {
                headermessage.style.opacity = 1;
            }, 2000); // Задержка перед плавным появлением сообщения
            }
      } else {
          card.style.display = "none";
      }
  });
}




document.addEventListener("DOMContentLoaded", function () {
  showCard(1);
});

