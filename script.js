function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
// cir
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = ["#003f5b","#2b4b7d","#5f5195","#98509d","#cc4c91","#f25375","#ff6f4e","ff9913"
  
];

// background: linear-gradient(90deg, , #2b4b7d, #5f5195, #98509d, #cc4c91, #f25375, #ff6f4e, #ff9913);


circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();

// Lấy phần tử .circle
const circle = document.querySelector('.circle');

// Lắng nghe sự kiện di chuyển chuột
document.addEventListener('mousemove', (e) => {
  // Cập nhật vị trí cho .circle
  circle.style.left = `${e.clientX}px`;
  circle.style.top = `${e.clientY}px`;
});

var typed = new Typed('.title_1', {
  strings: ['Hoàng Tiến Đạt','Poicitaco','Itentad'],
  typeSpeed: 50,
  backSpeed : 150,
  loop : true
});

document.addEventListener("DOMContentLoaded", function() {
  var icon = document.getElementById("icon");
  var rowIcon = document.getElementById("row");
  var socialIcons = {
      linkedin: document.getElementById('linkedin'),
      github: document.getElementById('github'),
      facebook: document.getElementById('facebook'),
      cpu: document.getElementById('cpu'),
      tech: document.getElementById('Tech'),
      python: document.getElementById('python'),
      java: document.getElementById('java'),
      clang: document.getElementById('clang'),
      html: document.getElementById('html'),
      css: document.getElementById('css'),
      js: document.getElementById('js'),
      pytorch: document.getElementById('pytorch'),
      tensorflow: document.getElementById('tensorflow'),
      keras: document.getElementById('keras'),
      git: document.getElementById('git'),
      mail: document.getElementById("email"),
      ct1: document.getElementById('ct1'),
      ct2: document.getElementById('ct2')
  };

  icon.onclick = function() {
      document.body.classList.toggle("dark");

      // Thay đổi biểu tượng cho nút đổi chế độ
      if (document.body.classList.contains("dark")) {
          icon.src = "Light/light-mode.png"; // Biểu tượng cho chế độ sáng
          rowIcon.src = './Light/arrow-light.png'; // Hình ảnh mũi tên khi chế độ tối

          // Thay đổi hình ảnh cho các biểu tượng mạng xã hội
          socialIcons.linkedin.src = './Light/linkedin-light.png'; 
          socialIcons.github.src = './Light/github-light.png'; 
          socialIcons.facebook.src = './Light/facebook.png';
          socialIcons.cpu.src = './Light/chip.png';
          socialIcons.tech.src = './Light/open-book.png';
          socialIcons.python.src = './Light/python.png';
          socialIcons.java.src = './Light/java.png';
          socialIcons.clang.src = './Light/c.png';
          socialIcons.html.src = './Light/html.png';
          socialIcons.css.src = './Light/css-3.png';
          socialIcons.js.src = './Light/java-script.png';
          socialIcons.pytorch.src = './Light/pyt.png';
          socialIcons.tensorflow.src = './Light/tensorflow-light.png';
          socialIcons.keras.src = './Light/keras-light.png';
          socialIcons.git.src = './Light/git.png';
          socialIcons.mail.src = './Light/email.png';
          socialIcons.ct1.src = './Light/github-light.png'; 
          socialIcons.ct2.src = './Light/facebook.png';
      } else {
          icon.src = "assets/dark-mode.png"; // Biểu tượng cho chế độ tối
          rowIcon.src = './assets/arrow.png'; // Hình ảnh mũi tên khi chế độ sáng

          // Thay đổi hình ảnh cho các biểu tượng mạng xã hội
          socialIcons.linkedin.src = './assets/linkedin.png'; 
          socialIcons.github.src = './assets/github.png'; 
          socialIcons.facebook.src = './assets/facebook.png';
          socialIcons.cpu.src = './assets/cpu.png';
          socialIcons.tech.src = './assets/open-book.png';
          socialIcons.python.src = './assets/python.png';
          socialIcons.java.src = './assets/java.png';
          socialIcons.clang.src = './assets/c-.png';
          socialIcons.html.src = './assets/html.png';
          socialIcons.css.src = './assets/css-3.png';
          socialIcons.js.src = './assets/java-script.png';
          socialIcons.pytorch.src = './assets/pytorch.852x1024.png';
          socialIcons.tensorflow.src = './assets/tensorflow.914x1024.png';
          socialIcons.keras.src = './assets/checkmark.png';
          socialIcons.git.src = './assets/git.png';
          socialIcons.mail.src = './assets/email.png';
          socialIcons.ct1.src = './assets/github.png';
          socialIcons.ct2.src = './assets/facebook.png';
      }
  };
});

function scrollToTop() {
  window.scrollTo(0, 0);
}

document.addEventListener("DOMContentLoaded", function () {
  scrollToTop();
});