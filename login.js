
const container = document.getElementById('container');
const Btn = document.getElementById('register');
const login= document.getElementById('login');

Btn.addEventListener('click', () => {
    container.classList.add("active");
});

login.addEventListener('click', () => {
    container.classList.remove("active");
});