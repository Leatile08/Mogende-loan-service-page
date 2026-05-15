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

       
           toast.style.visibility = "visible";
           toast.style.opacity = "1";

          setTimeout(() => {
          toast.style.opacity = "0";
          setTimeout(() => { toast.style.visibility = "hidden"; }, 500);
          }, 3000);

          form.reset(); // optional: clear form
          });
          });

      function activate(element, name, role) {

     

       document.querySelectorAll('.card').forEach(card => {
       card.classList.remove('active');
       });


      element.classList.add('active');

   
        document.getElementById('name').innerText = name;
        document.getElementById('role').innerText = role; 
      }

      document.addEventListener('DOMContentLoaded', () => {
        const navLinks = document.querySelectorAll('.navbar__links');
        // Get the current filename and decode things like %20 back into spaces
        // We also lowercase everything to prevent "About.html" vs "about.html" issues
        const currentPath = decodeURI(window.location.pathname).toLowerCase();
        console.log("System Check: You are currently on ->", currentPath);
        navLinks.forEach(link => {
        // Get the link's destination path
        const linkPath = decodeURI(link.pathname).toLowerCase();
        // Check if the current URL ends with this link's path
        // This handles "index.html" vs "/" automatically
        if (currentPath.endsWith(linkPath) || (currentPath === "/" && linkPath.endsWith("index.html"))) {
        console.log(`MATCH! Highlighting: ${link.textContent}`);
        link.classList.add('is-active');
        } else {
        link.classList.remove('is-active');
       }
   });
});