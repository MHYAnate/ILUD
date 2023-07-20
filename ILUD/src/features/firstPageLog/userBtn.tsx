import { useState, useTransition } from "react";
import { UserButton } from "./btn";
import ExistingUser from "./existingUser";
import NewUser from "./newUser";
import styles from "./styles.module.css";
import Link from "next/link";

export default function UserBtnContainer() {
	const [isPending, startTransition] = useTransition();
	const [tab, setTab] = useState("");

	function selectTab(nextTab: string) {
		startTransition(() => {
			setTab(nextTab);
		});
	}

	return (
		<>
			<div className={styles.userBtn}>
				<div className={styles.innerBtnCover}>
					<UserButton
						isActive={tab === "NewUser"}
						onClick={() => selectTab("NewUser")}
					>
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
								d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
							/>
						</svg>
						New User
					</UserButton>
					<div className={styles.displayContent}>
						{tab === "NewUser" && <NewUser />}
					</div>
				</div>
				<div className={styles.innerBtnCover}>
					<UserButton
						isActive={tab === "ExistingUser"}
						onClick={() => selectTab("ExistingUser")}
					>
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
						Existing User
					</UserButton>
					<div className={styles.displayContent}>
						{tab === "ExistingUser" && <ExistingUser />}
					</div>
				</div>
			</div>
		</>
	);
}
