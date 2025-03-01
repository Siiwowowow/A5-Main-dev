const colors=['orange','green','blue','purple']
let color=0;
document.getElementById('theme-btn').addEventListener('click',function(){
    if (color===colors.length - 1) {
        color=0;
    }
    else{
        color=color+1
    }
    document.body.style.background=colors[color]
})






