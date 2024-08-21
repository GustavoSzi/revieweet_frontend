"use client"

import { TextInput } from "../../inputs/text-input";
import { poppins, roboto } from "@/fonts";
import { Button } from "../../buttons";
import { useState } from "react";
import styles from "./styles.module.scss";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import type { AuthFormFields, SubFormSectionProps } from "@/src/types/FormTypes";
import { parseClientLogin, parseClientRegister } from "@/src/actions/login";

export default function AuthForm() {
    const router = useRouter();
    const { register, clearErrors, setError, formState: { errors }, handleSubmit } = useForm<AuthFormFields>();

    const [isLogin, setIsLogin] = useState(true);

    async function submit(data: AuthFormFields) {
        try {
            if(isLogin) {
                await parseClientLogin(data);
                return;
            }

            // TODO: Implement email confirmation
            if(data.password !== data.confirmPassword) {
                setError("password", { message: "Password fields are not equal" });
                return;
            }

            await parseClientRegister(data);
        } catch(e) {}
            
    }

    function toggleMode() {
        setIsLogin(value => !value);
        clearErrors();
    }

    return (
        <div className={styles.formContainer}>
            <form onSubmit={handleSubmit(submit)} className={poppins.className}>
                {isLogin ? 
                    <LoginForm register={register} errors={errors} /> :
                    <RegisterForm register={register} errors={errors} />}
                <Button btnSize="large" customStyles={`${styles.submitBtn} ${roboto.className}`}>
                    {isLogin ? "Log-in" : "Create account"}
                </Button>
                <p className={styles.changeType} onClick={toggleMode}>{isLogin ? 
                    "Doesn't have an account yet? Register now!" : 
                    "Already have an account? Log in!"}</p>
            </form>
        </div>
    )
}

function LoginForm({ register, errors }: SubFormSectionProps) {
    return (
        <>
            <TextInput 
                name="email"
                label="Email"
                isRequired
                placeholder="example@gmail.com"
                type="email"
                register={register}
                errors={errors}
            />
            <TextInput 
                name="password"
                label="Password"
                isRequired
                placeholder="**************"
                type="password"
                register={register}
                errors={errors}
            />
        </>
    )
}

function RegisterForm({ register, errors }: SubFormSectionProps) {
    return (
        <>
            <div className={styles.doubleColumnSection}>
                <TextInput 
                    name="firstName"
                    label="First name *"
                    isRequired
                    placeholder="Name"
                    register={register}
                    errors={errors}
                />
                <TextInput 
                    name="lastName"
                    label="Last name"
                    isRequired
                    placeholder="Last name"
                    register={register}
                    errors={errors}
                />
            </div>
            <TextInput 
                name="username"
                label="Username*"
                isRequired
                placeholder="Username"
                register={register}
                errors={errors}
            />
            <TextInput 
                name="email"
                label="Email*"
                isRequired
                placeholder="example@gmail.com"
                register={register}
                errors={errors}
            />
            <div className={styles.doubleColumnSection}>
                <TextInput 
                    name="password"
                    label="Password*"
                    isRequired
                    placeholder="***********"
                    type="password"
                    register={register}
                    errors={errors}
                />
                <TextInput 
                    name="confirmPassword"
                    label="Confirm password *"
                    isRequired
                    placeholder="***********"
                    type="password"
                    register={register}
                    errors={errors}
                />
            </div>
        </>
    )
}