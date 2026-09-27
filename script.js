// Replace with your anniversary date in MMDD format (e.g., "1024" for October 24)
const CORRECT_PASSCODE = "1807"; 
let currentInput = "";

function pressKey(num) {
  if (currentInput.length < 4) {
    currentInput += num;
    updateDots();

    if (currentInput.length === 4) {
      setTimeout(checkPasscode, 200);
    }
  }
}

function updateDots() {
  for (let i = 0; i < 4; i++) {
    const dot = document.getElementById(`dot-${i}`);
    if (i < currentInput.length) {
      dot.classList.add("filled");
    } else {
      dot.classList.remove("filled");
    }
  }
}

function checkPasscode() {
  if (currentInput === CORRECT_PASSCODE) {
    document.getElementById("lock-screen").style.display = "none";
    document.getElementById("main-content").style.display = "flex";
  } else {
    document.getElementById("error-msg").innerText = "Incorrect passcode, try again!";
    currentInput = "";
    updateDots();
    setTimeout(() => {
      document.getElementById("error-msg").innerText = "";
    }, 2000);
  }
}

function switchTab(index) {
  const buttons = document.querySelectorAll(".tab-btn");
  const contents = document.querySelectorAll(".tab-content");

  buttons.forEach((btn, i) => {
    if (i === index) {
      btn.classList.add("active");
      contents[i].classList.add("active");
    } else {
      btn.classList.remove("active");
      contents[i].classList.remove("active");
    }
  });
}