const teclas = document.querySelectorAll('.tecla')
const sons = document.querySelectorAll('.som');


for (let i = 0; i < teclas.length; i++) {
    teclas[i].onclick = function () {
        tocaSom(i)
    }

        teclas[i].onkeydown = function(evento) {
            console.log(evento);
            if (evento.code === 'Space' || evento.code === 'Enter')
                teclas[i].classList.add('ativa');
        }

    teclas[i].onkeyup = function() {
        teclas[i].classList.remove('ativa');
    }
}

function  tocaSom (i) {
    sons[i].play();
}
