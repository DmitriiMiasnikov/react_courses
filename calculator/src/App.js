import { useState } from "react";
import styles from "./App.module.scss";
import { Button } from "./components/Button/Button";
import { useTextStore } from "./store/textContext";
import classnames from "classnames";

const App = () => {
  const textStore = useTextStore();
  const [text, setText] = useState("0");
  const [openScientificBlock, setOpenScientificBlock] = useState(false);
  const buttonHandler = (button) => {
    if (["*", "/", "+", "-", "^"].includes(button)) {
      if (!textStore.operator) {
        setText((text) => `${text} ${button} `);
        textStore.addOperator(button);
      } else {
        textStore.execution();
        textStore.addOperator(button);
        setText(`${textStore.numberLeft} ${button} `);
      }
    } else if (Number.isFinite(button) || ["pi", "e", "."].includes(button)) {
      if (["pi", "e"].includes(button)) {
        switch (button) {
          case "e":
            textStore.addE();
            setText("2.71828");
            break;
          case "pi":
            textStore.addPi();
            setText("3.14159");
            break;
          default:
            break;
        }
      } else {
        textStore.addDigit(button);
        setText((text) => {
          if (text === "0") return button.toString();
          return text.concat(button.toString());
        });
      }
    } else if (button === "clear") {
      textStore.removeAllDigits();
      setText("0");
    } else if (button === "backspace") {
      textStore.removeDigit();
      if (text.slice(-1) !== " ") setText((text) => text.slice(0, -1));
      if (text.length === 1) setText("0");
    } else if (button === "=") {
      textStore.execution();
      setText(textStore.numberLeft);
    } else if (["1/x", "sqrt", "^2", "ln", "log"].includes(button)) {
      textStore.executionScientific(button);
      setText(textStore.numberLeft);
    }
  };

  const openScientificHandler = () => {
    setOpenScientificBlock((show) => !show);
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
      <div className={styles.scientificWrap}>
        <div
          className={classnames(styles.buttonsScientificWrap, {
            [styles.hide]: !openScientificBlock,
          })}
        >
          {textStore.buttonsScientific.map((el, i) => {
            return (
              <div key={i} className={styles.button}>
                <Button text={el} buttonHandler={buttonHandler} />
              </div>
            );
          })}
        </div>
        <div
          className={styles.buttonOpenScientific}
          onClick={() => openScientificHandler()}
        >
          {`${openScientificBlock ? "close" : "open"}`} scientific
        </div>
      </div>
    </div>
  );
};

export default App;
