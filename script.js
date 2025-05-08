let textParagraph = document.getElementById("text");
let changeContent = document.getElementById("change-content");
let boldWeight = document.getElementById("bold-weight");
let lightWeight = document.getElementById("light-weight");
let changeColor = document.getElementById("change-color");
let changeBColor = document.getElementById("change-b-color");
let randomImage = document.getElementById("random-image");
let image = document.getElementById("random-img");
let arrayImage = [
  "https://images.pexels.com/photos/31889998/pexels-photo-31889998/free-photo-of-scenic-rocky-coastal-cliffs-of-tagle-spain.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
  "https://images.pexels.com/photos/31756525/pexels-photo-31756525/free-photo-of-photographer-exploring-spiti-valley-landscape.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
  "https://images.pexels.com/photos/31896480/pexels-photo-31896480/free-photo-of-scenic-coastal-view-with-blue-ocean-and-boats.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
  "https://images.pexels.com/photos/31951987/pexels-photo-31951987/free-photo-of-close-up-of-ladybug-pupa-on-thorny-branch.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
  "https://images.pexels.com/photos/29872205/pexels-photo-29872205/free-photo-of-tranquil-beach-sunset-with-silhouetted-boat.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
];

changeContent.addEventListener("click", () => {
  textParagraph.innerText = "Hello";
});

boldWeight.addEventListener("click", () => {
  textParagraph.style.fontWeight = "bold";
});

lightWeight.addEventListener("click", () => {
  textParagraph.style.fontWeight = "normal";
});

changeColor.addEventListener("click", () => {
  textParagraph.style.color = "blue";
});

changeBColor.addEventListener("click", () => {
  textParagraph.style.backgroundColor = "gray";
});

randomImage.addEventListener("click", () => {
  image.src =
    "https://images.pexels.com/photos/29872205/pexels-photo-29872205/free-photo-of-tranquil-beach-sunset-with-silhouetted-boat.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load";
});
