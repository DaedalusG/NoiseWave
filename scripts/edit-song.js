document.addEventListener("DOMContentLoaded", () => {
  const editSongForm = document.querySelector(".edit-song-form");

  editUserForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(editSongForm);

    const id = formData.get("id");
    const userId = formData.get("userId");
    const title = formData.get("title");
    const artist = formData.get("artist");
    const album = formData.get("album");
    const genre = formData.get("genre");
    const songUrl = formData.get("songUrl");
    const thumbnailUrl = formData.get("thumbnailUrl");

    const body = {
      id,
      title,
      artist,
      album,
      genre,
      songUrl,
      thumbnailUrl,
      userId,
    };

    try {
      const res = await fetch(`http://localHost:8080/songs/${id}`, {
        method: "put",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("after put", res);
      if (!res.ok) {
        throw res;
      }

      //HERE IS WHERE WE NEED TO BE DOING S3 STUFF!! If database change successful
      const song = await res.json();

      // redirect to home page:
      window.location.href = "/";
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
