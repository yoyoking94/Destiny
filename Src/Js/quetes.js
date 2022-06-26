const list = document.getElementById('list')
const data = [...document.querySelectorAll('.data')]
//console.log(data[0]);

list.addEventListener('change', (e) => {
    //console.log(e.target.value);
    const aventure = document.getElementById('Aventure')
    const defis = document.getElementById('Defis')
    const epreuve = document.getElementById('Epreuve')
    const assaut = document.getElementById('Assauts')
    const patrouilles = document.getElementById('Patrouilles')
    const banniereDeFer = document.getElementById('BannièreDeFer')
    const secteurOublie = document.getElementById('SecteurOublie')
    const nuitNoir = document.getElementById('NuitNoir')
    const raid = document.getElementById('Raid')

    if (e.target.value === data[0].id) {
        aventure.classList.add('dblock')
        defis.classList.remove('dblock')
        epreuve.classList.remove('dblock')
        assaut.classList.remove('dblock')
        patrouilles.classList.remove('dblock')
        banniereDeFer.classList.remove('dblock')
        secteurOublie.classList.remove('dblock')
        nuitNoir.classList.remove('dblock')
        raid.classList.remove('dblock')
    } else if (e.target.value === data[1].id) {
        aventure.classList.remove('dblock')
        defis.classList.add('dblock')
        epreuve.classList.remove('dblock')
        assaut.classList.remove('dblock')
        patrouilles.classList.remove('dblock')
        banniereDeFer.classList.remove('dblock')
        secteurOublie.classList.remove('dblock')
        nuitNoir.classList.remove('dblock')
        raid.classList.remove('dblock')
    }
    else if (e.target.value === data[2].id) {
        aventure.classList.remove('dblock')
        defis.classList.remove('dblock')
        epreuve.classList.add('dblock')
        assaut.classList.remove('dblock')
        patrouilles.classList.remove('dblock')
        banniereDeFer.classList.remove('dblock')
        secteurOublie.classList.remove('dblock')
        nuitNoir.classList.remove('dblock')
        raid.classList.remove('dblock')
    }
    else if (e.target.value === data[3].id) {
        aventure.classList.remove('dblock')
        defis.classList.remove('dblock')
        epreuve.classList.remove('dblock')
        assaut.classList.add('dblock')
        patrouilles.classList.remove('dblock')
        banniereDeFer.classList.remove('dblock')
        secteurOublie.classList.remove('dblock')
        nuitNoir.classList.remove('dblock')
        raid.classList.remove('dblock')
    }
    else if (e.target.value === data[4].id) {
        aventure.classList.remove('dblock')
        defis.classList.remove('dblock')
        epreuve.classList.remove('dblock')
        assaut.classList.remove('dblock')
        patrouilles.classList.add('dblock')
        banniereDeFer.classList.remove('dblock')
        secteurOublie.classList.remove('dblock')
        nuitNoir.classList.remove('dblock')
        raid.classList.remove('dblock')
    }
    else if (e.target.value === data[5].id) {
        aventure.classList.remove('dblock')
        defis.classList.remove('dblock')
        epreuve.classList.remove('dblock')
        assaut.classList.remove('dblock')
        patrouilles.classList.remove('dblock')
        banniereDeFer.classList.add('dblock')
        secteurOublie.classList.remove('dblock')
        nuitNoir.classList.remove('dblock')
        raid.classList.remove('dblock')
    }
    else if (e.target.value === data[6].id) {
        aventure.classList.remove('dblock')
        defis.classList.remove('dblock')
        epreuve.classList.remove('dblock')
        assaut.classList.remove('dblock')
        patrouilles.classList.remove('dblock')
        banniereDeFer.classList.remove('dblock')
        secteurOublie.classList.add('dblock')
        nuitNoir.classList.remove('dblock')
        raid.classList.remove('dblock')
    }
    else if (e.target.value === data[7].id) {
        aventure.classList.remove('dblock')
        defis.classList.remove('dblock')
        epreuve.classList.remove('dblock')
        assaut.classList.remove('dblock')
        patrouilles.classList.remove('dblock')
        banniereDeFer.classList.remove('dblock')
        secteurOublie.classList.remove('dblock')
        nuitNoir.classList.add('dblock')
        raid.classList.remove('dblock')
    }
    else if (e.target.value === data[8].id) {
        aventure.classList.remove('dblock')
        defis.classList.remove('dblock')
        epreuve.classList.remove('dblock')
        assaut.classList.remove('dblock')
        patrouilles.classList.remove('dblock')
        banniereDeFer.classList.remove('dblock')
        secteurOublie.classList.remove('dblock')
        nuitNoir.classList.remove('dblock')
        raid.classList.add('dblock')
    }
    else {
        aventure.classList.remove('dblock')
        defis.classList.remove('dblock')
        epreuve.classList.remove('dblock')
        assaut.classList.remove('dblock')
        patrouilles.classList.remove('dblock')
        banniereDeFer.classList.remove('dblock')
        secteurOublie.classList.remove('dblock')
        nuitNoir.classList.remove('dblock')
        raid.classList.remove('dblock')
    }

})
