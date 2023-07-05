import styles from "./styles.module.css";
import Link from "next/link";

const Ilud = () => {
	return (
		<>
			<div className={styles.cover}>
				<div className={styles.ilud}>
					<span>I</span>
					<span>L</span>
					<span>U</span>
					<span className={styles.mix}>D</span>
				</div>
				<div className={styles.ilinkupdirect}>
					<span>I</span> <span>Link Up Direct</span>
				</div>
			</div>
		</>
	);
};

export default Ilud;
