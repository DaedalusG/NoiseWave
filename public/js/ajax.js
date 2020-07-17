document.addEventListener("DOMContentLoaded", (e) => {
  Array.from(document.getElementsByClassName("ajax")).forEach((el) => {
    el.addEventListener("click", async (event) => {
      event.preventDefault();
      res = await fetch(event.target.href);
      html = await res.text();
      document.querySelector("#page-specific-content").innerHTML = html;
    });
  });

  document
    .getElementById("searchbar")
    .addEventListener("submit", async (event) => {
      // if (event.target === event.currentTarget) {
      event.preventDefault();
      const search = document.getElementById("search").value;
      res = await fetch(`/search/${search}`);
      html = await res.text();
      document.querySelector("#page-specific-content").innerHTML = html;
      // }
    });

  document
    .getElementById("page-specific-content")
    .addEventListener("click", async (event) => {
      if (event.target.classList.contains("ajax-link")) {
        event.stopPropagation();
        const targetUrl = event.target.title;
        console.log(targetUrl);
        const res = await fetch(`${targetUrl}`);
        const html = await res.text();
        document.querySelector("#page-specific-content").innerHTML = html;
      }
    });
});
