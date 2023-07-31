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
            <button className={styles.btnLink1}>
            <svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className={styles.svg}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
							/>
						</svg>
						Service Provider
            </button>
          </Link>
          <Link href="">
            <button className={styles.btnLink2} >
            <svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className={styles.svg}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
							/>
						</svg>
						Client
            </button>
          </Link>

       </div>
     </div>
    </>
  );
}