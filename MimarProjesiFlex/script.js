const hamburger=document.querySelector('.hamburger');/*hamburgere tıkladığımda tetiklensin */
const bar1=document.querySelector('.bar1');
const bar2=document.querySelector('.bar2');
const bar3=document.querySelector('.bar3');
const mobilNav=document.querySelector('.mobilNav')

hamburger.addEventListener('click',()=>{
    bar1.classList.toggle('animationBar1');
    bar2.classList.toggle('animationBar2');
    bar3.classList.toggle('animationBar3');
    mobilNav.classList.toggle('openSideBar')
});