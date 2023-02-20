import { equalFn, longFn, numFn, specFn, lowFn, upFn } from "./checkWord.js";

Vue.createApp({
  data() {
    return {
      word1: "",
      word2: "",
      passwordType: [
        { inputType: "password", buttonText: "Show Passwords" },
        { inputType: "text", buttonText: "Hide Passwords" },
      ],
      wrong: "❌",
      right: "✅",
      checks: [
        { description: "Passwords are equal", id: "equal", check: "❌" },
        { description: "Lower Case Letters", id: "low", check: "❌" },
        { description: "Upper Case Letters", id: "up", check: "❌" },
        { description: "Contains Numbers", id: "num", check: "❌" },
        { description: "Contains Special Characters", id: "spec", check: "❌" },
        { description: "At least 10 characters long", id: "long", check: "❌" },
      ],
    };
  },
  methods: {
    togglePassword() {
      this.passwordType.reverse();
    },
    checkPassword() {
      console.log(this.word1, this.word2);
      if (equalFn(this.word1, this.word2)) {
        this.checks[0].check = this.right;

        const checkObj = this.checks;
        const right = this.right;

        function toCheck(x, y) {
          if (x) {
            return (checkObj[y].check = right);
          }
        }

        toCheck(longFn(this.word1), 5);

        for (let letter of this.word1) {
          toCheck(numFn(letter), 3);
          toCheck(specFn(letter), 4);
          toCheck(lowFn(letter), 1);
          toCheck(upFn(letter), 2);
        }
      } else {
        this.checks.forEach((check) => (check.check = this.wrong));
      }
    },
  },
}).mount("#app");
