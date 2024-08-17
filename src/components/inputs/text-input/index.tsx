
import { UseFormRegister } from "react-hook-form";
import styles from "./styles.module.scss";
import { poppins } from "@/fonts";
import { InputHTMLAttributes } from "react";

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
    register: UseFormRegister<any>,
    name: string
    placeholder: string,
    label: string,
    isRequired?: boolean,
}

export function TextInput({ label, placeholder, type = "text", register, isRequired, name }: TextInputProps) {
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
        </label>
    )
}