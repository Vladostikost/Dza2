let red = document.querySelector('.red')
let yellow = document.querySelector('.yellow')
let green = document.querySelector('.green')
let reset = document.querySelector('.reset')
let fonk = document.querySelector('.fonk')

const qwe = setInterval(()=>{

    red.addEventListener('click', ()=>{
        red.disabled = true;
        yellow.disabled = false;
        green.disabled = false;
        let fos = setTimeout(()=>{
            fonk.style.background = 'red';
            console.log('red');
        }, 1015)
        reset.addEventListener('click', ()=>{
            fonk.style.background = 'white';
            console.log('cleared');
            clearInterval(fos);
            red.disabled = false;   
        })
    })

    yellow.addEventListener('click', ()=>{
        yellow.disabled = true;
        red.disabled = false;
        green.disabled = false;
        let fod = setTimeout(()=>{
            fonk.style.background = 'yellow'
            console.log('yellow');
        }, 1015)
        reset.addEventListener('click', ()=>{
            fonk.style.background = 'white';
            console.log('cleared');
            clearInterval(fod);
            yellow.disabled = false;   ;
        })
    })

    green.addEventListener('click', ()=>{
        green.disabled = true;
        yellow.disabled = false;
        red.disabled = false;
        let fof = setTimeout(()=>{
            fonk.style.background = 'green';
            console.log('green');
        }, 1015)
        reset.addEventListener('click', ()=>{
            fonk.style.background = 'white';
            console.log('cleared');
            clearInterval(fof);
            green.disabled = false;   
        })
    })

})



    