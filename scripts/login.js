// document.addEventListener("DOMContentLoaded", () => {
//   const logInForm = document.querySelector(".login-form");

//   logInForm.addEventListener("submit", async (e) => {
//     e.preventDefault();
//     const formData = new FormData(logInForm);
//     const email = formData.get("username");
//     const password = formData.get("password");
//     const body = { email, password };
//     const res = await fetch("http://localhost:8080/login", {
//       method: "POST",
//       body: JSON.stringify(body),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//   });
// });
