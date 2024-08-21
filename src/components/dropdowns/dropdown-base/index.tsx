import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { ReactNode } from "react";

import styles from "./styles.module.scss";

export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuContent = DropdownMenuPrimitive.Content;
export const DropdownMenuItem = DropdownMenuPrimitive.Item;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

type MenuTriggerTypes = {
    children: ReactNode,
    component: ReactNode
}

export function DropdownContent({ children, ...props }: React.PropsWithChildren) {
    return (
        <DropdownMenuContent className={styles.dropdownContent} {...props}>
            {children}
        </DropdownMenuContent>
    )
}

export function DropdownTrigger({ children, ...props }: MenuTriggerTypes) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                {children}
            </DropdownMenuTrigger>
            {props.component}
        </DropdownMenu>
    )
}

export function StyledDropdownMenuItem({ children, ...props }: any) {
    return ( 
        <DropdownMenuItem className={styles.dropdownMenuItem} {...props}>
            {children}
        </DropdownMenuItem>
    )
}