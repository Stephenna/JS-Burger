const navSlide = () =>{
    // Selectors
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    // Toggle Nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

    // Animate Links
       navLinks.forEach((nLink, i) => {
           if(nLink.style.animation){
               nLink.style.animation = "";
           } else {
               nLink.style.animation = `navLinkFade 0.5s ease forwards ${i / 7 + 0.5}s`;
           }
       });
       burger.classList.toggle('toggle')
    });
}

navSlide();