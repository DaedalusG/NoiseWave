document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("searchbar").addEventListener("submit", (event) => {
    event.preventDefault();
    const query = document.getElementById("search").nodeValue;

    window.location = `/search?=${query}`;
  });
});
