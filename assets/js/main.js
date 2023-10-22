const bars = document.querySelector('.bars');
const nav = document.querySelector('.nav')
const close = document.querySelector('.close')
const img = document.querySelector('.single-pro-image img')
const imgs = document.querySelectorAll('.small-img-col img');

imgs.forEach(function(e){
    e.addEventListener('click' , function(){
        img.setAttribute('src' , e.src)
    })
})




bars.addEventListener('click' , function(){
    nav.style.right = 0;
})

close.addEventListener('click' , function(){
    nav.style.right = '-300px';
})

