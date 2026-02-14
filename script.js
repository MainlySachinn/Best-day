let noTexts = [
  "please don't do it 😭",
  "ek chance do 🥺",
  "please babu 💔",
  "mere bina acha nahi lagega 😞",
  "myyyyyyyyyyyy cutuuuuuuuuuuu lilllllllllllllll chocooooooooooooo no 😭"
];

let count = 0;

function noClick(){
  const noBtn = document.getElementById("noBtn");
  const yesBtn = document.getElementById("yesBtn");

  noBtn.innerText = noTexts[count % noTexts.length];
  count++;

  // DOUBLE yes button size
  let size = parseFloat(getComputedStyle(yesBtn).fontSize);
  yesBtn.style.fontSize = (size * 1.4) + "px";
  yesBtn.style.padding = "14px 30px";
}

function goLove(){
  window.location.href = "valentine.html";
}

function openEnvelope(){
  document.querySelector(".envelope").classList.add("open");
}
/* EMOJI RAIN LOGIC */
const emojis = ["💗","💖","💕","💘","💞","❤️","✨","⭐","🌸"];
const rainContainer = document.getElementById("emoji-rain");

for(let i = 0; i < 420; i++){   // 🔥 400+ emojis
  const span = document.createElement("span");
  span.classList.add("emoji");
  span.innerText = emojis[Math.floor(Math.random()*emojis.length)];

  span.style.left = Math.random() * 100 + "vw";
  span.style.fontSize = (14 + Math.random()*22) + "px";
  span.style.animationDuration = (4 + Math.random()*6) + "s";
  span.style.animationDelay = Math.random() * 5 + "s";

  rainContainer.appendChild(span);
}
function openEnvelope(){
  const env = document.querySelector(".envelope");
  env.classList.add("open");

  // remove open text
  const text = document.querySelector(".open-text");
  if(text) text.style.display = "none";

  // show letter
  const letter = env.querySelector(".letter");
  letter.classList.remove("hidden");
}