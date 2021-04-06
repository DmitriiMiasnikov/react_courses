export function createTextStores() {
  return {
    numberLeft: "",
    numberRight: "",
    operator: "",
    result: "",
    buttons: [
      "",
      "backspace",
      "clear",
      "*",
      7,
      8,
      9,
      "/",
      4,
      5,
      6,
      "+",
      1,
      2,
      3,
      "-",
      "",
      0,
      ".",
      "=",
    ],
    buttonsScientific: ["1/x", "^2", "^", "sqrt", "log", "ln", "pi", "e"],
    addDigit(number) {
      if (!this.operator) {
        this.numberLeft = this.numberLeft + number.toString();
      } else {
        this.numberRight = this.numberRight + number.toString();
      }
    },
    addPi() {
      if (!this.operator) {
        this.numberLeft = "3.14159";
      } else {
        this.numberRight = "3.14159";
      }
    },
    addE() {
      if (!this.operator) {
        this.numberLeft = "2.71828";
      } else {
        this.numberRight = "2.71828";
      }
    },
    addOperator(operator) {
      this.operator = operator;
    },
    removeDigit() {
      if (!this.operator) {
        this.numberLeft = this.numberLeft.slice(0, -1);
      } else {
        this.numberRight = this.numberRight.slice(0, -1);
      }
    },
    removeAllDigits() {
      this.numberLeft = "";
      this.numberRight = "";
      this.operator = "";
      this.result = "";
    },
    execution() {
      const numberLeft = Number(this.numberLeft);
      const numberRight = Number(this.numberRight);
      switch (this.operator) {
        case "+":
          this.result = numberLeft + numberRight;
          break;
        case "-":
          this.result = numberLeft - numberRight;
          break;
        case "/":
          this.result = numberLeft / numberRight;
          break;
        case "*":
          this.result = numberLeft * numberRight;
          break;
        case "^":
          this.result = Math.pow(numberLeft, numberRight);
          break;
        default:
          break;
      }
      this.numberLeft = this.result.toString();
      this.numberRight = "";
      this.operator = "";
      this.result = "";
    },
    executionScientific(operator) {
      const numberLeft = Number(this.numberLeft);
      switch (operator) {
        case "1/x":
          this.result = 1 / numberLeft;
          break;
        case "sqrt":
          this.result = Math.sqrt(numberLeft);
          break;
        case "^2":
          this.result = Math.pow(numberLeft, 2);
          break;
        case "ln":
          this.result = Math.log(numberLeft);
          break;
        case "log":
          this.result = Math.log10(numberLeft);
          break;
        default:
          break;
      }
      this.numberLeft = this.result.toString();
      this.numberRight = "";
      this.operator = "";
      this.result = "";
    },
  };
}
