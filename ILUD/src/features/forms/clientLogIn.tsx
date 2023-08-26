import * as React from "react";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import styles from "./styles.module.css";
import Passcode from "../passcode/passcode";
import { number } from "zod";

type FormValue = {
	number: string;
	passWord: string;
	checkbox: boolean;
};

export default function ClientLogIn() {
	const {
		register,
		handleSubmit,
		watch,
		unregister,
		formState: { errors, isSubmitted, isSubmitting, isDirty, isValid },
	} = useForm<FormValue>({
		defaultValues: {
			number: "",
			passWord: "",
		},
	});

	const [passwordVisible, setPasswordVisible] = useState(false);

	const handleTogglePassword = () => {
		setPasswordVisible((prevPasswordVisible) => !prevPasswordVisible);
	};

	const check = watch("checkbox");

	React.useEffect(() => {
		if (isSubmitted) {
			unregister(["passWord", "number"]);
		}
	}, [unregister, check]);

	return (
		<div className={styles.formContainer}>
			<form className={styles.form} onSubmit={handleSubmit(console.log)}>
				<input
				type="number"
					className={styles.input}
					{...register("number", { required: `Number required` })}
					placeholder="Mobile_Number"
				/>

				{errors?.number && (
					<p className={styles.error}>{errors?.number.message}</p>
				)}
				<div className={styles.passWordContainer}>
					<input
						className={styles.passWord}
						placeholder="PassWord"
						type={passwordVisible ? "text" : "password"}
						{...register("passWord", {
							minLength: 2,
							validate: (value) => value === "ai" || `enter valid id`,
						})}
					/>

					
					<button className={styles.visibility} type="button" onClick={handleTogglePassword}>
						{passwordVisible ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="silver"
								className={styles.passWordSvg}
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
								stroke="silver"
								className={styles.passWordSvg}
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
        {errors?.passWord && (
						<p className={styles.error}>{errors?.passWord.message}</p>
					)}
				<input className={styles.button} type="submit" />
			</form>
		</div>
	);
}
