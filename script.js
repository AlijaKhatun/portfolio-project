//let menuIcon = document.querySelector(".menu-icon");
//let navDesk = document.querySelector(".nav-desk");
//let aboutBtn = document.querySelector(".about-btn button");
//let contents = document.querySelector(".content");

//---------------------------------------nav toggle page
const navListToggle = document.querySelector(".nav-list-toggle");
function showSidebar() {
  navListToggle.style.display = "flex";
}
function hiddenSidebar() {
  navListToggle.style.display = "none";
}
//------------------------------------------banner page
const text = document.querySelector(".text p");
text.innerHTML = text.innerText
  .split("")
  .map(
    (char, i) => `<span style="transform:rotate(${i * 9}deg)">${char}</span>`
  )
  .join("");

//about section
/*-----------

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("active");
  navDesk.classList.toggle("active");
  document.body.classList.toggle("open");
});

navDesk.addEventListener("click", () => {
  menuIcon.classList.remove("active");
  navDesk.classList.remove("active");
  document.body.classList.remove("open");
});

aboutBtn.forEach((button, index) => {
  button.addEventListener("click", () => {
    contents.forEach((content) => (content.style.display = "none"));
    contents[index].style.display = "block";
    aboutBtn.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
  });
});

var mixer = mixitup('.portfolio-gallery,{
selectors:{
target:'portfolio-box'
},
animation:{
duration:500
}
})
--------------*/
//----------------------------------------------portfolio page

const portfolioBox = document.querySelectorAll(".portfolio-box");
const filterButton = document.querySelector(".filter-buttons");
//define the filter portfolio gallery function
//function filterCard(e) {
//  console.log(e.target);
//}
// document
// .querySelector(".mixicup-control-active")
//.classList.remove("mixicup-control-active");
// console.log(e.target.value);
//}
//iterate over each portfolio gallery
//portfolioBox.forEach(box =>{
//box.classList.add("hide")
//check if the card matches the selected

//})

//add click event listener to each filter button
filterButton.addEventListener("click", (e) => {
  console.log(e);
  if (e.target.classList.contains("button")) {
    filterButton
      .querySelector(".mixicup-control-active")
      .classList.remove("mixicup-control-active");
    e.target.classList.add("mixicup-control-active");
    const filterValue = e.target.getAttribute("data-filter");
    console.log(filterValue);
    portfolioBox.forEach((item) => {
      if (item.classList.contains(filterValue) || filterValue === "all") {
        item.classList.add("show");
        item.classList.remove("hide");
      } else {
        item.classList.remove("show");
        item.classList.add("hide");
      }
    });
  }
});

//!-----------------blog page----------------------
/*
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "vertical",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});*/

//!-----------------CONTACT PAGE page----------------------
const counter = document.querySelectorAll(".counter");
const svgCircle = document.querySelectorAll("svg circle");
const counters = Array(counter.length);
console.log(counter, svgCircle, counters);
const intervals = Array(counters.length);
console.log(intervals);
counters.fill(0);
counter.forEach((number, index) => {
  console.log(number);
  intervals[index] = setInterval(() => {
    if (counters[index] === parseInt(number.dataset.num)) {
      clearInterval(counters[index]);
    } else {
      counters[index] += 1;
      number.innerHTML = counters[index] + "%";
      svgCircle[index].style.strokeDashoffset = Math.floor(
        472 - 440 * parseFloat(number.dataset.num / 100)
      );
    }
  }, 20);
});
