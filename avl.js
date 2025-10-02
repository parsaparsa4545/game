window.addEventListener("scroll", function () {
  let box = document.querySelector(".golole");
  

  // وقتی اسکرول از 100 پیکسل بیشتر بشه
  if (window.scrollY > 200) {
    box.classList.add("active");
  } else {
    box.classList.remove("active");
  }
});
window.addEventListener("scroll", function () {
  let box = document.querySelector(".golole2");
  

  // وقتی اسکرول از 100 پیکسل بیشتر بشه
  if (window.scrollY > 200) {
    box.classList.add("active");
  } else {
    box.classList.remove("active");
  }
});
