document.getElementById('backArrow').addEventListener('click', () => {
    if (document.referrer && document.referrer.includes(window.location.host)) {
        window.history.back();
    } else {
        window.location.href = 'https://www.google.com/'; // Default page if no history
    }
});