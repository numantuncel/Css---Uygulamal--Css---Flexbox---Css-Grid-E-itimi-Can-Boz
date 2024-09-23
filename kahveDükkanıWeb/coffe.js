const navBtn=document.querySelector('.navBtn');
const navBar=document.querySelector('.navBar');
const navClose=document.querySelector('.navClose');

navBtn.addEventListener('click',()=>{
    navBar.classList.add('showNavBar');
});
navClose.addEventListener('click',()=>{
    navBar.classList.remove('showNavBar');
});

