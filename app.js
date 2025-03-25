const menuOPn = document.querySelector('.menu')
const menuExt = document.querySelector('#menu-exit')
const nav = document.querySelector('.nav-list')

menuOPn.addEventListener('click', () => {
  nav.style.display = 'block'
})
menuExt.addEventListener('click', () => (nav.style.display = 'none'))
