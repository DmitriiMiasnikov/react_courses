import { useState } from "react";
import styles from "./App.module.scss";
import { Button } from "./components/Button/Button";
import { useTextStore } from "./store/textContext";

const App = () => {
  const textStore = useTextStore();
  const [text, setText] = useState("0");
  const buttonHandler = (button) => {
    if (["*", "/", "+", "-"].includes(button)) {
      if (!textStore.operator) {
        setText((text) => `${text} ${button} `);
        textStore.addOperator(button);
      }
    } else if (Number.isFinite(button) || ["(", ")", ","].includes(button)) {
      textStore.addDigit(button);
      setText((text) => {
        if (text === '0') return button.toString();
        return text.concat(button.toString());
      });
    } else if (button === "clear") {
      textStore.removeAllDigits();
      setText('0');
    }  else if (button === 'backspace') {
      textStore.removeDigit();
      if (text.slice(-1) !== ' ') setText(text => text.slice(0, -1));
      if (text.length === 1) setText('0');
    } else if (button === '=') {
      textStore.execution()
      setText(textStore.numberLeft);
    }
  };
  return (
    <div className={styles.app}>
      <div className={styles.inputWrap}>{text}</div>
      <div className={styles.buttonsWrap}>
        {textStore.buttons.map((el, i) => {
          return (
            <div key={i} className={styles.button}>
              <Button text={el} buttonHandler={buttonHandler} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
