"use client"

import { useForm } from "react-hook-form";
import styles from "./styles.module.scss";
import { TextInput } from "../../inputs/text-input";
import { Row } from "../../grid";
import { AuthFormTypes, SubFormSectionProps } from "@/src/types/FormTypes";
import { poppins, roboto } from "@/fonts";
import { Button } from "../../buttons";
import { useState } from "react";

export default function AuthForm() {
    const { register, handleSubmit } = useForm<AuthFormTypes>();

    const [isLogin, setIsLogin] = useState(true);

    function submit(data: any) {
        console.log(data);
    }

    return (
        <div className={styles.formContainer}>
            <form onSubmit={handleSubmit(submit)} className={poppins.className}>
                {isLogin ?
                    <LoginForm register={register} /> :
                    <RegisterForm register={register} />
                }
                <Button btnSize="large" customStyles={`${styles.submitBtn} ${roboto.className}`}>
                    {isLogin ? "Log-in" : "Create account"}
                </Button>
                <p className={styles.changeType} onClick={() => setIsLogin(value => !value)}>{isLogin ? 
                    "Doesn't have an account yet? Register now!" : 
                    "Already have an account? Log in!"}</p>
            </form>
        </div>
    )
}

function LoginForm({ register }: SubFormSectionProps) {
    return (
        <>
            <TextInput 
                register={register}
                name="email"
                label="Email"
                isRequired
                placeholder="example@gmail.com"
                type="email"
            />
            <TextInput 
                register={register}
                name="password"
                label="Password"
                isRequired
                placeholder="**************"
                type={"password"}
            />
        </>
    )
}

function RegisterForm({ register }: SubFormSectionProps) {
    return (
        <>
            <div className={styles.doubleColumnSection}>
                <TextInput 
                    register={register}
                    name="firstName"
                    label="First name *"
                    isRequired
                    placeholder="Name"
                />
                <TextInput 
                    register={register}
                    name="lastName"
                    label="Last name"
                    isRequired
                    placeholder="Last name"
                />
            </div>
            <TextInput 
                register={register}
                name="username"
                label="Username*"
                isRequired
                placeholder="Username"
            />
            <TextInput 
                register={register}
                name="email"
                label="Email*"
                isRequired
                placeholder="example@gmail.com"
            />
            <div className={styles.doubleColumnSection}>
                <TextInput 
                    register={register}
                    name="password"
                    label="Password*"
                    isRequired
                    placeholder="***********"
                />
                <TextInput 
                    register={register}
                    name="confirmPassword"
                    label="Confirm password *"
                    isRequired
                    placeholder="***********"
                />
            </div>
        </>
    )
}