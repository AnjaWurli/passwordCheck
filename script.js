const input = document.querySelectorAll("input");
const but = document.querySelector("button");

function toggle(event) {
  event.preventDefault();
  for (let all of input) {
    if (all.type === "password") {
      all.type = "text";
      but.innerText = "Hide Passwords";
    } else {
      all.type = "password";
      but.innerText = "Show Passwords";
    }
  }
}

document.addEventListener("submit", toggle);

//
const equal = document.querySelector("#equal");
const low = document.querySelector("#low");
const up = document.querySelector("#up");
const num = document.querySelector("#num");
const long = document.querySelector("#long");

const right = "✅";
const wrong = "❌";

function checkAll(e) {
  let in1 = input[0].value;
  let in2 = input[1].value;

  if (in1 === in2 && in1.length !== 0) {
    equal.innerText = right;

    for (let letter of in1) {
      if (letter.toUpperCase() === letter.toLocaleLowerCase()) {
        num.innerText = right; //Sonderzeichen :(
      } else {
        if (letter === letter.toLowerCase()) {
          low.innerText = right;
        }
        if (letter === letter.toUpperCase()) {
          up.innerText = right;
        }
      }
    }
    if (in1.length >= 10) {
      long.innerText = right;
    }
  } else {
    equal.innerText = wrong;
    low.innerText = wrong;
    up.innerText = wrong;
    num.innerText = wrong;
    long.innerText = wrong;
  }
}

document.querySelector("form").addEventListener("keyup", checkAll);

/* if (letter === letter.toLowerCase()) {
        low.innerText = right;
      } else {
        low.innerText = wrong;
      }
      const toCheck = (x) => (x ? right : wrong);


      function toCheck(x) {
      if (x) {
        return right;
      } else {
        return wrong;
      }
    }
    const ifLow = "letter === letter.toLowerCase()";
    const ifUp = "letter === letter.toUpperCase()";
    low.innerText = `${toCheck(ifLow)}`;
    up.innerText = `${toCheck(ifUp)}`;
       
      */
