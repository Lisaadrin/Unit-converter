let inputEl = document.getElementById("input-el")
let convertBtn = document.getElementById("convert-btn")
let lengthCalc = document.getElementById("length-calc")
let volumeCalc = document.getElementById("volume-calc")
let massCalc = document.getElementById("mass-calc")
let meter = 3.281
let liter = 0.264
let kilogram = 2.204

convertBtn.addEventListener("click", function(){
    let Value = inputEl.value
    lengthCalc.innerHTML= `
    ${Value} meters = ${(Value * meter).toFixed(3)} feet | ${Value} feet = ${(Value / meter).toFixed(3)} meters
    ` 
    
    volumeCalc.innerHTML= `
    ${Value} liters = ${(Value * liter).toFixed(3)} gallons | ${Value} gallons = ${(Value / liter).toFixed(3)} meters
    `
    
    massCalc.innerHTML= `
    ${Value} kilograms = ${(Value * kilogram).toFixed(3)} pounds | ${Value} pounds = ${(Value / kilogram).toFixed(3)} kilograms
    `
})
        
