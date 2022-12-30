// ============= SHOW MENU ================
const navMenu = document.getElementById('nav_menu'),
      navToggle = document.getElementById('nav_toggle'),
      navClose = document.getElementById('nav_close')

// ============== MENU SHOW ===============
// Validate if constant exist
if(navToggle){
  navToggle.addEventListener('click', () =>{
    navMenu.classList.add('show_nav')
  });
}

// ============== HIDDEN MENU ====================
// Validate if constant exist
if(navClose){
  navClose.addEventListener('click', () =>{
    navMenu.classList.remove('show_nav')
  });
}

/*=============== REMOVE MENU AFTER LINK CLICK ===============*/
const navLink = document.querySelectorAll('.nav_link')

const linkAction = () =>{
  const navMenu = document.getElementById('nav_menu')
  navMenu.classList.remove('show_nav')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SWIPER PROJECTS ===============*/
      let swiperProjects = new Swiper(".project_container", {
        loop:true,
        spaceBetween: 24,

        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
        },
        breakpoints: {
          1200: {
            slidesPerView: 1,
            spaceBetween: -56,
          },
        },
      });

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactName = document.getElementById('contact-name'),
      contactEmail = document.getElementById('contact-email'),
      contactProject = document.getElementById('contact-project'),
      contactAlert = document.getElementById('contact-alert')

const sendEmail = (e) =>{
    e.preventDefault()

      //serviceID -templateID -#form -publicKey
    emailjs.sendForm('service_9u8h0vh', 'template_bs7x9wn', '#contact-form', 'SZ6JqU7U9W8hUWaci')
        .then(() =>{
           //Show message and add color
           contactAlert.classList.add('color-blue')
           contactAlert.textContent = 'Message sent'
           console.log('SUCCESS!', response.status, response.text);

           //Remove messsage after a few seconds
            setTimeout(() =>{
              contactAlert.textContent = ''
            }, 5000)
          }, (error) =>{
              console.log('OOPS! SOMETHING WENT WRONG......', error)
          })

              //To close the input field;
              contactName.value = ''
              contactEmail.value = ''
              contactProject.value = ''

        }
    contactForm.addEventListener(onclick='submit', sendEmail)

/*======== ======= DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'


//Previously selected
const selectedTheme = localStorage.getItem('selected=theme')
const selectedIcon = localStorage.getItem('selected-icon')

//Validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

//Validate selected
if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

//Manual activation / deactivation
themeButton.addEventListener('click', () =>{
  //Add or remove the dark theme
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  //Saving choosen theme
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-theme', getCurrentIcon())
})

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
  const header = document.getElementById('header')

  this.scrollY >= 50 ? header.classList.add('.bg-header')
                     : header.classList.remove('.bg-header')
}
window.addEventListener('scroll', scrollHeader)
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  delay: 400,
  origin: 'top',
  duration: 2500,
  distance: '1px',
  reset: true /*Animation repeat*/
})

sr.reveal('.home_container, .project_container .footer_container')
sr.reveal('.home_title div', {delay: 600, origin: 'bottom', interval: 100})
sr.reveal('.skills_content:nth-child(1), .contact_content:nth-child(1)', {origin: 'left'})
sr.reveal('.skills_content:nth-child(2), .contact_content:nth-child(2)', {origin: 'right'})
sr.reveal('.services_card', {interval: 100})
