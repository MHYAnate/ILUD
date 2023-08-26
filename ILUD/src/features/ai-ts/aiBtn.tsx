import { useState, useTransition } from "react";
import { TabButton } from "./btn";
import AiInterface from "./aiInterface";
import styles from "./styles.module.css";

export default function Ai() {
	const [isPending, startTransition] = useTransition();
	const [tab, setTab] = useState("");

	function selectTab(nextTab: string) {
		startTransition(() => {
			setTab(nextTab);
		});
	}

	return (
		<>
			<div className={styles.ai}>
        {tab === "Ask_Ai" && <AiInterface />}
      </div>
			<TabButton
				onClick={() => (tab === "Ask_Ai" ? selectTab("") : selectTab("Ask_Ai"))}
			>
			  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles.svg1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
	      Ask_Ai
			</TabButton>
		</>
	);
}
