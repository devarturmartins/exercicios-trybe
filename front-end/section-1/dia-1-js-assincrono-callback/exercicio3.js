const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * (9 / 5)) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`Atualmente está ${toFahrenheit(temperature)}ºF em Marte`);

const greet = (temperature) =>
  console.log(`Olá! Curiosity aqui. Nesse momento está ${temperature}ºC em Marte`);

const handleError = (errorReason) =>
  console.log(`Error getting temperature: ${errorReason}`);

// Definição da função sendMarsTemperature...
const sendMarsTemperature = (callback, error) => {
    const msgSucesso = Math.random() <= 0.6;
    setTimeout(() => {
        if(msgSucesso) {
            callback(getMarsTemperature())
        } else {
        error(getMarsTemperature());
        };
    }, messageDelay() );
}

sendMarsTemperature(temperatureInFahrenheit, handleError); // Imprime "Atualmente está 46.4ºF em Marte", por exemplo

sendMarsTemperature(greet, handleError); // Imprime "Olá! Curiosity aqui. Nesse momento são 36ºC em Marte", por exemplo
