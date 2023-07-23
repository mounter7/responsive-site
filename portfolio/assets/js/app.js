const section0 = document.querySelector('#section-0')
const items = document.querySelectorAll('#section-1')
const circle = document.querySelector('.circle')

window.addEventListener('scroll', () => {
    section0.classList.toggle('active', window.scrollY > 0)
    circle.classList.toggle('active', window.scrollY > 0)
    items[0].classList.toggle('active', window.scrollY > 0)
    items[1].classList.toggle('active', window.scrollY > 100)
    items[2].classList.toggle('active', window.scrollY > 500)
    //items[3].classList.toggle('active', window.scrollY > 200)
})