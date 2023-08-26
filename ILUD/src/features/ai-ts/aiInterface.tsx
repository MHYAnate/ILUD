import { useRef, useEffect, useState } from "react";
import styles from "./styles.module.css";

const AiInterface: React.FC = () => {

	let startTime = performance.now();

  while (performance.now() - startTime < 500) {
    // Do nothing for 500 ms per item to emulate extremely slow code
  }
	const API_KEY = "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";

	const API_URL = "https://api.openai.com/v1/chat/completions";

	const promtInput = useRef<HTMLTextAreaElement | null>(null);
	const startBtn = useRef<HTMLButtonElement | null>(null);
	const stopBtn = useRef<HTMLButtonElement | null>(null);
	const resultTest = useRef<HTMLDivElement | null>(null);

  const [btnVisible, setBtnVisible] = useState(false);

  let controller: AbortController | null = null; // AbortController instance

	const handleToggleBtn = () => {
		setBtnVisible((prevBtnVisible) => !prevBtnVisible);
	};

  const handleStopClick = () => {
    if (controller) {
      controller.abort(); // Abort the ongoing fetch request
      controller = null; // Reset the controller
      resultTest.current= null
    }
  };

 

	const generate = async (): Promise<void> => {
   if(!promtInput.current?.value) {
    alert("please enter a prompt.")
   }

   if(startBtn.current){
   startBtn.current?.disabled 
  }

  if(resultTest.current){
    resultTest.current.innerText="Generating..."
  }

  controller = new AbortController();
 
		try {
			const response = await fetch(API_URL, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${API_KEY}`,
				},
        signal: controller.signal,
				body: JSON.stringify({
					model: "gpt-3.5-turbo",
					messages: [{ role: "assistant", content: promtInput.current?.value }],
				}),
			});

      if (controller.signal.aborted && resultTest.current) {
        resultTest.current.innerText="Ask_Ai is powered by chat-gpt 3.5-turbo to keep you up to speed";
        return;
      }
     
			const data = await response.json();
			console.log(data);
			if (resultTest.current) {
				resultTest.current.innerText = data.choices[0].message.content;
			}
      if(resultTest.current && resultTest.current.innerText === "Generating..."){
        setBtnVisible(true);
      }else{
        setBtnVisible(false);
      }
		} catch (error) {
			console.error("Error fetching data:", error);
		} finally {
      controller.abort();
    }
	};



	useEffect(() => {
		const nodeInput = promtInput.current;
		const nodeStart = startBtn.current;
		const nodeStop = stopBtn.current;
		const nodeResult = resultTest.current;

		if (nodeStart) {
			nodeStart.addEventListener("click", generate);
		}

		if (nodeInput && Event) {
			nodeInput.addEventListener("keyup", (Event: KeyboardEvent) => {
				if (Event.key === "Enter") {
					generate();
				}
			});
		}

    if(nodeStop) {
      nodeStop.addEventListener("click", handleStopClick);
    }

		if (nodeResult) {
			nodeResult;
		}

		return () => {
			if (nodeStart) {
				nodeStart.removeEventListener("click", generate);
			}

			if (nodeInput) {
				nodeInput.removeEventListener("keyup", (Event: KeyboardEvent) => {
					if (Event.key === "Enter") {
						generate();
					}
				});
			}

      if(nodeStop) {
        nodeStop?.removeEventListener("click", handleStopClick);
      }
		};
	}, []);


	return (
		<>
			<div className={styles.container}>
				<div ref={resultTest} className={styles.result} placeholder="">Ask_Ai is powered by chat-gpt 3.5-turbo to keep you up to speed</div>
				<div className={styles.inputBtnContainer}>
					<textarea
						className={styles.input}
						ref={promtInput}
						placeholder="Ask_Ai"
					/>
					<div className={styles.btnContain} onClick={handleToggleBtn}>
						{btnVisible ? (
							<button id="start" ref={stopBtn} className={styles.stopBtn}>
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
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						) : (
							<button ref={startBtn} className={styles.startBtn}>
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
										d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
									/>
								</svg>
							</button>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default AiInterface;
