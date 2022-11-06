const togglePassword = document.querySelector("#togglePassword");

const password = document.querySelector("#pwd");

togglePassword.addEventListener("click", () => {
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";

  password.setAttribute("type", type);

  document.getElementById("togglePassword").classList.toggle("bi-eye");
});
