let toggle = document.querySelector('.toggle');
let toggleBtn = document.querySelector('.toggle-btn');

toggleBtn.addEventListener("click", () => {
    toggle.classList.toggle("active");
})