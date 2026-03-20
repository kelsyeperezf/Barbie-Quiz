let scores = {
  original: 0,
  seventies: 0,
  twoThousands: 0,
  modern: 0
};

let currentQuestion = 1;

function startQuiz() {
  document.getElementById("startScreen").style.display = "none";
  document.getElementById("quiz").style.display = "block";
}
function choose(type) {
  scores[type]++;

  document.getElementById("q" + currentQuestion).style.display = "none";

  currentQuestion++;

  if (currentQuestion <= 5) {
    document.getElementById("q" + currentQuestion).style.display = "block";
  } else {
    showResult();
  }
}

function showResult() {
  let maxType = Object.keys(scores).reduce((a, b) =>
    scores[a] > scores[b] ? a : b
  );

  let resultText = "";

  if (maxType === "original") {
    resultText = `
    🎀 You are Original Barbie! <br><br>
    You are elegant, timeless, and effortlessly classy. You appreciate tradition, beauty, and sophistication. 
    People admire your grace and your ability to stay calm in any situation. You have a classic charm that never goes out of style.
    `;
  } else if (maxType === "seventies") {
    resultText = `
    🌼 You are 70s Barbie! <br><br>
    You are free-spirited, calm, and connected to nature. You value peace, creativity, and living in the moment. 
    Your energy is relaxed and authentic, and people feel comfortable and happy around you.
    `;
  } else if (maxType === "twothousands") {
    resultText = `
    💿 You are 2000s Barbie! <br><br>
    You are confident, glamorous, and full of energy. You love trends, fun, and expressing yourself. 
    You light up every room you walk into and aren’t afraid to stand out and shine.
    `;
  } else {
    resultText = `
    ✨ You are Modern Barbie! <br><br>
    You are strong, independent, and empowered. You believe in growth, diversity, and being your true self. 
    You inspire others with your confidence and your determination to succeed.
    `;
  }

  document.getElementById("result").innerHTML = resultText;
  document.getElementById("restart").style.display = "block";
}

function restartQuiz() {
  scores = {
    original: 0,
    seventies: 0,
    twothousands: 0,
    modern: 0
  };

  currentQuestion = 1;

  document.getElementById("result").innerHTML = "";
  document.getElementById("restart").style.display = "none";

  // Hide all questions except q1
  document.getElementById("q2").style.display = "none";
  document.getElementById("q3").style.display = "none";
  document.getElementById("q4").style.display = "none";
  document.getElementById("q5").style.display = "none";

  document.getElementById("q1").style.display = "block";
}