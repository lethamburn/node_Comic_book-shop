deleteComic = async (id) => {
  await fetch("http://localhost:3200/comics/" + id, {
    method: "DELETE",

    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  window.location.href = "/comics";
};
