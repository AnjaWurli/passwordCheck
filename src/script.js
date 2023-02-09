import { togglePassword } from "./togglePw.js";

document.addEventListener("submit", togglePassword);

import { checkAll } from "./checkPw.js";

document.querySelector("form").addEventListener("keyup", checkAll);
