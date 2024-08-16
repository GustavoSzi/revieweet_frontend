import { ButtonHTMLAttributes } from "react";
import styles from "./styles.module.scss";

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement> & {

}

export function BaseButton({children, ...props}: ButtonTypes) {
    return (
        <button className={styles.baseButton} {...props}>
            {children}
        </button>
    )

}

export function SmallButton({children, ...props}: ButtonTypes) {
    return (
        <BaseButton className={styles.smallButton} {...props}>
            {children}
        </BaseButton>
    )
}