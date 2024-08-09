import Image from "next/image";
import Link from "next/link";
import LogoImg from "@/public/assets/logo.png";

import styles from "./styles.module.scss";
import { Column, Container } from "../grid";
import { FaRegUserCircle } from "react-icons/fa";

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <Container>
                <Column desktop={1}>
                    <Link href="/" className={styles.logoContainer}>
                        <Image src={LogoImg} width={48} height={48} alt="Revieweet!" />
                    </Link>
                </Column>
                <nav className={styles.nav}>
                    <FaRegUserCircle size={24} />
                </nav>
            </Container>
        </header>
    )
}