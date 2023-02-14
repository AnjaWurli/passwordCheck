import { init } from "./togglePw.js";

init();

import { checkAll } from "./checkPw.js";

document.querySelector("form").addEventListener("keyup", checkAll);
