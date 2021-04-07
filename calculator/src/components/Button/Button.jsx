import styles from "./Button.module.scss";
import classnames from "classnames";
import { useTextStore } from "./../../store/textContext";
import backspaceSvg from "./../../assets/images/backspace.svg";

export const Button = ({ text, buttonHandler }) => {
  const textStore = useTextStore();
  return (
    <div
      className={classnames(styles.button, {
        [styles.number]: Number.isFinite(text),
        [styles.exectute]: text === "=",
        [styles.inactive]: text === "" || (text === "=" && !textStore.operator),
      })}
      onClick={() => buttonHandler(text)}
    >
      {text === "backspace" ? <img src={backspaceSvg} alt="" /> : text}
    </div>
  );
};
