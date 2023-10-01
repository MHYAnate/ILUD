'use client'
import styles from "./styles.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Ilud = () => {
	const router = useRouter();
	const ccc = "asd"
	return (
		<>
			<div className={styles.cover} onClick={()=>router.push(`/client/${ccc}`) }>
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
