document.addEventListener("DOMContentLoaded", () => {
  console.log(`search script loaded`);
  document.getElementById("searchbar").addEventListener("submit", (event) => {
    event.preventDefault();
    const query = document.getElementById("search").value;

    console.log(`query is ${query}`);

    window.location = `/search/${query}`;
  });
});
