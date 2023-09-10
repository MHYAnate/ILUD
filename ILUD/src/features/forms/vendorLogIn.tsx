import * as React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./styles.module.css";


type FormValue = {
	number: number;
	passCode0: string;
	passCode1: number;
	passCode2: number;
	passCode3: number;
};

export default function VendorLogIn() {
	const {
		register,
		handleSubmit,
		watch,
		reset,
		unregister,
		setFocus,
		formState: {
			isSubmitSuccessful,
			errors,
			isSubmitted,
			isSubmitting,
			isDirty,
			isValid,
		},
	} = useForm<FormValue>({
		defaultValues: {
			number: undefined,
			passCode0: undefined,
			passCode1: undefined,
			passCode2: undefined,
			passCode3: undefined,
		},
		shouldUseNativeValidation: true,
		mode: "onChange",
	});

	const [passwordVisible, setPasswordVisible] = useState(false);

	const handleTogglePassword = () => {
		setPasswordVisible((prevPasswordVisible) => !prevPasswordVisible);
	};
  const check = watch("number");
	const check0 = watch("passCode0");
	const check1 = watch("passCode1");
	const check2 = watch("passCode2");
	const check3 = watch("passCode3");

	if (isSubmitSuccessful) {
		reset();
	}

	React.useEffect(() => {
		if (isDirty) {
			if (check0) {
				setFocus("passCode1");
			}
			if (check1) {
				setFocus("passCode2");
			}
			if (check2) {
				setFocus("passCode3");
			}  if (check3) {
				setFocus("passCode3");
			}
		}
	}, [setFocus, check0, check1, check2, check3]);

	React.useEffect(() => {
		const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
			if (e.key === "Backspace") {
				if (check3) {
					e.preventDefault();
					setFocus("passCode3");
				} else if (check2) {
					e.preventDefault();
					setFocus("passCode2");
				} else if (check1) {
					e.preventDefault();
					setFocus("passCode1");
				} else if (check0) {
					e.preventDefault();
					setFocus("passCode0");
				}else{
					setFocus("passCode0");
				}
			}
		};

		window.addEventListener("keyup", onKeyUp as any); // Add 'as any' to cast the type

		return () => {
			window.removeEventListener("keyup", onKeyUp as any); // Add 'as any' to cast the type
		};
	}, [check0, check1, check2, check3, isDirty, setFocus]);

	React.useEffect(()=>{
		const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
			if(e.key && isDirty && e.key !=="Backspace"){
				if(check0){
					setFocus("passCode1")
				}
				if(check1){
					setFocus("passCode2")
				}
				if(check2){
					setFocus("passCode3")
				}
				if(check3){
					setFocus("passCode3")
				}
			}
		};

		window.addEventListener("keydown", onKeyUp as any); // Add 'as any' to cast the type

		return () => {
			window.removeEventListener("keydown", onKeyUp as any); // Add 'as any' to cast the type
		};
	}, [check0, check1, check2, check3, isDirty, setFocus]);

	return (
		<div className={styles.formContainer}>
			<form className={styles.form} onSubmit={handleSubmit(console.log)}>
				<input
					type="number"
					className={styles.input}
					{...register("number", {
						pattern: {
							value: /^\d{11}$/,
							message: `Eleven Digit's Required`,
						},
					})}
					placeholder="Mobile_Number"
				/>

				{/* {errors?.number && (
					<p className={styles.error}>{errors?.number.message}</p>
				)} */}

				<div className={styles.passcodeContainer}>
					<input
						{...register("passCode0", {
							required: "error message",
						})}
						onKeyUp={() => onkeyup}
						maxLength={1}
						className={styles.input1}
						type={passwordVisible ? "text" : "password"}
					/>
					<input
						{...register("passCode1", {
							required: "error message",
						})}
						onKeyUp={() => onkeyup}
						className={styles.input1}
						maxLength={1}
						type={passwordVisible ? "text" : "password"}
					/>
					<input
						{...register("passCode2", {
							required: "error message",
						})}
						onKeyUp={() => onkeyup}
						maxLength={1}
						className={styles.input1}
						type={passwordVisible ? "text" : "password"}
					/>
					<input
						{...register("passCode3", {
							required: "error message",
						})}
						onKeyUp={() => onkeyup}
						maxLength={1}
						className={styles.input1}
						type={passwordVisible ? "text" : "password"}
					/>
					<button
						type="button"
						className={styles.btn}
						id="toggle-password"
						onClick={handleTogglePassword}
					>
						{passwordVisible ? (
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
									d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
								/>
							</svg>
						) : (
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
									d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
								/>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
								/>
							</svg>
						)}
					</button>
				</div>

				<button 
				className={styles.button} 
				type="submit"
				>
					Enter
				</button>
			</form>
		</div>
	);
}
