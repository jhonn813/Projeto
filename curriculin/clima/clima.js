const apikey = "647a532fdaeff3190af8d2866445a693"
let url = "https://flagsapi.com/BE/flat/64.png"

let city = document.querySelector("#city-input")
const procurarbtn = document.querySelector("#procurar")
 
let cityElement = document.querySelector("#city")
let temperaturaElement = document.querySelector("#temperatura")
let description = document.querySelector("#description")
let country= document.querySelector("#bandeira")

let bandeira = document.querySelector("#bandeira")
let daodsContainer = document.querySelector("#dados")


//funcoes
const weatherData = async (city) => {

  
    const apiweatherData = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apikey}&units=metric&lang=pt_br`;

    try {
        const res = await fetch(apiweatherData);
        const data = await res.json();
        bandeira.src = `${url}${data.sys.country.toLowerCase()}`


        if (!res.ok) {
            throw new Error(data.message || "Erro ao buscar clima");
        }

        console.log(data);

        // Mostrar os dados na página
        cityElement.textContent = data.name;
        temperaturaElement.textContent = `${data.main.temp} °C`;
        description.textContent = data.weather[0].description;
        country.textContent = data.sys.country;

    } catch (error) {
        console.error("Erro:", error);
        alert("Não foi possível encontrar essa cidade.");
    }
};

const showWeaatherData = (city) =>{
    weatherData(city);

    daodsContainer.classList.remove("hide")

}


//eventos

procurarbtn.addEventListener("click", (e) =>{

     e.preventDefault()

     let cidade = city.value
   showWeaatherData(cidade)
})



city.addEventListener("keyup",(e) =>{
    if (e.code === "Enter") {
        const cityDados = e.target.value

       showWeaatherData(cityDados)
    }
})