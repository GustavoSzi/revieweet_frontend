import Image from "next/image";
import Link from "next/link";
import LogoImg from "@/public/assets/logo.png";

import styles from "./styles.module.scss";
import { Column, Container, Row } from "../grid";
import NavbarUserDropdown from "../navbar-user-dropdown";
import { auth } from "@/src/lib/NextAuth/auth";
import { User } from "@/src/types/AuthTypes";


export async function Header() {

    const session = await auth();

    return (
        <header className={styles.headerContainer}>
            <Container>
                <Row>
                    <Column desktop={1}>
                        <Link href="/" className={styles.logoContainer}>
                            <Image src={LogoImg} width={48} height={48} alt="Revieweet!" />
                        </Link>
                    </Column>
                    <nav className={styles.nav}>
                        <NavbarUserDropdown user={session?.user as User} />
                    </nav>
                </Row>
            </Container>
        </header>
    )
}