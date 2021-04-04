import styles from "./Button.module.scss";
import classnames from "classnames";

export const Button = ({ text, buttonHandler }) => {
  return (
    <div
      className={classnames(styles.button, {
        [styles.number]: Number.isFinite(text),
        [styles.exectute]: text === '=',
        [styles.empty]: text === ''
      })}
      onClick={() => buttonHandler(text)}
    >
      {text}
    </div>
  );
};
