var userInput = prompt("Please enter the temperature range (0-39)):");
var temperatureRanges = [
    { min: 33, max: 39, condition: "Heat Wave", image: "https://shorturl.at/G1CJI" },
    { min: 27, max: 32, condition: "Very Hot", image: "https://shorturl.at/yZx0m" },
    { min: 23, max: 26, condition: "Hot", image: "https://shorturl.at/Efru0"},
    { min: 16, max: 22, condition: "Room Temprature", image: "https://shorturl.at/e9guB" },
    { min: 11, max: 15, condition: "Warm", image: "https://shorturl.at/2LgRy"},
    { min: 5, max: 10, condition: "Mild", image: "https://media2.giphy.com/media/8xzHhQzVo0bcnBX9ge/giphy.webp?cid=790b7611hy7rk5xowm45evsoraew9lm1sahydw99iysrsb0b&ep=v1_gifs_search&rid=giphy.webp&ct=g"},
    { min: 0, max: 4, condition: "Cold", image: "https://i.pinimg.com/originals/91/6f/29/916f29e40ec294ff96bb92adae6601dc.gif"}
];

function getWeatherCondition(temperature) {
    for (const range of temperatureRanges) {
        if (temperature >= range.min && temperature <= range.max) {
            return range;
        }
    }
    return null;
}

var userTemperature = parseInt(userInput);
var weatherInfo = getWeatherCondition(userTemperature);

if (weatherInfo) {
    var weatherReport = `
        <div class="card weather-card">
            <div class="card-body">
                <h5 class="card-title">Weather Report</h5>
                <p class="card-text">Temperature: ${userTemperature}°C</p>
                <p class="card-text">Weather: ${weatherInfo.condition}</p>
                <img src="${weatherInfo.image}" alt="Weather Image" class="imagedropshadow">
            </div>
        </div>
    `;
    document.write(weatherReport);
} else {
    var noWeatherReport = `
        <div class="card weather-card">
            <div class="card-body">
                <p class="card-text">Weather condition not applicable for the given temperature range.</p>
                <img src="data:image/jpeg;base64,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">
            </div>
        </div>
    `;
    document.write(noWeatherReport);
}
