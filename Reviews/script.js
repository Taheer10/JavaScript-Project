const reviews = [
  {
    id: 1,
    name: "Tony Stark",
    job: "Protector",
    img: "https://cdn-icons-png.flaticon.com/512/86/86494.png",
    text: "I Love you 3000",
  },
  {
    id: 2,
    name: "Chris Evans",
    job: "Captain",
    img: "https://cdn-icons-png.flaticon.com/128/2234/2234489.png",
    text: "It is gonna work else i don't know what i am gonna do if it doesn't work",
  },
  {
    id: 3,
    name: "Thor Odinson",
    job: "The Almighty Thor",
    img: "https://cdn-icons-png.flaticon.com/128/4492/4492698.png",
    text: "We are asguardians",
  },
  {
    id: 4,
    name: "Bruce Banner",
    job: "Smasher",
    img: "https://t3.ftcdn.net/jpg/03/27/72/82/240_F_327728202_lJwNCUaAtBNmPODS8CKqwHkN5CNv2SLe.jpg",
    text: "I hate stairs",
  },
  {
    id: 5,
    name: "Chadwick Boseman",
    job: "The Black Panther",
    img: "https://cdn-icons-png.flaticon.com/128/2526/2526984.png",
    text: "Wakanda Forever",
  },
];

const buttonGenerateDetail = document.querySelector(".generate");
const id = document.querySelector(".id");
const imageDiv = document.querySelector(".image");
const name = document.querySelector(".name");
const jobTitle = document.querySelector(".job");
const text = document.querySelector(".text");

buttonGenerateDetail.addEventListener("click", () => {
  let randomSelection = Math.floor(Math.random() * reviews.length);
  let randomId = reviews[randomSelection].id;
  let randomName = reviews[randomSelection].name;
  let randomJob = reviews[randomSelection].job;
  let randomImage = reviews[randomSelection].img;
  let randomText = reviews[randomSelection].text;

  console.log(randomId, randomName, randomJob, randomImage, randomText);
  id.textContent = randomId;
  imageDiv.src = randomImage;
  name.textContent = randomName;
  jobTitle.textContent = randomJob;
  text.textContent = randomText;
});

let currentItem = 0;

window.addEventListener("DOMContentLoaded", () => {
  commonData();
});

const buttonNextandPrev = document.querySelectorAll(".btn");

buttonNextandPrev.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    const st = e.currentTarget;
    if (styles.contains("next")) {
      if (currentItem === 4) {
        currentItem = 0;
        commonData();
      } else {
        currentItem++;
        commonData();
      }
    } else if (styles.contains("prev")) {
      if (currentItem === 0) {
        currentItem = 4;
        commonData();
      } else {
        currentItem--;
        commonData();
      }
    }
  });
});
console.log(buttonNextandPrev);

function commonData() {
  const item = reviews[currentItem];
  id.textContent = item.id;
  imageDiv.src = item.img;
  name.textContent = item.name;
  jobTitle.textContent = item.job;
  text.textContent = item.text;
}
