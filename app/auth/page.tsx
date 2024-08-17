"use client"

import { Container } from "@/src/components/grid"
import styles from "./styles.module.scss";

export default function Auth() {
    return (
        <Container customStyles={styles.authCard}>
            <p>Auth</p>
        </Container>
    )
}