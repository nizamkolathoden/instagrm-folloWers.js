(()=>{
let i= 0
const followInterveal = setInterval(()=> {
if(i>=30){
clearInterval(followInterveal)
return;
}
const buttons = document.querySelectorAll('button')
const nextButton = buttons[i]
nextButton.click()
i++
},500)

})();