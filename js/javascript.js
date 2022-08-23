let leftInput = document.querySelector('.leftInput');
let rightInput = document.querySelector('.rightInput') ;
let RUBleft=document.querySelector('.RUBleft')
let USDleft=document.querySelector('.USDleft')
let EURleft=document.querySelector('.EURleft')
let GBPleft=document.querySelector('.GBPleft')
let RUBright=document.querySelector('.RUBright')
let USDright=document.querySelector('.USDright')
let EURright=document.querySelector('.EURright')
let GBPright=document.querySelector('.GBPright')
let leftInputDiv= document.querySelector('.leftInputDiv')
let rightInputDiv= document.querySelector('.rightInputDiv')

let rubL = '1 RUB ='; let rubR = 'RUB'
let usdL = '1 USD ='; let usdR = 'USD'
let eurL = '1 EUR ='; let eurR = 'EUR' 
let gbpL = '1 GBP ='; let gbpR = 'GBP'

let solValyuta="RUB" ;
let sagValyuta="USD" ;
if(leftInput.value!=0&&leftInput.value!=''){
fetch('https://api.exchangerate.host/latest?base=RUB&symbols=USD')
.then(res=>res.json())
.then((data=>{
    leftInputDiv.innerText=`${rubL} ${data.rates.USD} ${usdR}`
    rightInputDiv.innerText=`${usdL} ${(1/data.rates.USD).toFixed(3)} ${rubR}`
    rightInput.value=(leftInput.value*data.rates.USD).toFixed(3)
}))}

