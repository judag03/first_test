const btn = document.getElementById("myButton");
 
const elements = document.querySelectorAll(".someText")


btn.addEventListener(`click`, (e1)=>{
    btn.style.background = `red`;
    elements.forEach(x => {
        x.style.background='#333';
        
    });

})


