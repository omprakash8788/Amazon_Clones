const imgs= document.querySelectorAll(".header-slider ul img")

const prv_btn= document.querySelector(".control_prev")
const nxt_btn= document.querySelector(".control_next")

let n=0;

function changeSlide(){
    for(let i=0; i<imgs.length; i++){
        imgs[i].style.display='none';
    }

    imgs[n].style.display='block';


}
changeSlide();


prv_btn.addEventListener('click', (e)=>{
    if(n>0){
        n--
    }
    else{
        n=imgs.length-1;
    }
    changeSlide()

})

nxt_btn.addEventListener('click', (e)=>{
    if(n< imgs.length-1){
        n++
    }
    else{
        n=0;
    }
    changeSlide()

})


// products scroll
const scrollContainer = document.querySelectorAll('.products');


for(const item of scrollContainer){
    item.addEventListener('wheel', (event)=>{
        event.preventDefault()
        item.scrollLeft+=event.deltaY;
        

    })
}




