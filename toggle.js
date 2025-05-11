const toggleBtn = document.getElementById('toggle-btn');    
const body = document.body;
const icon = document.getElementById('icon');

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark');
    body.classList.toggle('light');

    if(body.classList.contains('dark')){
        icon.textContent = "🌙";
    } else {
        icon.textContent = "☀️";
    }

})

window.onload = () =>{
    body.classList.add('light');
}