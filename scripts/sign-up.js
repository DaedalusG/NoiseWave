// const signUpForm = document.querySelector(".sign-up-form");

// document.addEventListener("DOMContentLoaded", () => {
//   signUpForm.addEventListener("submit", async (e) => {
//     e.preventDefault();
//     const formData = new FormData(signUpForm);

//     const username = formData.get("username");
//     const email = formData.get("email");
//     const password = formData.get("password");

//     const body = { email, password, username };
//     try {
//       const res = await fetch("http://localHost:8080/users", {
//         method: "POST",
//         body: JSON.stringify(body),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       if (!res.ok) {
//         throw res;
//       }

//       const { token } = await res.json;
//       localStorage.setItem("NOISEWAVE_ACCESS_TOKEN", token);

//       // redirect to home page to see explore page:
//       window.location.href = "/explore";
//     } catch (err) {
//       console.log(`error with account creation. make custom error handler`);
//     }
//   });
// });
