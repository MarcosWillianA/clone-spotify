const botaoMenu = document.querySelector('#botao-menu');
const listaMenu = document.querySelector('#lista-menu');
const listaNaoOrdenadaMenu = document.querySelector('#lista-nao-ordenada-menu');
const itensDaListaMenu = ['Premium', 'Ajuda', 'Baixar', 'Inscrever-se', 'Entrar'];
const iconeBarras = document.querySelector('#icone-barras');
const iconeX = document.querySelector('#icone-X');

let menuAberto = false;

botaoMenu.addEventListener('click', () => {
    iconeBarras.classList.toggle('opacity-0');
    iconeX.classList.toggle('opacity-100');
    iconeX.classList.toggle('rotate-90');

    if (menuAberto) {
        esconderMenu();
    } else {
        mostrarMenu();
    }
    menuAberto = !menuAberto;
})

function mostrarMenu() {
    // Limpa os itens existentes antes de recriar
    listaNaoOrdenadaMenu.innerHTML = '';

    itensDaListaMenu.forEach((item, indice) => {
        setTimeout(() => {
            const li = document.createElement('li');
            const aLink = document.createElement('a');
            aLink.href = '#';
            aLink.innerHTML = item;
            aLink.className = 'block text-white hover:text-gray-400 transition'; // Tailwind classes para estilo
            li.appendChild(aLink);
            listaNaoOrdenadaMenu.appendChild(li);
        }, indice * 20); // Cada item aparece com atraso de 100ms
    });
}

function esconderMenu() {
    const itens = Array.from(listaNaoOrdenadaMenu.children);

    itens.forEach((li, indice) => {
        setTimeout(() => {
            setTimeout(() => li.remove(), 300);
        }, indice * 20);
    })
}

