"use client"

import { User } from "@/src/types/AuthTypes";
import { FaRegUserCircle } from "react-icons/fa";
import styles from "./styles.module.scss";
import { useState } from "react";
import { logout } from "@/src/actions/login";

export default function NavbarUserDropdown({ user }: { user?: User}) {
    const [isActive, setIsActive] = useState(false);

    return (
        <div>
            <div className={styles.userContainer} onClick={() => setIsActive(value => !value)}>
                <FaRegUserCircle size={24} />
            </div>
            {isActive && (
                <ul className={styles.dropdownContainer}>
                    <li><p>{user?.name}</p></li>
                    <li>
                        <button type="button" onClick={async () => await logout()}>Sair</button>
                    </li>
                </ul>
            )}
        </div>
    )
}