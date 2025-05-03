function updateTimeDisplay() {
    const timeElement = document.getElementById('time');
    if (timeElement) {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      timeElement.textContent = `${hours}:${minutes}`;
    }
  }
  
  // Call it once to display the initial time
  updateTimeDisplay();
  
  // Optionally, update the time every minute (or any desired interval)
  setInterval(updateTimeDisplay, 60000); // 60000 milliseconds = 1 minute