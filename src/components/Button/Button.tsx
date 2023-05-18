import styles from "./Button.module.css";
import { ButtonProps } from "./Buttons.props";

const Button = ({ children, size, ...props }: ButtonProps) => {
  return (
    <>
      {size === "large" && <button className={styles.large}>{children}</button>}
      {size === "medium" && (
        <button className={styles.medium}>{children}</button>
      )}
      {size === "small" && <button className={styles.small}>{children}</button>}
    </>
  );
};

export default Button;
