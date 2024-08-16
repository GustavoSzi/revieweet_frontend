import type { ColumnTypes, ContainerTypes, RowTypes } from "@/src/types/GridTypes";
import styles from "./styles.module.scss";

export function Container({ children, customStyles }: ContainerTypes) {
    const containerClasses = [styles.gridContainer, customStyles].join(' ');
    return <div className={containerClasses}>{children}</div>
}

export function Row({ children, customStyles }: RowTypes) {
    const containerClasses = [styles.row, customStyles].join(' ');
    return <div className={containerClasses}>{children}</div>
}

export function Column({ 
    desktop = 12, 
    medium = 8, 
    tablet = 6, 
    phone = 4, 
    children,
    customStyles
}: ColumnTypes) {
    const spanClasses = [
        desktop ? styles[`span-lg-${desktop}`] : '',
        medium ? styles[`span-md-${medium}`] : '',
        tablet ? styles[`span-sm-${tablet}`] : '',
        phone ? styles[`span-xs-${phone}`] : '',
        customStyles
    ]
    .filter(Boolean)
    .join(' ');

    return <div className={spanClasses}>{children}</div>;
}