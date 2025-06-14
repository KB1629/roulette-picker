let degree = 0;

document.getElementById("spinBtn").addEventListener("click", () => {
  const opt1 = document.getElementById("option1").value.trim() || "Option 1";
  const opt2 = document.getElementById("option2").value.trim() || "Option 2";
  const opt3 = document.getElementById("option3").value.trim() || "Option 3";

  // Set text in wheel
  document.getElementById("opt1").innerText = opt1;
  document.getElementById("opt2").innerText = opt2;
  document.getElementById("opt3").innerText = opt3;

  const spinner = document.getElementById("spinner");
  
  // Random spin between 3 and 6 full turns
  const randomDeg = Math.floor(Math.random() * 360 + 1080);
  degree += randomDeg;
  spinner.style.transform = `rotate(${degree}deg)`;

  // After spin, show result
  setTimeout(() => {
    const normalized = degree % 360;
    let selected = "";

    if (normalized >= 0 && normalized < 120) selected = opt1;
    else if (normalized >= 120 && normalized < 240) selected = opt2;
    else selected = opt3;

    document.getElementById("result").innerText = `🎯 Selected: ${selected}`;
  }, 4000); // same as transition duration
});
