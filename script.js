const panels=document.querySelectorAll('.panel');
panels.forEach(panel=>{
   
   panel.addEventListener('click',()=>{
   
    removeActiveClasses();
    panel.classList.add('active');
   })
})
function removeActiveClasses(){
    panels.forEach(panel=>{
        console.log(panel);
        panel.classList.remove('active');
    })
}