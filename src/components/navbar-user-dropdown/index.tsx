"use client"
import { User } from "@/src/types/AuthTypes";
import { signOut } from "next-auth/react";
import { FaRegUserCircle } from "react-icons/fa";

export default function NavbarUserDropdown({ user }: { user?: User}) {

    console.log(user);

    return (
        <div>
            <FaRegUserCircle size={24} />
            <p>{user?.name}</p>
            <p onClick={async () => { await signOut() }}>Sair</p>
        </div>
    )
}