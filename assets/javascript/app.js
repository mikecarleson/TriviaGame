function submitAnswers() {
  var total = 5;
  var score = 0;

  var q1 = document.forms["quizForm"]["q1"].value;
  var q2 = document.forms["quizForm"]["q2"].value;
  var q3 = document.forms["quizForm"]["q3"].value;
  var q4 = document.forms["quizForm"]["q4"].value;
  var q5 = document.forms["quizForm"]["q5"].value;

  var answers = ["b", "a", "d", "a", "b"];

  if (q1 == answers[0]) {
    score++;
  }
  if (q2 == answers[1]) {
    score++;
  }
  if (q3 == answers[2]) {
    score++;
  }
  if (q4 == answers[3]) {
    score++;
  }
  if (q5 == answers[4]) {
    score++;
  }

  var results = document.getElementById("results");
  results.innerHTML = "You scored " + score + "  out of " + total;

  return false;
}

$(
  (function() {
    var max_time = 15;
    var cinterval;

    function countdown_timer() {
      max_time--;
      document.getElementById("display").innerHTML = max_time;
      if (max_time <= 0) {
        clearInterval(cinterval);
        submitAnswers();
      }
    }

    $("#start").click(function() {
      if (cinterval) return;
      cinterval = setInterval(countdown_timer, 1500);
    });
  })()
);
