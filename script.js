document.getElementById('spinBtn').addEventListener('click', () => {
  const option1 = document.getElementById('option1').value.trim();
  const option2 = document.getElementById('option2').value.trim();
  const option3 = document.getElementById('option3').value.trim();

  const options = [option1, option2, option3].filter(opt => opt !== "");

  if (options.length < 2) {
    document.getElementById('result').innerText = "Please enter at least 2 options.";
    return;
  }

  const selected = options[Math.floor(Math.random() * options.length)];
  document.getElementById('result').innerText = `🎯 Selected: ${selected}`;
});
