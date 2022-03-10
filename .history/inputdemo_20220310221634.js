const password = document.getElementById("password")
const icon = document.querySelector('.icon1')
const icon1 = document.querySelector('.icon')
const name1 = document.querySelectorAll(".name-in")
const input = document.querySelectorAll("input")

icon.addEventListener("click", () => {
    if (password.type == "text") {
        password.setAttribute("type", "password")
        icon.style.opacity = "0"
    } else {
        password.setAttribute("type", "text")
        icon.style.opacity = "1"
    }
})
password.addEventListener("keyup", () => {
    icon.style.display = "block"
    icon1.style.display = "block"
})

for (let key = 0; key < input.length; key++) {
    input[key].addEventListener("keyup", () => {
        if (input[key].value == '') {
            name1[key].classList.remove("abs-text");
        } else {
            name1[key].classList.add("abs-text");
        }
    })
}