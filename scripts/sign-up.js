document.addEventListener("DOMContentLoaded", () => {
  const signUpForm = document.querySelector(".sign-up-form");
  signUpForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log("going through event listener");
    const formData = new FormData(signUpForm);

    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    const body = { email, password, username, confirmPassword };

    try {
      const res = await fetch("http://localHost:8080/users", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw res;
      }
      const token = await res.json();
      console.log(token);
      localStorage.setItem("NOISEWAVE_ACCESS_TOKEN", token);

      // redirect to home page to see explore page:
      window.location.href = "/explore";
    } catch (res) {
      let errors = await res.json();

      //errors array will be genrated in route, attached to res. res is thrown so we can grab error array by res.errors
      //catch error that has error messages array in it
      //just hav this fill a conditional error list within modal
      //no need for huge error / redirection
      errors = errors.map((error) => `<li>${error}</li>`);
      const errorContainer = document.querySelector(".signup-errors");
      errorContainer.innerHTML = errors;
      errorContainer.classList.add("errors");
    }
  });
});
