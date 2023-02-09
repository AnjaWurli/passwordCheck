export function togglePassword(event) {
  event.preventDefault();

  const input = document.querySelectorAll("input");
  const but = document.querySelector("button");

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
