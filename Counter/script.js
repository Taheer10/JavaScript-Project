const result = document.querySelector(".result");
const increase = document.querySelector(".increase");
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
let count = 0;

increase.addEventListener("click", () => {
  count++;
  result.innerHTML = count;
  // console.log(count);
});

decrease.addEventListener("click", () => {
  count--;
  result.innerHTML = count;
  // console.log(count);
});

reset.addEventListener("click", () => {
  count = 0;
  result.innerHTML = count;

  // console.log(count);
});

// <main>
//   <div class="container">
//     <h1>counter</h1>
//     <span id="value">0</span>
//     <div class="button-container">
//       <button class="btn decrease">decrease</button>
//       <button class="btn reset">reset</button>
//       <button class="btn increase">increase</button>
//     </div>
//   </div>
// </main>;

// let count = 0;
// // select value and buttons
// const value = document.querySelector("#value");
// const btns = document.querySelectorAll(".btn");

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const styles = e.currentTarget.classList;
//     if (styles.contains("decrease")) {
//       count--;
//     } else if (styles.contains("increase")) {
//       count++;
//     } else {
//       count = 0;
//     }

//     if (count > 0) {
//       value.style.color = "green";
//     }
//     if (count < 0) {
//       value.style.color = "red";
//     }
//     if (count === 0) {
//       value.style.color = "#222";
//     }
//     value.textContent = count;
//   });
// });
