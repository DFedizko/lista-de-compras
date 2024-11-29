import { criarData } from "./criarData.js";

export const editarItem = (elemento) => {
    let novoItem = prompt('Digite o novo nome do item:');

    if (novoItem !== null && novoItem.trim() !== '') {
        const itemTextoAtualizado = elemento.querySelector('#item-titulo');
        itemTextoAtualizado.textContent = novoItem;

        const estavaComprado = elemento.querySelector('.input-checkbox').checked;

        const textoData = document.querySelector('.texto-data');
        const itemData = criarData();
        textoData.textContent = itemData.innerText;
    
        if (estavaComprado) {
            elemento.querySelector('.input-checkbox').checked = true;
            elemento.querySelector('.checkbox-customizado').classList.add('checked');
            itemTextoAtualizado.style.textDecoration = 'line-through';
        }
    }
}