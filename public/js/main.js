deleteComic = async (id) => {
  if (confirm("DO YOU REALLY WANT TO DELETE THIS COMIC?")) {
    await fetch("mongodb+srv://antonio_rosales:Jr7NNl9e8LsHDGZd@cluster0.gmzuc.mongodb.net/comic-book-shop/comics/" + id, {
      method: "DELETE",

      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    window.location.href = "/comics";
  }
};
