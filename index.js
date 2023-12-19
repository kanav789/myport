const textEl = document.getElementById("text");
const text = "Hello, I'm a full stack developer.";
let idx = 1;
writeText();
function writeText() {
  textEl.innerText = text.slice(0, idx);

  idx++;
  if (idx > text.length) {
    idx = 1;
  }

  setTimeout(writeText, 250);
}

// to- top scroll down

const toTop = document.getElementById("to-top");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

// hameburger
// const cross = document.querySelector("#cross");
// const navelements = document.querySelector("#navelements");
// cross.addEventListener("click", function () {
//   navelements.classList.add("active");
// });

document.getElementById("cross").addEventListener("click", function () {
  const container = document.querySelector("#navelements");
  container.classList.toggle("hidden");
});
