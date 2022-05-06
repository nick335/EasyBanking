const menu=document.querySelector('#mobile_menu')
const navBar=document.querySelector('.navbar_toggle')
const mobileBg=document.querySelector('.navbar_list')
const mobilelist=document.querySelector('.navbar_list-items')

menu.addEventListener('click', function () {
 navBar.classList.toggle('is-active')
 mobileBg.classList.toggle('is-active')
 mobilelist.classList.toggle('is-active')
})