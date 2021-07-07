const temperatureShow = document.querySelector("#temperature")
const humidityShow =  document.querySelector("#humidity")

temperatureShow.innerHTML = 'LOADING';
humidityShow.innerHTML = 'LOADING';

if(temperatureShow.innerHTML === 'LOADING') temperatureShow.style.fontSize = '50%';
if(humidityShow.innerHTML === 'LOADING') humidityShow.style.fontSize = '50%';

//FUNÇÃO QUE LÊ O ARQUIVO JSON COM OS DADOS DO SENSOR E ESCREVE NA DOM
async function getSensorInformation(){
    const dataSensorPath = `sensor.json`

    try {
        const result = await (await fetch(dataSensorPath)).json()
        
        temperatureShow.innerHTML = result.sensor.temperature
        humidityShow.innerHTML = result.sensor.humidity

        if(temperatureShow.innerHTML !== 'LOADING') temperatureShow.style.fontSize = 'inherit';
        if(humidityShow.innerHTML !== 'LOADING') humidityShow.style.fontSize = 'inherit';      

        alertHighTemperature(result.sensor.temperature) 
    } catch (error) {
        console.error(error)
    }
} 

//A CADA 5s A INFORMAÇÃO É ATUALIZADA NA DOM
setInterval(() => {
    getSensorInformation()
}, 5000)



//ALERTA DE ALTA TEMPERATURA
function alertHighTemperature(temperatureCpd){
    const modal = document.querySelector('.modal')
    const closeModal = document.querySelector('.close-modal')


    if(temperatureCpd >= 25) modal.classList.remove('modal-hide')

    closeModal.addEventListener('click',() => {
        modal.classList.add('modal-hide')
    })
}

