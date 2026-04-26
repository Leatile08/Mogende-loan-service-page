const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function(){
  menu.classList.toggle('is-active')
  menuLinks.classList.toggle('active')
})

 document.addEventListener("DOMContentLoaded", function() {
           const form = document.querySelector("form");
           const toast = document.getElementById("toast");

           form.addEventListener("submit", function(event) {
           event.preventDefault();

           // Show toast (fade in)
           toast.style.visibility = "visible";
           toast.style.opacity = "1";

          // Hide after 3 seconds (fade out)
          setTimeout(() => {
          toast.style.opacity = "0";
          setTimeout(() => { toast.style.visibility = "hidden"; }, 500);
          }, 3000);

          form.reset(); // optional: clear form
          });
          });

      function activate(element, name, role) {

      // Remove active class from all cards

       document.querySelectorAll('.card').forEach(card => {
       card.classList.remove('active');
       });

// Add active class to clicked card
      element.classList.add('active');

     // Update text
        document.getElementById('name').innerText = name;
        document.getElementById('role').innerText = role;

// Update dots (simple logic)
        const cards = Array.from(document.querySelectorAll('.card'));
        const index = cards.indexOf(element);
        document.querySelectorAll('.dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === index);

        });
        }      