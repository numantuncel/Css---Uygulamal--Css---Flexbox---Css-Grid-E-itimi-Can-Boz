const navBtn = document.querySelector('.navBtn');
const sideBar = document.querySelector('#sideBar');
const closeBtn = document.querySelector('.closeBtn');
const sideBarLinks = document.querySelector('.sideBarLinks');
const nav = document.querySelector('.nav');
navBtn.addEventListener('click', () => {
    sideBar.classList.add('showSideBar');
    nav.classList.add('closeNavBar')
});
closeBtn.addEventListener('click', () => {
    sideBar.classList.remove('showSideBar');
    nav.classList.remove('closeNavBar')
});
sideBarLinks.addEventListener('click', () => {
    sideBar.classList.remove('showSideBar');
    nav.classList.remove('closeNavBar')
});