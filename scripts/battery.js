const batteryIcon = document.getElementById('batteryIcon');
const batteryImages = [
    '/images/low-battery.png',
    
    '/images/broken.png'
];
let index = 0;

setInterval(() => {
    index = (index + 1) % batteryImages.length;
    batteryIcon.src = batteryImages[index];
}, 1000);