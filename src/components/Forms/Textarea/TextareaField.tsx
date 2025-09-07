import styles from "./TextareaField.module.css";

const TextareaField = ({
  name,
  placeholder,
  error,
  defaultValue = "",
}: {
  name: string;
  placeholder: string;
  error: string[] | undefined;
  defaultValue?: string | number;
}) => {
  return (
    <div>
      <div className={styles.inputBox}>
        <textarea
          className={styles.input}
          id={name}
          name={name}
          defaultValue={defaultValue}
          required
        />

        <div className={styles.labelContainer}>
          <label className={styles.label}>{placeholder}</label>
        </div>
      </div>

      {error && <p className={styles.errors}>{error}</p>}
    </div>
  );
};

export default TextareaField;
