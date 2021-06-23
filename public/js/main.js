deleteComic = async (id) => {
  if (confirm("DO YOU REALLY WANT TO DELETE THIS COMIC?")) {
    await fetch("http://localhost:3500/comics/" + id, {
      method: "DELETE",

      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    window.location.href = "/comics";
  }
};

deleteManga = async (id) => {
  if (confirm("DO YOU REALLY WANT TO DELETE THIS MANGA?")) {
    await fetch("http://localhost:3500/mangas/" + id, {
      method: "DELETE",

      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    window.location.href = "/manga";
  }
};
