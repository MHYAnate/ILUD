

import { useState, useRef } from "react";
import styles from "./styles.module.css";

const Number:React.FC = () => {

	const [arrayValue, setArrayValue] = useState<(string | number)[]>([
		"",
		"",
		"",
		"",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
	]);

  

	const [currentFocusedIndex, setCurrentFocusedIndex] = useState(0);

	const inputRefs = useRef<Array<HTMLInputElement> | []>([]);

	const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		const keyCode = parseInt(e.key);
    if (
      !(keyCode >= 0 && keyCode <= 9) &&
      e.key !== "Backspace" &&
      !(e.metaKey && e.key === "v")
    ) {
      e.preventDefault();
    }
	};

	const onChange = (e: React.BaseSyntheticEvent, index: number) => {
		setArrayValue((preValue: (string | number)[]) => {
			const newArray = [...preValue];

			if (parseInt(e.target.value)) {
				newArray[index] = parseInt(e.target.value);
			} else {
				newArray[index] = e.target.value;
			}

			return newArray;
		});
	};

	const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
		if (parseInt(e.key) && index < arrayValue.length - 1) {
			setCurrentFocusedIndex(index + 1);
			if (inputRefs && inputRefs.current && index === currentFocusedIndex) {
				inputRefs.current[index + 1].focus();
			}
		}
    if (e.key === "Backspace") {
      if (index === 0) {
        setCurrentFocusedIndex(0);
      } else {
        setCurrentFocusedIndex(index - 1);
        if (
          inputRefs &&
          inputRefs.current &&
          index === currentFocusedIndex
        ) {
          inputRefs.current[index - 1].focus();
        }
      }
    } else {
      if (
        (parseInt(e.key)) &&
        index <= arrayValue.length - 2
      ) {
        setCurrentFocusedIndex(index + 1);
        if (
          inputRefs &&
          inputRefs.current &&
          index === currentFocusedIndex
        ) {
          inputRefs.current[index + 1].focus();
        }
      }
    }
	};

	const onFocus = (e: React.BaseSyntheticEvent, index: number) => {
		setCurrentFocusedIndex(index);
	};

  
	return (
		<>
    <div className={styles.passcodeContainer}>
			
			{arrayValue.map((value: string | number, index: number) => (
				<input
        className={styles.input}
					key={`index-${index}`}
					ref={(el) => el && (inputRefs.current[index] = el)}
					inputMode="numeric"
					pattern="\d{1}"
					maxLength={1}
					type= 'text'
					value={String(value)}
          onChange={(e) => onChange(e, index)}
          onKeyUp={(e) => onKeyUp(e, index)}
          onKeyDown={(e) => onKeyDown(e)}
          onFocus={(e) => onFocus(e, index)}
				/>
			))}
      
    </div>
		</>
	);
};

export default Number;
