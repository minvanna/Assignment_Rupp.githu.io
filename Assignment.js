const menuToggle = document.getElementById('click');
const menuButton = document.getElementById('menu');

menuButton.addEventListener('click', function() {
    if (menuToggle.checked) {
        document.querySelector('.nav-links').style.display = 'block';
    } else {
        document.querySelector('.nav-links').style.display = 'none';
    }
});
document.addEventListener('click', function(event) {
    if (!menuButton.contains(event.target) && !menuToggle.contains(event.target)) {
        document.querySelector('.nav-links').style.display = 'none';
        menuToggle.checked = false;
    }
});