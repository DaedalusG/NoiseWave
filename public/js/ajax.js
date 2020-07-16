document.addEventListener("DOMContentLoaded", (e) => {
  Array.from(document.getElementsByClassName("ajax")).forEach((el) => {
    el.addEventListener("click", async (event) => {
      event.preventDefault();
      res = await fetch(event.target.href);
      html = await res.text();
      document.querySelector("#page-specific-content").innerHTML = html;
    });
  });

  document.getElementById('searchbar').addEventListener('submit', async event => {
    event.preventDefault();
    const search = document.getElementById('search').value;
    res = await fetch(`/search/${search}`);
    html = await res.text();
    document.querySelector("#page-specific-content").innerHTML = html;
  });
});
