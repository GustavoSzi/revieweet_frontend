"use client"

import { User } from "@/src/types/AuthTypes";
import { FaRegUserCircle } from "react-icons/fa";
import { DropdownTrigger } from "../dropdowns/dropdown-base";
import { DropdownUser } from "../dropdowns/dropdown-user";
import styles from "./styles.module.scss";

export default function NavbarUserDropdown({ user }: { user?: User}) {

    return (
        <DropdownTrigger
            component={<DropdownUser user={user} />}
        >
            <div className={styles.icon}><FaRegUserCircle size={24} /></div>
        </DropdownTrigger>
    )
}