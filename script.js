const burger=document.querySelector('.burger');
const navList=document.querySelector('.nav-list');
const navbar=document.querySelector('.navbar');

burger.addEventListener('click', () =>{
    navbar.classList.toggle('h-nav');
    navList.classList.toggle('v-class');
})