function changeAUTO (){
    if(solValyuta==='RUB'&&sagValyuta==='USD'&&leftInput.value!=0&&leftInput.value!=''){
    fetch('https://api.exchangerate.host/latest?base=RUB&symbols=USD')
    .then(res=>res.json())
    .then((data=>{
        rightInput.value = (leftInput.value*data.rates.USD).toFixed(3)
        leftInputDiv.innerText=`${rubL} ${data.rates.USD} ${usdR}`
        rightInputDiv.innerText=`${usdL} ${(1/data.rates.USD).toFixed(6)} ${rubR}`
    }))} 
    else if(solValyuta==='RUB'&&sagValyuta==='RUB'&&leftInput.value!=0&&leftInput.value!=''){
        rightInput.value = leftInput.value;
        leftInputDiv.innerText=`1 RUB = 1 RUB`
        rightInputDiv.innerText=`1 RUB = 1 RUB`
   }
    else if(solValyuta==='RUB'&&sagValyuta==='EUR'&&leftInput.value!=0&&leftInput.value!=''){
    fetch('https://api.exchangerate.host/latest?base=RUB&symbols=EUR')
    .then(res=>res.json())
    .then((data=>{
        rightInput.value = (leftInput.value*data.rates.EUR).toFixed(3);
        leftInputDiv.innerText=`${rubL} ${data.rates.EUR} ${eurR}`
        rightInputDiv.innerText=`${eurL} ${(1/data.rates.EUR).toFixed(6)} ${rubR}`
    }))}
    else if(solValyuta==='RUB'&&sagValyuta==='GBP'&&leftInput.value!=0&&leftInput.value!=''){
    fetch('https://api.exchangerate.host/latest?base=RUB&symbols=GBP')
    .then(res=>res.json())
    .then((data=>{
        rightInput.value = (leftInput.value*data.rates.GBP).toFixed(3);
        leftInputDiv.innerText=`${rubL} ${data.rates.GBP} ${gbpR}`
        rightInputDiv.innerText=`${gbpL} ${(1/data.rates.GBP).toFixed(6)} ${rubR}`
    }))}
    else if(solValyuta==='USD'&&sagValyuta==='USD'&&leftInput.value!=0&&leftInput.value!=''){
        rightInput.value = leftInput.value;
        leftInputDiv.innerText=`1 USD = 1 USD`
        rightInputDiv.innerText=`1 USD = 1 USD`
    }
    else if(solValyuta==='USD'&&sagValyuta==='RUB'&&leftInput.value!=0&&leftInput.value!=''){
    fetch('https://api.exchangerate.host/latest?base=USD&symbols=RUB')
    .then(res=>res.json())
    .then((data=>{
        rightInput.value = (leftInput.value*data.rates.RUB).toFixed(3);
        leftInputDiv.innerText=`${usdL} ${data.rates.RUB} ${rubR}`
        rightInputDiv.innerText=`${rubL} ${(1/data.rates.RUB).toFixed(6)} ${usdR}`
    }))}
    else if(solValyuta==='USD'&&sagValyuta==='EUR'&&leftInput.value!=0&&leftInput.value!=''){
    fetch('https://api.exchangerate.host/latest?base=USD&symbols=EUR')
    .then(res=>res.json())
    .then((data=>{
        rightInput.value = (leftInput.value*data.rates.EUR).toFixed(3);
        leftInputDiv.innerText=`${usdL} ${data.rates.EUR} ${eurR}`
        rightInputDiv.innerText=`${eurL} ${(1/data.rates.EUR).toFixed(6)} ${usdR}`
    }))}
    else if(solValyuta==='USD'&&sagValyuta==='GBP'&&leftInput.value!=0&&leftInput.value!=''){
    fetch('https://api.exchangerate.host/latest?base=USD&symbols=GBP')
    .then(res=>res.json())
    .then((data=>{
        rightInput.value = (leftInput.value*data.rates.GBP).toFixed(3);
        leftInputDiv.innerText=`${usdL} ${data.rates.GBP} ${gbpR}`
        rightInputDiv.innerText=`${gbpL} ${(1/data.rates.GBP).toFixed(6)} ${usdR}`
    }))}
    else if(solValyuta==='EUR'&&sagValyuta==='USD'&&leftInput.value!=0&&leftInput.value!=''){
    fetch('https://api.exchangerate.host/latest?base=EUR&symbols=USD')
    .then(res=>res.json())
    .then((data=>{
        rightInput.value = (leftInput.value*data.rates.USD).toFixed(3);
        leftInputDiv.innerText=`${eurL} ${data.rates.USD} ${usdR}`
        rightInputDiv.innerText=`${usdL} ${(1/data.rates.USD).toFixed(6)} ${eurR}`
    }))}
    else if(solValyuta==='EUR'&&sagValyuta==='RUB'&&leftInput.value!=0&&leftInput.value!=''){
    fetch('https://api.exchangerate.host/latest?base=EUR&symbols=RUB')
    .then(res=>res.json())
    .then((data=>{
        rightInput.value = (leftInput.value*data.rates.RUB).toFixed(3);
        leftInputDiv.innerText=`${eurL} ${data.rates.RUB} ${rubR}`
        rightInputDiv.innerText=`${rubL} ${(1/data.rates.RUB).toFixed(6)} ${eurR}`
    }))}
    else if(solValyuta==='EUR'&&sagValyuta==='EUR'&&leftInput.value!=0&&leftInput.value!=''){
        rightInput.value = leftInput.value;
        leftInputDiv.innerText=`1 EUR = 1 EUR`
        rightInputDiv.innerText=`1 EUR = 1 EUR`}
    else if(solValyuta==='EUR'&&sagValyuta==='GBP'&&leftInput.value!=0&&leftInput.value!=''){
    fetch('https://api.exchangerate.host/latest?base=EUR&symbols=GBP')
    .then(res=>res.json())
    .then((data=>{
        rightInput.value = (leftInput.value*data.rates.GBP).toFixed(3);
        leftInputDiv.innerText=`${eurL} ${data.rates.GBP} ${gbpR}`
        rightInputDiv.innerText=`${gbpL} ${(1/data.rates.GBP).toFixed(6)} ${eurR}`
    }))}
    else if(solValyuta==='GBP'&&sagValyuta==='USD'&&leftInput.value!=0&&leftInput.value!=''){
    fetch('https://api.exchangerate.host/latest?base=GBP&symbols=USD')
    .then(res=>res.json())
    .then((data=>{
        rightInput.value = (leftInput.value*data.rates.USD).toFixed(3);
        leftInputDiv.innerText=`${gbpL} ${data.rates.USD} ${usdR}`
        rightInputDiv.innerText=`${usdL} ${(1/data.rates.USD).toFixed(6)} ${gbpR}`
    }))}
    else if(solValyuta==='GBP'&&sagValyuta==='RUB'&&leftInput.value!=0&&leftInput.value!=''){
    fetch('https://api.exchangerate.host/latest?base=GBP&symbols=RUB')
    .then(res=>res.json())
    .then((data=>{
        rightInput.value = (leftInput.value*data.rates.RUB).toFixed(3);
        leftInputDiv.innerText=`${gbpL} ${data.rates.RUB} ${rubR}`
        rightInputDiv.innerText=`${rubL} ${(1/data.rates.RUB).toFixed(6)} ${gbpR}`
    }))}
    else if(solValyuta==='GBP'&&sagValyuta==='EUR'&&leftInput.value!=0&&leftInput.value!=''){
    fetch('https://api.exchangerate.host/latest?base=GBP&symbols=EUR')
    .then(res=>res.json())
    .then((data=>{
        rightInput.value = (leftInput.value*data.rates.EUR).toFixed(3);
        leftInputDiv.innerText=`${gbpL} ${data.rates.EUR} ${eurR}`
        rightInputDiv.innerText=`${eurL} ${(1/data.rates.EUR).toFixed(6)} ${gbpR}`
    }))}
    else if(solValyuta==='GBP'&&sagValyuta==='GBP'&&leftInput.value!=0&&leftInput.value!=''){
        rightInput.value = leftInput.value;
        leftInputDiv.innerText=`1 GBP = 1 GBP`
        rightInputDiv.innerText=`1 GBP = 1 GBP`
    }else if (leftInput.value==0&&leftInput.value==''){rightInput.value=''}
}
leftInput.addEventListener('keyup', changeAUTO)

