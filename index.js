// current weather details

// input city
document.getElementById('search-buttom').addEventListener('click', function()) {
    console.log("someone clicked the search buttom");
    const inputCity = document.getElementById('search-input').value;

    //validation input city
    if(!inputCity){
        alert('I can't find this city');
        return;
    }

    getWeatherData (inputCity);
    document.getElementById('search-input').value = "";

};

//Fetch weather data

const getWeatherData = async (cityName) => {
    console.log("I am fetching weather data for", cityName)
}