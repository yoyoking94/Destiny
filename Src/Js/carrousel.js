/* Carroussel Destiny  */

var slides = document.querySelectorAll('.slide')
var btns = document.querySelectorAll('.btn')
let currentSlide = 1

var manualNav = function (manual) {
    slides.forEach((slide) => {
        slide.classList.remove('active')

        btns.forEach((btn) => {
            btn.classList.remove('active')
        })
    })

    slides[manual].classList.add('active')
    btns[manual].classList.add('active')
    console.log('prout');
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        manualNav(i)
        currentSlide = i
    })
})



/* Carroussel Destiny 2 */

var slides2 = document.querySelectorAll('.slide2')
var btns2 = document.querySelectorAll('.btn2')
let currentSlide2 = 1

var manualNav2 = function (manual) {
    slides2.forEach((slide2) => {
        slide2.classList.remove('active')

        btns2.forEach((btn2) => {
            btn2.classList.remove('active')
        })
    })

    slides2[manual].classList.add('active')
    btns2[manual].classList.add('active')
    console.log('prout');
}

btns2.forEach((btn2, i) => {
    btn2.addEventListener("click", () => {
        manualNav2(i)
        currentSlide2 = i
    })
})