// document.addEventListener("DOMContentLoaded", () => {
//   document
//     .getElementById("searchbar")
//     .addEventListener("submit", async (event) => {
//       event.preventDefault();
//       event.stopPropagation();
//       const query = document.getElementById("search").value;

//       console.log(`query is ${query}`);

//       //we'll have to change for production API
//       // const resUsers = await fetch(`http://localhost:4000/search/users`, {
//       //   method: "POST",
//       //   headers: {
//       //     "Content-Type": "application/json",
//       //   },
//       //   body: JSON.stringify(query),
//       //   agent: httpsAgent,
//       // });

//       window.location = `/search/${query}`;
//     });
// });
