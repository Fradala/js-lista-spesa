const listaSpesa = ['pomodori', 'uva', 'acqua', 'pane']

let i = 0
const ulListElement = document.querySelector('#contenitore')

while (i < listaSpesa.length){
    const listaElementi = document.createElement('li');
    listaElementi.classList.add('list-element');
    listaElementi.append(listaElementi[i])
    ulListElement.appendChild(listaElementi)
    i ++
}