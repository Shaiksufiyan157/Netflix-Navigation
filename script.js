const openBtn=document.querySelector('.open-btn')
const closeBtn=document.querySelector('.close-btn')
const navs=document.querySelectorAll('.nav')

console.log(navs);


openBtn.addEventListener('click',()=>{

    for(let i=0;i<navs.length;i++){
        navs[i].classList.toggle('visible')
    }
})

closeBtn.addEventListener('click',()=>{
    for(let i=0;i<navs.length;i++){
        navs[i].classList.toggle('visible')
    }
})