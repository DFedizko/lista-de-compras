const barra = document.getElementById('barra-comprado');
const titulo = document.getElementById('titulo-comprado');

export function verificarListaComprados(lista) {
    if (lista.childElementCount === 0) {
        barra.style.display = 'none';
        titulo.style.display = 'none';
    } else {
        barra.style.display = 'block';
        titulo.style.display = 'block';
    }
}