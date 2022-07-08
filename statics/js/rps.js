const btn = document.querySelector(".btn");
btn.addEventListener("click", replay);
function replay() {
  window.location.href =
    "/index.html";
}

function rpsgame(yourchoice) {
  console.log(yourchoice);
  var humanchoice, botchoice;
  humanchoice = yourchoice.id;

  botchoice = numtochoice(randtorpsint());
  console.log("the bot choice is " + botchoice);
  result = decidewinner(humanchoice, botchoice);
  console.log(result);
  massage = finalmassege(result);
  console.log(massage);
  rpsfrontend(yourchoice.id, botchoice, finalmassege);
}
function randtorpsint() {
  return Math.floor(Math.random() * 3);
}
function numtochoice(number) {
  return ["rock", "paper", "seissors"][number];
}
function decidewinner(yourchoice, computerchoice) {
  var rpsdatabase = {
    rock: { seissors: 1, paper: 0, rock: 0.5 },
    paper: { seissors: 0, paper: 0.5, rock: 1 },
    seissors: { seissors: 0.5, paper: 1, rock: 0 },
  };
  let yourscore = rpsdatabase[yourchoice][computerchoice];
  let computerscore = rpsdatabase[computerchoice][yourchoice];
  return [yourscore, computerscore];
}
function finalmassege([yourscore, computerchoice]) {
  if (yourscore === 0) {
    return { massage: "you lost!", color: "red" };
  } else if (yourscore === 0.5) {
    return { massage: "its tied", color: "yellow" };
  } else {
    return { massage: "You won", color: "blue" };
  }
}
function rpsfrontend(humanimgchoice, computerimgchoice, finalmassege) {
  var imgdatabase = {
    rock: document.getElementById("rock").src,
    paper: document.getElementById("paper").src,
    seissors: document.getElementById("seissors").src,
  };
  document.getElementById("rock").remove();
  document.getElementById("paper").remove();
  document.getElementById("seissors").remove();
  let div = "div";

  var humandiv = document.createElement(div);
  var massegediv = document.createElement(div);
  var botdiv = document.createElement(div);
  humandiv.innerHTML =
    "<img src='" + imgdatabase[humanimgchoice] + "'height=150px width=150px;'>";
  document.getElementById("two").appendChild(humandiv);
  massegediv.innerHTML =
    "<h2 style='color:" +
    massage["color"] +
    "; font-size: 60px; padding : 30px;'>" +
    massage["massage"] +
    "</h2>";
  document.getElementById("two").appendChild(massegediv);
  botdiv.innerHTML =
    "<img src='" +
    imgdatabase[computerimgchoice] +
    "'height=150px width=150px;'>";
  document.getElementById("two").appendChild(botdiv);
}
