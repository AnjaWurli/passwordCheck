import { equalFn, longFn, numFn, specFn, lowFn, upFn } from "./checkWord.js";

export function checkAll() {
  const input = document.querySelectorAll("input");

  const equal = document.querySelector("#equal");
  const low = document.querySelector("#low");
  const up = document.querySelector("#up");
  const num = document.querySelector("#num");
  const spec = document.querySelector("#spec");
  const long = document.querySelector("#long");

  const right = "✅";
  const wrong = "❌";

  let in1 = input[0].value;
  let in2 = input[1].value;

  if (equalFn(in1, in2)) {
    equal.innerText = right;

    function toCheck(x, y) {
      if (x) {
        return (y.innerText = right);
      }
    }

    toCheck(longFn(in1), long);

    for (let letter of in1) {
      toCheck(numFn(letter), num);
      toCheck(specFn(letter), spec);
      toCheck(lowFn(letter), low);
      toCheck(upFn(letter), up);
    }
  } else {
    equal.innerText = wrong;
    low.innerText = wrong;
    up.innerText = wrong;
    num.innerText = wrong;
    spec.innerText = wrong;
    long.innerText = wrong;
  }
}
