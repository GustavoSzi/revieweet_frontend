import { Container } from "@/src/components/grid"
import styles from "./styles.module.scss";
import Image from "next/image";

import Logo from "@/public/assets/logo.png";
import AuthForm from "@/src/components/forms/auth-form";

export default function Auth() {
    return (
        <Container customStyles={styles.authPageContainer}>
            <section className={styles.authCard}>
                <Image
                    src={Logo}
                    width={95}
                    height={95}
                    alt="Revieweet!"
                />
                <AuthForm />
            </section>
        </Container>
    )
}