import styles from "./Button.module.scss";
import classnames from "classnames";
import { useTextStore } from './../../store/textContext';

export const Button = ({ text, buttonHandler }) => {
  const textStore = useTextStore();
  return (
    <div
      className={classnames(styles.button, {
        [styles.number]: Number.isFinite(text),
        [styles.exectute]: text === '=',
        [styles.inactive]: text === '' || (text === '=' && !textStore.operator)
      })}
      onClick={() => buttonHandler(text)}
    >
      {text}
    </div>
  );
};
