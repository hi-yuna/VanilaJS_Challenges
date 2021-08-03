const images = ["니모.jpg", "라따뚜이.jpg", "우디.jpg", "토이스토리벽지.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
