import type { ColumnTypes } from "@/src/types/GridTypes";
import styles from "./styles.module.scss";

export function Container({ children }: any) {
    return <div className={styles.gridContainer}>{children}</div>
}

export function Row({ children }: any) {
    return <div className={styles.row}>{children}</div>
}

export function Column({ 
    desktop = 12, 
    medium = 12, 
    tablet = 8, 
    phone = 4, 
    children 
}: ColumnTypes) {
    const spanClasses = [
        desktop ? styles[`span-lg-${desktop}`] : '',
        medium ? styles[`span-md-${medium}`] : '',
        tablet ? styles[`span-sm-${tablet}`] : '',
        phone ? styles[`span-xs-${phone}`] : '',
    ]
    .filter(Boolean)
    .join(' ');

    return <div className={spanClasses}>{children}</div>;
}