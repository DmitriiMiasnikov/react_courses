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
    buttonsScientific: ["1/x", "", "", ""],
    addDigit(number) {
      if (!this.operator) {
        this.numberLeft = this.numberLeft + number.toString();
      } else {
        this.numberRight = this.numberRight + number.toString();
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
