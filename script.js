function getWeather() {
  const location = document.getElementById('locationInput').value;
  const apiKey = 'fe649f688cc9400fab1163533250705';
  const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error("Location not found");
      }
      return response.json();
    })
    .then(data => {
      const resultBox = document.getElementById('weatherResult');
      resultBox.innerHTML = `
        <h2>${data.location.name}, ${data.location.country}</h2>
        <p><strong>Temperature:</strong> ${data.current.temp_c}°C</p>
        <p><strong>Condition:</strong> ${data.current.condition.text}</p>
        <p><strong>Humidity:</strong> ${data.current.humidity}%</p>
        <p><strong>Wind:</strong> ${data.current.wind_kph} kph</p>
        <img src="https:${data.current.condition.icon}" alt="Weather icon">
      `;
    })
    .catch(error => {
      document.getElementById('weatherResult').innerHTML = `<p style="color:red;">${error.message}</p>`;
    });
}
