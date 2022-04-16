// console.log("Pershendetje nga PBCA");

let result = { firstName: "Behar", lastName: "Vershevci" };

let firstName = result.firstName;
let lastName = result.lastName;

let fullName = firstName + " " + lastName;

let dbFullName;

// console.log(fullName);

// let header = document.getElementsByClassName("open-nav");

let header = document.querySelector(".hero-header-description");

// Create inline Style on selected html element
header.addEventListener("mouseover", function () {
  //   header.textContent = fullName;
  header.style.backgroundColor = "rgb(230 126 34 / 10%)";
  //   header.style.padding = "2rem";
  //   dbFullName = header.textContent;
  console.log(dbFullName);
});

let navButton = document.querySelector(".mobile-nav");
let navHeader = document.querySelector("#header");

console.log(navButton);
console.log(navHeader);

navButton.addEventListener("click", function () {
  navHeader.classList.toggle("open-nav");
});

let btnHero = document.querySelector(".btn.btn-lg.btn-primary.mr-sm");

btnHero.addEventListener("click", function () {
  btnHero.classList.add("btn-rotate");
});
