import styles from "./Button.module.css";
import { ButtonProps } from "./Buttons.props";

const Button = ({ children, size, ...props }: ButtonProps) => {
  return (
    <>
      {size === "large" && (
        <button {...props} className={styles.large}>
          {children}
        </button>
      )}
      {size === "medium" && (
        <button {...props} className={styles.medium}>
          {children}
        </button>
      )}
      {size === "small" && (
        <button {...props} className={styles.small}>
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
