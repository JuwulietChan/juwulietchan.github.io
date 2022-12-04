let img1 = document.querySelector(".j0");
let img2 = document.querySelector(".j1");
let img3 = document.querySelector(".j2");

setInterval(() => {
  setTimeout(() => {
    img1.src =
      "https://media.discordapp.net/attachments/922822805828038687/1049039432445079552/Screenshot_69.png" == img1.src
        ? "https://media.discordapp.net/attachments/922822805828038687/1049059571559317544/image.png"
        : "https://media.discordapp.net/attachments/922822805828038687/1049039432445079552/Screenshot_69.png";
    img2.src =
      "https://media.discordapp.net/attachments/999038509102932030/1049035214455844945/IMG_0086.JPG?width=455&height=607" == img2.src
        ? "https://media.discordapp.net/attachments/922822805828038687/1049060398957084774/unknown.png"
        : "https://media.discordapp.net/attachments/999038509102932030/1049035214455844945/IMG_0086.JPG?width=455&height=607";
    img3.src =
      "https://media.discordapp.net/attachments/999038509102932030/1049035763846746212/68916998057__68983BE7-6E38-4FE9-B896-332210F84A9E.jpg?width=455&height=606" == img3.src
        ? "https://media.discordapp.net/attachments/922822805828038687/1049065824989761627/image.png"
        : "https://media.discordapp.net/attachments/999038509102932030/1049035763846746212/68916998057__68983BE7-6E38-4FE9-B896-332210F84A9E.jpg?width=455&height=606";
  }, 2000);
  img1.classList.add("active");
  img2.classList.add("active");
  img3.classList.add("active");
}, 10000);
img1.addEventListener("animationend", () => {
  if (img1.classList.contains("active")) {
    img1.classList.remove("active");
  }
});
img2.addEventListener("animationend", () => {
  if (img2.classList.contains("active")) {
    img2.classList.remove("active");
  }
});
img3.addEventListener("animationend", () => {
  if (img3.classList.contains("active")) {
    img3.classList.remove("active");
  }
});
