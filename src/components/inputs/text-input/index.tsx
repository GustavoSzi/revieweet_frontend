
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { poppins } from "@/fonts";
import { InputHTMLAttributes } from "react";
import styles from "./styles.module.scss";

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
    register: UseFormRegister<any>,
    name: string
    placeholder: string,
    label: string,
    isRequired?: boolean,
    errors?: FieldErrors
}

export function TextInput({ label, placeholder, type = "text", register, isRequired, name, errors }: TextInputProps) {
    return (
        <label className={styles.label}>
            {label}
            <input className={`${styles.input} ${poppins.className}`}
                type={type}
                placeholder={placeholder}
                {...register(name, {
                    required: isRequired ? "Required field" : undefined
                })}
            />
            {!!errors && <p className={styles.error}>{errors[name]?.message?.toString()}</p>}
        </label>
    )
}