const sol = document.getElementById('sol')
const arbol = document.getElementById('arbol')
const lagartija = document.getElementById('lagartija')
const vaca = document.getElementById('vaca')
const pez = document.getElementById('pez')
const cangrejo = document.getElementById('cangrejo')
const escorpion = document.getElementById('escorpion')
const tortuga = document.getElementById('tortuga')
const vibora = document.getElementById('vibora')

sol.onclick = (e) => {
    document.getElementById('sol-audio').play()
    document.getElementById('sol-texto').classList.add('show')
}

arbol.onclick = (e) => {
    document.getElementById('arbol-audio').play()
    document.getElementById('arbol-texto').classList.add('show')
}

lagartija.onclick = (e) => {
    document.getElementById('lagartija-audio').play()
    document.getElementById('lagartija-texto').classList.add('show')
}

vaca.onclick = (e) => {
    document.getElementById('vaca-audio').play()
    document.getElementById('vaca-texto').classList.add('show')
}

pez.onclick = (e) => {
    document.getElementById('pez-texto').classList.add('show')
    document.getElementById('pez-audio').play()    
}

cangrejo.onclick = (e) => {
    document.getElementById('cangrejo-audio').play()
    document.getElementById('cangrejo-texto').classList.add('show')
}

escorpion.onclick = (e) => {
    document.getElementById('escorpion-audio').play()
    document.getElementById('escorpion-texto').classList.add('show')
}
tortuga.onclick = (e) => {
    document.getElementById('tortuga-audio').play()
    document.getElementById('tortuga-texto').classList.add('show')
}

vibora.onclick = (e) => {
    document.getElementById('vibora-audio').play()
    document.getElementById('vibora-texto').classList.add('show')
}

function ocultarPopup(e) {
    e.children[0].classList.toggle('show')
}

