const sounds = [
  "clap",
  "hihat",
  "kick",
  "openhat",
  "ride",
  "snare",
  "tink",
  "tom",
];
const keys = ["1", "2", "Q", "W", "A", "S", "Z", "X"];
const audio = [];
const app = document.getElementById("app");

//CREATE  Audioelements and BUTTONS
sounds.forEach((element, index) => {
  const myAudio = new Audio(`sounds/${element}.wav`);
  //Storing audio in an array
  audio.push(myAudio);

  //create button
  const btn = document.createElement("button");
  btn.innerText = keys[index] + "\n" + element;
  //click event for button
  btn.addEventListener("click", () => {
    btn.style.backgroundColor = "blanchedalmond";
    playAudio(myAudio);
  });

  //mouseevents for drumkit
  btn.addEventListener("mousedown", () => {
    btn.style.backgroundColor = "red";
  });
  btn.addEventListener("mouseover", () => {
    btn.style.backgroundColor = "green";
    playAudio(myAudio);
  });
  btn.addEventListener("mouseout", () => {
    btn.style.backgroundColor = "blanchedalmond";
  });

  app.append(btn);
});
console.log(app);

//Play audio
function playAudio(music) {
  music.play();
}

//Adding keyboard events for drumkit
document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "1":
      playAudio(audio[0]);
      break;
    case "2":
      playAudio(audio[1]);
      break;
    case "q":
      playAudio(audio[2]);
      break;
    case "w":
      playAudio(audio[3]);
      break;
    default:
      console.log("Enter a valid Key");
      break;
  }
});

document.addEventListener("keyup", (event) => {
  switch (event.key) {
    case "a":
      playAudio(audio[4]);
      break;
    case "s":
      playAudio(audio[5]);
      break;
    case "z":
      playAudio(audio[6]);
      break;
    case "x":
      playAudio(audio[7]);
      break;
    default:
      console.log("Enter a valid Key");
      break;
  }
});
