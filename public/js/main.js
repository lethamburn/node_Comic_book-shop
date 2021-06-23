deleteComic = async (id) => {
  if (confirm("DO YOU REALLY WANT TO DELETE THIS COMIC?")) {
    await fetch("https://comic-book-shop.herokuapp.com/comics/" + id, {
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
    await fetch("https://comic-book-shop.herokuapp.com/mangas/" + id, {
      method: "DELETE",

      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    window.location.href = "/mangas";
  }
};