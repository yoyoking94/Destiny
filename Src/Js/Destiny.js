const divAnim = () => {
    const div = document.getElementsByTagName('<div>')
    const mainText = document.getElementById('mainText')

    div.addEventListener('mouseover', () => {
        mainText.style.width = 100 + '%'
        console.log('prout');
    })
}


//1100

divAnim()