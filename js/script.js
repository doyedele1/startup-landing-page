let toggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');

toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    navigation.classList.toggle('active');
});