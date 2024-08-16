import { ButtonHTMLAttributes } from "react";
import styles from "./styles.module.scss";

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement> & {
    btnType?: "igdb" | "primary"
    btnSize?: "small" | "large" | "tall"
    customStyles?: string
}

export function Button({
    children, 
    btnType = "primary", 
    btnSize = "large",
    customStyles = "" ,
    ...props
}: ButtonTypes) {
    const classNames = `
        ${styles.baseButton} 
        ${styles[btnType]} 
        ${styles[btnSize]} 
        ${customStyles}
    `
    return (
        <button className={classNames} {...props}>
            {children}
        </button>
    )

}

export function SmallButton({children, ...props}: ButtonTypes) {
    return (
        <Button className={styles.smallButton} {...props}>
            {children}
        </Button>
    )
}

export function LargeButton({children, ...props}: ButtonTypes) {
    return (
        <Button className={styles.smallButton} {...props}>
            {children}
        </Button>
    )
}