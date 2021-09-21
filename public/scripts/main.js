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
//'assets/particles.json'

particlesJS('particles-js',
{
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 },
        image: { src: "img/github.svg", width: 100, height: 100 }
        },
        opacity: {
        value: 0.5,
        random: false,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
        },
        size: {
        value: 3,
        random: true,
        anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
        },
        line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
        },
        move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
        resize: true
        },
        modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
        }
    },
    retina_detect: true
}, 
function() {
    console.log('callback - particles.js config loaded');
  });