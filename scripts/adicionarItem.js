import { criarItemDaLista } from "./criarItemDaLista.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

const item = document.getElementById('input-item');
const lista = document.getElementById('lista');

export function adicionarItem(evento) {
    evento.preventDefault();

    if (item.value.trim() === '') {
        return alert('Por favor, preencha o campo!');
    }

    const itemDaLista = criarItemDaLista(item);
    lista.appendChild(itemDaLista);
    verificarListaVazia(lista);
    item.value = '';
}