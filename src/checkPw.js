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

  if (in1 === in2 && in1.length !== 0) {
    equal.innerText = right;

    function toCheck(x, y) {
      if (x) {
        return (y.innerText = right);
      }
    }

    const ifLong = in1.length >= 10;
    toCheck(ifLong, long);

    for (let letter of in1) {
      const ifNum = !isNaN(letter) && letter !== " ";
      toCheck(ifNum, num);

      const ifSpec = letter.toLowerCase() === letter.toUpperCase() && !ifNum;
      toCheck(ifSpec, spec);

      const ifLow = letter === letter.toLowerCase() && !ifNum && !ifSpec;
      const ifUp = letter === letter.toUpperCase() && !ifNum && !ifSpec;
      toCheck(ifLow, low);
      toCheck(ifUp, up);
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
