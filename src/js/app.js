import "../style/main.css";
import "../style/font-awesome-4.7.0/css/font-awesome.min.css";

const modeBtn = document.querySelector(".btn-mode");

const topBtn = document.querySelector(".top-btn");

if(!localStorage.getItem("mode")) {
  localStorage.setItem("mode", "light");
}

document.body.className = localStorage.getItem("mode")

let isDark = localStorage.getItem("mode") === "dark" ? true : false;

if(isDark) {
  modeBtn.innerHTML = `<i class="fa fa-sun-o" aria-hidden="true"></i>`
}else {
  modeBtn.innerHTML = `<i class="fa fa-moon-o" aria-hidden="true"></i>`
}

modeBtn.addEventListener("click", (e)=> {
  isDark = !isDark;
  if(isDark) {
    modeBtn.innerHTML = `<i class="fa fa-sun-o" aria-hidden="true"></i>`;
  }else {
    modeBtn.innerHTML = `<i class="fa fa-moon-o" aria-hidden="true"></i>`;
  }
  localStorage.setItem("mode", isDark ? "dark" : "light");

  document.body.className = localStorage.getItem("mode");
});

window.addEventListener("scroll", ()=> {
  if(window.pageYOffset >= 360) {
    topBtn.classList.add("active");
  } else {
    topBtn.classList.remove("active");
  }
})

topBtn.addEventListener("click", ()=> {
  window.scrollTo(0, 0)
})