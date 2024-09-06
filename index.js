const body = document.querySelector('body')
const switchBtn = document.querySelector('[data-switch]')

switchBtn.addEventListener("change", function(){
    if (this.checked) {
        body.setAttribute("data-bs-theme", "light")
    } else {
        body.setAttribute("data-bs-theme", "dark")
    }
})