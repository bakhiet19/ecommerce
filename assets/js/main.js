const bars = document.querySelector('.bars');
const nav = document.querySelector('.nav')
const close = document.querySelector('.close')



bars.addEventListener('click' , function(){
    nav.style.right = 0;
})

close.addEventListener('click' , function(){
    nav.style.right = '-300px';
})