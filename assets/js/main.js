/*=============== SHOW MENU ===============*/
/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')



/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('header-bg')
        : header.classList.remove('header-bg')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 2500,
})

sr.reveal(`.home__images`, { distance: '120px', delay: 400 })
sr.reveal(`.home__title`, { delay: 1000 })
sr.reveal(`.home__description`, { delay: 1200 })
sr.reveal(`.home__button`, { delay: 1400 })
sr.reveal(`.home__counter`, { delay: 1600 })
sr.reveal(`.home__data div`, { origin: 'right', interval: 100, delay: 1800 })



/*=============== COUNTER BEFORE SHOW ===============*/

// Définir la date cible pour le décompte
var countDownDate = new Date("Augustus 25, 2024 14:39:00").getTime();

// Mettre à jour le décompte toutes les secondes
var x = setInterval(function () {

    // Obtenir la date et l'heure actuelles
    var now = new Date().getTime();

    // Calculer la différence entre la date actuelle et la date cible
    var distance = countDownDate - now;

    // Calculer les jours, heures, minutes et secondes
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Afficher le résultat dans l'élément avec l'id "countdown"
    document.getElementById("day_countdown").innerHTML = days;
    document.getElementById("heures_countdown").innerHTML = hours;
    document.getElementById("minutes_countdown").innerHTML = minutes;
    document.getElementById("seconds_countdown").innerHTML = seconds;

    // Si le décompte est terminé, afficher un message
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("day_countdown").innerHTML = "00";
        document.getElementById("heures_countdown").innerHTML = "00";
        document.getElementById("minutes_countdown").innerHTML = "00";
        document.getElementById("seconds_countdown").innerHTML = "00";
    }
}, 1000);


let question = document.querySelectorAll(".faq__question");

question.forEach(question => {
  question.addEventListener("click", event => {
    const active = document.querySelector(".faq__question.active");
    if(active && active !== question ) {
      active.classList.toggle("active");
      active.nextElementSibling.style.maxHeight = 0;
    }
    question.classList.toggle("active");
    const answer = question.nextElementSibling;
    if(question.classList.contains("active")){
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = 0;
    }
  })
})