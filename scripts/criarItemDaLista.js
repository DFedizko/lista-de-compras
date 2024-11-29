import { criarData } from "./criarData.js";
import { editarItem } from "./editarItem.js";
import { excluirItem } from "./excluirItem.js";
import { verificarListaComprados } from "./verificarListaComprados.js";

const listaComprados = document.getElementById('lista-comprados');
let contador = 0;

export function criarItemDaLista(item) {
    const itemDaLista = document.createElement('li');
    const containerItemLista = document.createElement('div');
    containerItemLista.classList.add('lista-item-container');
    itemDaLista.appendChild(containerItemLista);

    const containerNomeDoItem = document.createElement('div');

    const containerCheckBox = document.createElement('div');
    containerCheckBox.classList.add('container-checkbox');

    const checkboxInput = document.createElement('input');
    checkboxInput.type = 'checkbox';
    checkboxInput.classList.add('input-checkbox');
    checkboxInput.id = 'checkbox-' + contador++;
    
    const checkboxLabel = document.createElement('label');
    checkboxInput.setAttribute('for', checkboxInput.id);
    checkboxLabel.addEventListener('click', function(evento) {
        const checkboxInput = evento.currentTarget.querySelector('.input-checkbox');
        const checkboxCustomizado = evento.currentTarget.querySelector('.checkbox-customizado');
        const itemTitulo = evento.currentTarget.closest('li').querySelector('#item-titulo');

        if (checkboxInput.checked) {
            checkboxCustomizado.classList.add('checked');
            itemTitulo.style.textDecoration = 'line-through';
            listaComprados.appendChild(itemDaLista);
        } else {
            checkboxCustomizado.classList.remove('checked');
            itemTitulo.style.textDecoration = 'none';
            lista.appendChild(itemDaLista);
        }

        verificarListaComprados(listaComprados);
    })

    const checkboxCustomizado = document.createElement('div');
    checkboxCustomizado.classList.add('checkbox-customizado');

    checkboxLabel.appendChild(checkboxInput);
    checkboxLabel.appendChild(checkboxCustomizado);

    containerCheckBox.appendChild(checkboxLabel);
    containerNomeDoItem.appendChild(containerCheckBox);

    const nomeDoItem = document.createElement('p');
    nomeDoItem.id = 'item-titulo';
    nomeDoItem.innerText = item.value; 
    containerCheckBox.appendChild(nomeDoItem);

    const containerBotoes = document.createElement('div');
    const botaoRemover = document.createElement('button');
    botaoRemover.classList.add('item-lista-button');

    const imagemRemover = document.createElement('img');
    imagemRemover.src = './img/delete.svg';
    imagemRemover.alt = 'Deletar';

    botaoRemover.addEventListener('click', function() {
        excluirItem(itemDaLista);
    });

    const botaoEditar = document.createElement('button');
    botaoEditar.classList.add('item-lista-button');

    const imagemEditar = document.createElement('img');
    imagemEditar.src = './img/edit.svg';
    imagemEditar.alt = 'Editar';

    botaoEditar.addEventListener('click', function() {
        editarItem(itemDaLista);
    });

    botaoRemover.appendChild(imagemRemover);
    botaoEditar.appendChild(imagemEditar);

    containerBotoes.appendChild(botaoRemover);
    containerBotoes.appendChild(botaoEditar);

    containerItemLista.appendChild(containerNomeDoItem);
    containerItemLista.appendChild(containerBotoes);

    const itemData = criarData();

    itemData.classList.add('texto-data');

    itemDaLista.appendChild(containerItemLista);
    itemDaLista.appendChild(itemData);

    return itemDaLista;
}