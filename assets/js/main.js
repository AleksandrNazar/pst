// Открытие мобильного меню
const pageBody = document.querySelector('body');
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('mobile-nav-btn').addEventListener('click', function() {
        document.querySelector('header').classList.toggle('open')
        document.querySelector('body').classList.toggle('scroll-block')
    })
})