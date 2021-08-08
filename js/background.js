const images = ["니모.jpg", "라따뚜이.jpg", "토이스토리벽지.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url(img/${chosenImage})`;
