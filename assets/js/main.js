let loginTab1 = document.querySelector('#loginTab1');
let loginTab2 = document.querySelector('#loginTab2');

loginTab1.addEventListener('click', (e) => {
    e.preventDefault()
    loginTab1.classList.add("active")
    loginTab2.classList.remove("active")
})

loginTab2.addEventListener('click', (e) => {
    e.preventDefault()
    loginTab2.classList.add("active")
    loginTab1.classList.remove("active")
})

function onLoginClick() {
    window.location.href = "http://127.0.0.1:5502/dashboard.html";
}