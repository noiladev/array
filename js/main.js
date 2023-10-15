var arr2 = ['olma', 'anor',  ]
console.log(arr2);
var inpMeva = document.querySelector('.meva1')
var inpJoy = document.querySelector('.joy')
var title1 = document.querySelector('.title1')
var title2 = document.querySelector('.title2')


function add() {
    if  (inpJoy.value === 'boshi')  {
        arr2.unshift(inpMeva.value)
        console.log(arr2);
    } else if (inpJoy.value === 'ohri') {
        arr2.push(inpMeva.value)
        console.log(arr2);
    } else {
        natija = console.log("XATOLIK! mumkin bo'lmagan so'z kiritildi");
        // title1.value  = natija
    }
    console.log(arr2.value);
    title1.textContent = arr2
}

    // function del() {
    //     if(inpMeva.value.length == 0 && inpJoy.value === 'ohriga' ) {
    //         arr2.pop()
    //         console.log(arr2.value);
    //     } else if (inpMeva.value.length ==  '' && inpJoy.value === 'boshi'  ) {
    //         arr2.shift()
    //         console.log(arr2.value);
    //     } else {
    //         console.log("XATOLIK! mumkin bo'lmagan so'z kiritildi"); 
    //     }
    //     console.log(arr2.value);
    // }


var arr = ['olma', 'anor' ]
console.log(arr.value);
var inp = document.querySelector('.meva_2sec')
var begin = document.querySelector('.begin')
var end = document.querySelector('.end')

function fn()  {
    arr.unshift(inp.value)
    console.log(arr);
    title2.textContent = arr
}

function fn2()  {
    arr.push(inp.value)
    title2.textContent = arr
    console.log(arr);
}