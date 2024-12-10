document.addEventListener("DOMContentLoaded", function () {
  const citySelector = document.getElementById("city-selector");
  const currentTimeDisplay = document.getElementById("current-time");

  function updateTime() {
    const selectedCity = citySelector.value;
    const now = new Date();
    const options = {
      timeZone: selectedCity,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    };
    const formattedTime = new Intl.DateTimeFormat("en-US", options).format(now);
    currentTimeDisplay.textContent = `Current time in ${selectedCity}: ${formattedTime}`;
  }

  citySelector.addEventListener("change", updateTime);
  setInterval(updateTime, 1000); 
  updateTime(); 
});
