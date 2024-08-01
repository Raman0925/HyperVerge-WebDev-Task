const input = document.querySelector('input');
input.addEventListener("keyDown",(event)=>{
    if(event.key ==='Enter'){
        console.log(event.target.value);
    }

});