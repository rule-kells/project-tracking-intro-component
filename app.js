const navToggle = document.querySelector('.nav__toggle')
const navList = document.querySelector('.nav__list')
const hamburger = document.querySelector('.hamburger')

navToggle.addEventListener('click', e => {
    navToggle.classList.toggle('open')
    navList.classList.toggle('nav__list--active')
})