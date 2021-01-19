var canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  width = (canvas.width = 500),
  height = (canvas.height = 500);

var umbrellaImg = new Image();
umbrellaImg.src =
  "https://lh3.googleusercontent.com/vANmjNiblQQpxIOkBcxh9xCVPYVpFU2FMMxXOV2CIJT7GnPJwyBwFPkvpbpc6BlCmS14uxFLfAMH7Oh5WyUH6rIKsqiDkSZAopy9g9UVB1qNJAVX9YDpO90ruUcajPqycUxattMl008yVBS1r2eNddusU7YTeZLl7036b7dvlmSxMqU3EpkEW9c99TD5DnCWjF7CboLaOYnaZ3jJ2OgLBkjJuB0l2QWVsOkl4WD_ks1ZaeuyULP4RqpzZj1CnYfw3dKu4tyfAXB4SKx9kUh0Ix1jojFmkTKC2sx_JH1pfGlNU5Uf7kQIZyeuXljJ7_bHBA2qwYhzVYxEGa_e9P-mT5TBwcql6d5pj6672TsHABn6TDW5S9h0eNgPnmsFO2R9zu62CvEaZXuy9vk9zw0HErCejowy28HLcbPzNDNL3DJiCRXa_EcnyspeWI_OjUg2oCX7jbWz3nfUae5DNRYyVq2AhuUk-FnJGJpoN2hRyacn82-uxT3S33eueLiKsQMAQHbctwciWwi_dmqi-X4Mlt0WwnMP7PItg01rZpug8V5c7BhgO7uAEAOBOIUBoB4WQuKtPB801HiDS4thCNO8LRgf4qY-4lQEusWeAejgKeR9Si7VKiQQBC5VmkG3OL8zl1T9j4iLyZpwlsAxRrFnUukas2AW7okF-LOhZEu4viYRri8tacmerRHEuB6P=w1280-h128-no?authuser=0";

var spriteAnimator = function (img, imgWidth, imgHeight, width, speed) {
  this.img = img;
  this.count = imgWidth / width;
  this.width = width;
  this.height = imgHeight;
  this.speed = speed;
  this.t = 0;
  this.animate = function (dx, dy) {
    context.drawImage(
      this.img,
      Math.floor(this.t / this.speed) * this.width,
      0,
      this.width,
      this.height,
      dx || 0,
      dy || 0,
      this.width,
      this.height
    );
    this.t += 1;
    if (this.t >= this.count * this.speed - 1) this.t = 0;
  };
};

var umbrella = new spriteAnimator(umbrellaImg, 1280, 128, 128, 4);

function animate() {
  context.clearRect(0, 0, width, height);

  umbrella.animate(50, 50);

  requestAnimationFrame(animate);
}

animate();
