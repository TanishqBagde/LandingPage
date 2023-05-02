const btn = document.querySelector('.hamburger')
const nav = document.querySelector('.nav_mobile')
btn.addEventListener('mousedown', ()=>{
    if(btn.classList.contains('open')){
        btn.classList.remove('open');
        btn.classList.add('close')
        btn.src="images/icon-close.svg"
        nav.style.insetInlineStart="-2rem";
    }else if(btn.classList.contains('close')){
        btn.classList.remove('close')
        btn.classList.add('open');
        btn.src="images/icon-hamburger.svg"
        nav.style.insetInlineStart="160%";
    };
})