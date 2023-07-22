
const startBtn= document.querySelector('button[data-start]')
const stopBtn= document.querySelector('button[data-stop]')
const body = document.body

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }getRandomHexColor()
 ;
 let intervalId
startBtn.addEventListener("click", (e) => {
    startBtn.disabled= true
    stopBtn.disabled=false
intervalId=setInterval(()=>{
    const backgroundColor= getRandomHexColor()
    body.style.backgroundColor = `${backgroundColor}`
   }, 1000) 

  })
  stopBtn.addEventListener("click", (e) => {
   clearInterval(intervalId)
   startBtn.disabled= false
   stopBtn.disabled=true
  });