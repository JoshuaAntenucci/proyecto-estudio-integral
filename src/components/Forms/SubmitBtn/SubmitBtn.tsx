import styles from "./SubmitBtn.module.css";

import Spinner from "@/components/Spinner/Spinner";

const SubmitBtn = ({ pending, title }: { pending: boolean; title: string }) => {
  return (
    <div className={styles.btnContainer}>
      <button disabled={pending} type="submit" className={styles.btn}>
        {pending ? <Spinner insideBtn whiteColor /> : title}
      </button>
    </div>
  );
};

export default SubmitBtn;
