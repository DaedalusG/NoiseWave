document.addEventListener("DOMContentLoaded", () => {
  const editUserForm = document.querySelector(".edit-user-form");
  editUserForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(editUserForm);

    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");
    const id = formData.get("id");

    const body = {
      email,
      password,
      username,
      confirmPassword,
      profilePicUrl,
      backgroundUrl,
    };

    try {
      const res = await fetch(`/users/${id}`, {
        method: "post",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("after put", res);
      if (!res.ok) {
        throw res;
      }

      // const user = await res.json();
      // document.cookie = `NOISEWAVE_ACCESS_TOKEN=;`;

      // // redirect to home page:
      // window.location.href = "/";
    } catch (res) {
      let errors = await res.json();

      //errors array will be genrated in route, attached to res. res is thrown so we can grab error array by res.errors
      //catch error that has error messages array in it
      //just hav this fill a conditional error list within modal
      //no need for huge error / redirection
      errors = errors.map((error) => `<li>${error}</li>`);
      const errorContainer = document.querySelector(".edit-errors");
      errorContainer.innerHTML = errors;
      errorContainer.classList.add("errors");
    }
  });
});
