
const submit_btn = document.querySelector("#submit__btn");

submit_btn.addEventListener("click", function(e) {
  e.preventDefault();
  const firstName = document.querySelector("#input__firstName");
  const lastname = document.querySelector("#input__lastName");
  const email = document.querySelector("#input__email");
  const password = document.querySelector("#input__password");

  const arr = [firstName, lastname, email, password];

  for(const item of arr) {
    if(item.value === "") {
      item.classList.add("warning");
    } else {
      item.classList.remove("warning");
    }
  }
})