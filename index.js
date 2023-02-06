var tempCelsius = parseInt(prompt("Bem Vindo ao Conversor de Temperaturas\nInsira a temperatura em Celsius para começarmos:"));

var tempFah = (tempCelsius * 9 / 5) + 32;
var tempKelvin = tempCelsius + 273.15;

alert("Conversor de Temperaturas\nCelsius: "+tempCelsius+"°C \nFahrenheit: "+tempFah+"°F \nKelvin: "+tempKelvin+"°K");

