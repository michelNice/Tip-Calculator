//Get the dom from html*
'use strict'
const btnCalc = document.querySelector('.btn-calc')
const amount = document.querySelector('.amount')
const per = document.querySelector('.tip')
const person = document.querySelector('.people')
const el = document.querySelector('.el')
const el_one = document.querySelector('.el_one')

//Main button that is gonna do the calculation
btnCalc.addEventListener('click', function(){
    const bill =  Number(amount.value)
    const percentage = Number(per.value)
    const people = Number(person.value)

    //This is the main calculation
    const tip = bill * (percentage / 100)

    const total = tip + bill

    const shareBill = total / people

    console.log(total)

    
    //if the amound is the the 4 dollars display none 
    if(bill > 4){
        el.classList.remove('el')
        el_one.classList.remove('el_one')

    }

    if(bill === 0){
        el.classList.add('el')
        el_one.classList.add('el_one')
    }

    //if more than one person show up each and the total, If not just the total.
    if(people > 1){
        el_one.textContent = `💰 Total $${shareBill.toFixed(2)} each`
    }else{
        el_one.textContent = `💰 Total $${shareBill.toFixed(2)}`
    }

    el.textContent =  `⭐ Tip $${tip.toFixed(2)}`
  



})