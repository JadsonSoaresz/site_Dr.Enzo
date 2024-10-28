// Seleciona o botão que abre o menu, usando o ID 'btn-menu'
let btnMenu = document.getElementById('btn-menu')

// Seleciona o menu mobile, usando o ID 'menu-mobile'
let menu = document.getElementById('menu-mobile')

// Seleciona a sobreposição (overlay), que aparece por trás do menu, usando o ID 'overlay-menu'
let overlay = document.getElementById('overlay-menu')

// Adiciona um evento de clique ao botão de menu
// Quando o botão for clicado, ele adiciona a classe 'abrir-menu' ao menu
// Essa classe faz o menu aparecer (abrir) ao usuário
btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu') // Adiciona a classe 'abrir-menu' ao menu
})

// Adiciona um evento de clique ao menu
// Quando o usuário clica no próprio menu, ele remove a classe 'abrir-menu'
// Isso faz o menu fechar
menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu') // Remove a classe 'abrir-menu', fechando o menu
})

// Adiciona um evento de clique à sobreposição (overlay)
// Quando o usuário clica fora do menu, na área do overlay, o menu também será fechado
overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu') // Remove a classe 'abrir-menu', fechando o menu
})
