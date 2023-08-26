import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import styles from "./styles.module.css";
import Passcode from "../passcode/passcode";
import { any } from "zod";

type FormValue = {
  firstName: string,
  lastName: string,
  category: string,
  checkbox: boolean,
  radio: string,
  Passcode:string[] | undefined
  onChange:()=>void, // send value to hook form
  onBlur:()=>void,  // notify when input is touched/blur
  selected:string[] | undefined, 
}

export default function Form() {
 
	const {
		register,
		handleSubmit,
    watch,
    unregister,
    control, 
		formState: { errors, isSubmitting, isDirty, isValid },
	} = useForm<FormValue>({
		defaultValues: {
			firstName: "",
			lastName: "",
			category: "",
			checkbox: true,
			radio: "",
      Passcode: undefined,
			onChange:any,
			onBlur:any,
			selected:undefined, 
		},
	});

  const check = watch('checkbox');

  React.useEffect(()=>{
    if(!check) {
      unregister("category");
    }
  },[unregister,check]);

	return (
		<form className={styles.form} onSubmit={handleSubmit(console.log)}>
			<input
				className={styles.input1}
				{...register("firstName", { required: `name required` })}
				placeholder="First name"
			/>
			{errors?.firstName && (
				<p role="alert" className={styles.error}>{errors?.firstName.message}</p>
			)}
			<input
				className={styles.input1}
				{...register("lastName", {
					minLength: 2,
					validate: (value) => value === "ai" || `enter valid id`,
				})}
				placeholder="Last name"
			/>
			{errors?.lastName && (
				<p className={styles.error}>{errors?.lastName.message}</p>
			)}

			{check && <select className={styles.input1} {...register("category")}>
				<option value="">Select...</option>
				<option value="A">Category A</option>
				<option value="B">Category B</option>
			</select> }

			<div className={styles.cover}>
				<input
					className={styles.input1}
					{...register("checkbox")}
					type="checkbox"
				/>
			</div>
			<div className={styles.cover}>
				<input
					className={styles.input1}
					{...register("radio")}
					type="radio"
					value="A"
				/>
				<input
					className={styles.input1}
					{...register("radio")}
					type="radio"
					value="B"
				/>
				<input {...register("radio")} type="radio" value="C" />
			</div>
      <Controller
        control={control}
        name="Passcode"
        render={({ field}) => (
          <Passcode 
            // notify when input is touched/blur
          />
        )}
      />
			

			<input className={styles.button} type="submit" />
		</form>
	);
}
