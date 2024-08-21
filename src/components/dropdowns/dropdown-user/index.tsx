import { User } from "@/src/types/AuthTypes";
import { DropdownContent, DropdownMenuItem, StyledDropdownMenuItem } from "../dropdown-base";
import { logout } from "@/src/actions/login";
import { useRouter } from "next/navigation";

export function DropdownUser({ user }: { user?: User }) {
    const router = useRouter();
    const isLoggedIn = !!user;
    
    return (
        <DropdownContent>
            {isLoggedIn ?
                <>
                    <StyledDropdownMenuItem onClick={() => router.push("/profile")}>
                        {user?.name}
                    </StyledDropdownMenuItem>
                    <StyledDropdownMenuItem onClick={() => logout()}>
                        Logout
                    </StyledDropdownMenuItem>
                </> :
                <>
                    <StyledDropdownMenuItem onClick={() => router.push("/auth")}>
                        Login/Signup
                    </StyledDropdownMenuItem>
                </>
            }
        </DropdownContent>
    )
}