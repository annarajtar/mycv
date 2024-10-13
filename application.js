let letterIndex = 0;
let arrayIndex = 0;
const positions = ['Quality Assurance Engineer', 'Automation Tester'];
var speed = 150;

function typeWriter() {
  if (letterIndex < positions[arrayIndex].length) {
    document.getElementById("demo").innerHTML += positions[arrayIndex].charAt(letterIndex);
    letterIndex++;
    setTimeout(typeWriter, speed);
  } else {
    setNewArrayIndex();
  }
}

function setNewArrayIndex() {
    if (positions[arrayIndex + 1]) {
        arrayIndex++;
    } else {
        arrayIndex = 0;
    }
    document.getElementById("demo").innerHTML = "";
    letterIndex = 0;
    setTimeout(typeWriter, speed);
}

typeWriter();