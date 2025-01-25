/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
            
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')
// console.log(navLink)

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    // console.log(navMenu.classList.contains("show")) 
    console.log(navMenu.className)
    navMenu.classList.remove('show')
    console.log(navMenu.className)
    
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)
/*==== TOGGLE DARK MODE*/
const toggleDarkMode = () => {
    const body = document.body;
    const header = document.querySelector('.l-header');
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const navLinks = document.querySelectorAll('.nav__link');
    const navLogo = document.querySelector('.nav__logo');
  
    body.classList.toggle('dark');
    header.classList.toggle('dark');
    navLinks.forEach(link => link.classList.toggle('dark'));
    navLogo.classList.toggle('dark');
  
    if (body.classList.contains('dark')) {
      darkModeToggle.innerHTML = '<i class="bx bx-sun"></i>';
      darkModeToggle.style.color = '#f9c81e';
    } else {
      darkModeToggle.innerHTML = '<i class="bx bx-moon"></i>';
      darkModeToggle.style.color = '#000000';
    }
  };
  
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  darkModeToggle.addEventListener('click', toggleDarkMode);
/* ===CLOSE BUTTON FOR PROJECT HERO */
function showFullImage(imageElement) {
    var imageUrl = imageElement.getAttribute("src");
    var overlay = document.createElement("div");
    overlay.className = "overlay";
    
    var closeButton = document.createElement("span");
    closeButton.className = "close-button";
    closeButton.innerHTML = "&times;";
    closeButton.onclick = function () {
      overlay.classList.remove("open");
      setTimeout(function () {
        document.body.removeChild(overlay);
      }, 300);
    };
    
    var img = document.createElement("img");
    img.className = "full-image";
    img.src = imageUrl;
    
    overlay.appendChild(closeButton);
    overlay.appendChild(img);
    document.body.appendChild(overlay);
    
    setTimeout(function () {
      overlay.classList.add("open");
    }, 10);
  }
/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 500,
    delay: 50,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 
