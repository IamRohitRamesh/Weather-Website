console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const errorMessage = document.querySelector('#errorMessage')
const resultMessage = document.querySelector('#resultMessage')


weatherForm.addEventListener('submit',(e)=>{

    e.preventDefault()

    errorMessage.textContent = 'Loading!..'
    resultMessage.textContent =''
    const location = search.value
    
    fetch('http://localhost:3000/weather?address='+location).then((response)=>{
        response.json().then((res)=>{
            if(res.error){
                errorMessage.textContent = res.error
            }
            else{
                errorMessage.textContent = res.location
                resultMessage.textContent = res.forecast
            }
        })
    })
})