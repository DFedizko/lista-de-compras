export function criarData() {
    const itemData = document.createElement('p');
    itemData.innerText = `${new Date().toLocaleDateString('pt-br', {weekday: 'long'})}(${new Date().toLocaleDateString()}) às ${new Date().toLocaleTimeString('pt-br', {hour: 'numeric', minute: 'numeric'})}`;

    return itemData;
}