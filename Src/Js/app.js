/* const divAnim = () => {
    const div = document.getElementsByTagName('<div>')
    const mainText = document.getElementById('mainText')

    div.addEventListener('mouseover', () => {
        mainText.style.width = 100 + '%'
        console.log('prout');
    })
}

divAnim()
 */

const backToTop = () => {
    const mouse = document.querySelector('.mouse')
    window.addEventListener("scroll", (event) => {
        let scrollY = this.scrollY;
        if (scrollY >= 150) {
            mouse.style.display = "flex"
        } else {
            mouse.style.display = "none"
        }
    });

    mouse.addEventListener("click", () => {
        document.location.href="#top"; 
    })
}

backToTop()