function changeAUTOTwo(){
if(solValyuta==='RUB'&&sagValyuta==='USD'&&rightInput.value!=0&&rightInput.value!=''){
    fetch('https://api.exchangerate.host/latest?base=USD&symbols=RUB')
    .then(res=>res.json())
    .then((data=>{
        leftInput.value = (rightInput.value*data.rates.RUB).toFixed(3);
    }))}
    else if(solValyuta==='RUB'&&sagValyuta==='RUB'&&rightInput.value!=0&&rightInput.value!=''){
    leftInput.value=rightInput.value}
    else if(solValyuta==='RUB'&&sagValyuta==='EUR'&&rightInput.value!=0&&rightInput.value!=''){
    fetch('https://api.exchangerate.host/latest?base=EUR&symbols=RUB')
    .then(res=>res.json())
    .then((data=>{
        leftInput.value = (rightInput.value*data.rates.RUB).toFixed(3);  
    }))}
    else if(solValyuta==='RUB'&&sagValyuta==='GBP'&&rightInput.value!=0&&rightInput.value!=''){
    fetch('https://api.exchangerate.host/latest?base=GBP&symbols=RUB')
    .then(res=>res.json())
    .then((data=>{
        leftInput.value = (rightInput.value*data.rates.RUB).toFixed(3);
    }))}
    else if(solValyuta==='USD'&&sagValyuta==='USD'&&rightInput.value!=0&&rightInput.value!=''){
        leftInput.value=rightInput.value}
    else if(solValyuta==='USD'&&sagValyuta==='RUB'&&rightInput.value!=0&&rightInput.value!=''){
    fetch('https://api.exchangerate.host/latest?base=RUB&symbols=USD')
    .then(res=>res.json())
    .then((data=>{
        leftInput.value = (rightInput.value*data.rates.USD).toFixed(3);
    }))}
    else if(solValyuta==='USD'&&sagValyuta==='EUR'&&rightInput.value!=0&&rightInput.value!=''){
    fetch('https://api.exchangerate.host/latest?base=EUR&symbols=USD')
    .then(res=>res.json())
    .then((data=>{
        leftInput.value = (rightInput.value*data.rates.USD).toFixed(3);
    }))}
    else if(solValyuta==='USD'&&sagValyuta==='GBP'&&rightInput.value!=0&&rightInput.value!=''){
    fetch('https://api.exchangerate.host/latest?base=USD&symbols=GBP')
    .then(res=>res.json())
    .then((data=>{
        leftInput.value = (rightInput.value*data.rates.GBP).toFixed(3);
    }))}
    else if(solValyuta==='EUR'&&sagValyuta==='USD'&&rightInput.value!=0&&rightInput.value!=''){
    fetch('https://api.exchangerate.host/latest?base=USD&symbols=EUR')
    .then(res=>res.json())
    .then((data=>{
        leftInput.value = (rightInput.value*data.rates.EUR).toFixed(3);
    }))}
    else if(solValyuta==='EUR'&&sagValyuta==='RUB'&&rightInput.value!=0&&rightInput.value!=''){
    fetch('https://api.exchangerate.host/latest?base=RUB&symbols=EUR')
    .then(res=>res.json())
    .then((data=>{
        leftInput.value = (rightInput.value*data.rates.EUR).toFixed(3);
    }))}
    else if(solValyuta==='EUR'&&sagValyuta==='EUR'&&rightInput.value!=0&&rightInput.value!=''){
        leftInput.value=rightInput.value}
    else if(solValyuta==='EUR'&&sagValyuta==='GBP'&&rightInput.value!=0&&rightInput.value!=''){
    fetch('https://api.exchangerate.host/latest?base=GBP&symbols=EUR')
    .then(res=>res.json())
    .then((data=>{
        leftInput.value = (rightInput.value*data.rates.EUR).toFixed(3);
    }))}

    else if(solValyuta==='GBP'&&sagValyuta==='USD'&&rightInput.value!=0&&rightInput.value!=''){
    fetch('https://api.exchangerate.host/latest?base=USD&symbols=GBP')
    .then(res=>res.json())
    .then((data=>{
        leftInput.value = (rightInput.value*data.rates.GBP).toFixed(3);
    }))}
    else if(solValyuta==='GBP'&&sagValyuta==='RUB'&&rightInput.value!=0&&rightInput.value!=''){
    fetch('https://api.exchangerate.host/latest?base=RUB&symbols=GBP')
    .then(res=>res.json())
    .then((data=>{
        leftInput.value = (rightInput.value*data.rates.GBP).toFixed(3);
    }))}
    else if(solValyuta==='GBP'&&sagValyuta==='EUR'&&rightInput.value!=0&&rightInput.value!=''){
    fetch('https://api.exchangerate.host/latest?base=EUR&symbols=GBP')
    .then(res=>res.json())
    .then((data=>{
        leftInput.value = (rightInput.value*data.rates.GBP).toFixed(3);
    }))}
    else if(solValyuta==='GBP'&&sagValyuta==='GBP'&&rightInput.value!=0&&rightInput.value!=''){
        leftInput.value=rightInput.value}
    else if (rightInput.value==0&&rightInput.value==''){leftInput.value=''}
}

