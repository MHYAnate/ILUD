import styles from "./styles.module.css";
import Link from "next/link";
export default function ExistingUser() {
  let startTime = performance.now();

  while (performance.now() - startTime < 500) {
    // Do nothing for 0.5s per item to emulate extremely slow code
  }

  return (
    <>
     <div className={styles.existingUser}>
       <div className={styles.displayedBtn}>
       
          <Link href="">
            <button>
            </button>
          </Link>
        
          <Link href="">
            <button>
            </button>
          </Link>

       </div>
     </div>
    </>
  );
}