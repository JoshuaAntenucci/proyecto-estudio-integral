import styles from "./FormField.module.css";

const FormField = ({
  name,
  placeholder,
  error,
  type = "text",
  defaultValue = "",
}: {
  name: string;
  placeholder: string;
  error: string[] | undefined;
  type?: string;
  defaultValue?: string | number;
}) => {
  return (
    <div>
      <div className={styles.inputBox}>
        <input
          className={styles.input}
          type={type}
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

export default FormField;
