
const navbarnav = document.querySelector('.navbar-nav');
const hamburgerMenu=document.getElementById('hamburger-menu');
hamburgerMenu.onclick=()=>{
    navbarnav.classList.toggle("aktif");
}
document.addEventListener('click',function(e){
    if(!hamburgerMenu.contains(e.target) && !navbarnav.contains(e.target)){
        navbarnav.classList.remove('aktif');
    }
});