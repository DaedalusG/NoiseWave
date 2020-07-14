//listener on logout button. On click, if user is logged in, it logs them out and redirects them to splash page or explore.


document.addEventListener("DOMContentLoaded", () => {
  const logoutButton = document.querySelector(".logout");
  logoutButton.addEventListener("click", (event) => {
    event.stopPropagation();
    localStorage.removeItem("NOISEWAVE_ACCESS_TOKEN");

    window.location.href = "/";
  });
});
