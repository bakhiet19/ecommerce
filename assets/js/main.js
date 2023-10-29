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








const a = ["./assets/img/products/f5.jpg" , "./assets/img/products/f6.jpg" , "./assets/img/products/f7.jpg" , "./assets/img/products/f8.jpg" , "./assets/img/products/f3.jpg" , "./assets/img/products/f1.jpg"];
let imgs_slider = document.getElementById('img');
let left = document.querySelector('#left');
let right = document.querySelector('#right');
var count = 0;




right.addEventListener('click' , function(e){
    if(count == a.length - 1){
        count = 0
        imgs_slider.setAttribute('src' , a[count])
    }
    else{
     ++ count;
     imgs_slider.setAttribute('src' , a[count])
    }
 })





left.addEventListener('click' , function(e){
   if(count == 0){
    count = a.length -1
    imgs_slider.setAttribute('src' , a[count])
   }
   else{
    -- count;
    imgs_slider.setAttribute('src' , a[count])
   }
})






// let one = document.getElementById('one');
// let two = document.getElementById('two');
// let three = document.getElementById('three');
// let four = document.getElementById('four');


// one.addEventListener('click' , function(){
//     imgs_slider.setAttribute('src' , a[0])
// })

// two.addEventListener('click' , function(){
//     imgs_slider.setAttribute('src' , a[1])
// })


// three.addEventListener('click' , function(){
//     imgs_slider.setAttribute('src' , a[2])
// })

// four.addEventListener('click' , function(){
//     imgs_slider.setAttribute('src' , a[3])
// })