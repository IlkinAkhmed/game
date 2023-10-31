const btntas = document.querySelector('#tas')
const btnkagit = document.querySelector('#kagit')
const btnmakas = document.querySelector('#makas')
const comptext = document.querySelector('#comptext')
const metext = document.querySelector('#metext')
const plybtn = document.querySelector('#play')
arr=['Tas','Kagit','Makas']
plybtn.onclick=()=>{comptext.textContent=arr[Math.floor(Math.random()*arr.length)]}
btntas.onclick=()=>{metext.textContent='Tas'}
btnkagit.onclick=()=>{metext.textContent='Kagit'}
btnmakas.onclick=()=>{metext.textContent='Makas'}
if (comptext.textContent==='Makas' && metext.textContent==='Tas') {
    alert('Kazandiniz')
}