rightInput.addEventListener('keyup', changeAUTOTwo)

function backgroundEUR(){
    solValyuta='EUR'
    EURleft.style.background='#833AE0'
    RUBleft.style.background='none'
    USDleft.style.background='none'
    GBPleft.style.background='none'
}
EURleft.addEventListener('click', backgroundEUR)
EURleft.addEventListener('click', changeAUTO)

function backgroundRUB(){
    solValyuta='RUB'
    RUBleft.style.background='#833AE0'
    EURleft.style.background='none'
    USDleft.style.background='none'
    GBPleft.style.background='none'
}
RUBleft.addEventListener('click', backgroundRUB)
RUBleft.addEventListener('click', changeAUTO)

function backgroundUSD(){
    solValyuta='USD'
    USDleft.style.background='#833AE0'
    EURleft.style.background='none'
    RUBleft.style.background='none'
    GBPleft.style.background='none'
}
USDleft.addEventListener('click', backgroundUSD)
USDleft.addEventListener('click', changeAUTO)

function backgroundGBP(){
    solValyuta='GBP'
    GBPleft.style.background='#833AE0'
    EURleft.style.background='none'
    RUBleft.style.background='none'
    USDleft.style.background='none'
}
GBPleft.addEventListener('click', backgroundGBP)
GBPleft.addEventListener('click', changeAUTO)

function backgroundGBPright(){
    sagValyuta='GBP'
    GBPright.style.background='#833AE0'
    EURright.style.background='none'
    RUBright.style.background='none'
    USDright.style.background='none' 
}
GBPright.addEventListener('click', backgroundGBPright)
GBPright.addEventListener('click', changeAUTO)

function backgroundUSDright(){
    sagValyuta='USD'
    USDright.style.background='#833AE0'
    GBPright.style.background='none'
    EURright.style.background='none'
    RUBright.style.background='none'   
}
USDright.addEventListener('click', backgroundUSDright)
USDright.addEventListener('click', changeAUTO)

function backgroundEURright(){
    sagValyuta='EUR'
    EURright.style.background='#833AE0'
    GBPright.style.background='none'
    RUBright.style.background='none'
    USDright.style.background='none'
}
EURright.addEventListener('click', backgroundEURright)
EURright.addEventListener('click', changeAUTO)

function backgroundRUBright(){
    sagValyuta='RUB'
    RUBright.style.background='#833AE0'
    GBPright.style.background='none'
    EURright.style.background='none'
    USDright.style.background='none'
}
RUBright.addEventListener('click', backgroundRUBright)
RUBright.addEventListener('click', changeAUTO)
