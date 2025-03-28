import styles from "./styles.module.css";

type InputProps = {
  label?: string;
} & React.ComponentProps<"input">;

export const Input = ({ id, label, ...rest }: InputProps) => {
  return (
    <>
      {label && <label htmlFor={id}> {label} </label>}
      <input className={styles.input} id={id} {...rest} />
    </>
  );
};
