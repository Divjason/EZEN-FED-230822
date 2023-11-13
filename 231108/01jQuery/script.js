const url = "gallery.json";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const gallery = document.querySelector("#gallery");
    console.log(gallery);
    data.images.forEach((image) => {
      const imgElement = document.createElement("img");
      imgElement.src = image.path;
      imgElement.alt = image.caption;
      gallery.appendChild(imgElement);
    });
  })
  .catch((err) => console.log(`Err: ${err}`));
