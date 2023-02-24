// let name = "tony";
// let upperCase = name.charAt(0).toUpperCase();
// let concatString = name.slice(1);
// console.log(upperCase.concat(concatString)); //Output --Tony

// let names = ["kris", "bob", "david", "andrew"];

// names.forEach((x) => {
//   let capitalizeFirstLetter = x.charAt(0).toUpperCase();
//   let concatString = x.slice(1);
//   console.log(capitalizeFirstLetter.concat(concatString));
// });

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  // console.log(links.classList);
  // console.log(links.classList.contains("random"));
  // console.log(links.classList.contains("links"));
  // if (links.classList.contains("show-links")) {
  //   links.classList.remove("show-links");
  // } else {
  //   links.classList.add("show-links");
  // }
  
  links.classList.toggle("show-links");
});
