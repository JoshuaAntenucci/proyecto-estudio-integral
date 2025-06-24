import styles from "./Spinner.module.css";

const Spinner = ({
  insideBtn = false,
  whiteColor = false,
}: {
  insideBtn?: boolean;
  whiteColor?: boolean;
}) => {
  return (
    <span
      className={`${styles.loader}${insideBtn ? ` ${styles.insideBtn}` : ""}${
        whiteColor ? ` ${styles.whiteColor}` : ""
      }`}
    />
  );
};

export default Spinner;
