"use client"

import { useForm } from "react-hook-form";
import { TextInput } from "../../inputs/text-input";
import { AuthFormTypes, SubFormSectionProps } from "@/src/types/FormTypes";
import { poppins, roboto } from "@/fonts";
import { Button } from "../../buttons";
import { useState } from "react";
import { signIn } from "next-auth/react";
import styles from "./styles.module.scss";
import { useRouter } from "next/navigation";

export default function AuthForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<AuthFormTypes>();
    const router = useRouter();

    const [isLogin, setIsLogin] = useState(true);

    async function submit(data: any) {
        if(isLogin) {
            const result = await signIn("credentials", {
                redirect: false,
                username: data.email,
                password: data.password
            });

            if (result?.ok) {
                router.push("/") // Redirect to home page or dashboard
            } else {
                console.error(result?.error);
                // Handle sign-in error
            }
        }
    }

    return (
        <div className={styles.formContainer}>
            <form onSubmit={handleSubmit(submit)} className={poppins.className}>
                {isLogin ?
                    <LoginForm register={register} errors={errors} /> :
                    <RegisterForm register={register} errors={errors} />
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

function LoginForm({ register, errors }: SubFormSectionProps) {
    return (
        <>
            <TextInput 
                register={register}
                name="email"
                label="Email"
                isRequired
                placeholder="example@gmail.com"
                type="email"
                errors={errors}
            />
            <TextInput 
                register={register}
                name="password"
                label="Password"
                isRequired
                placeholder="**************"
                type={"password"}
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
                    register={register}
                    name="firstName"
                    label="First name *"
                    isRequired
                    placeholder="Name"
                    errors={errors}
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
                errors={errors}
            />
            <TextInput 
                register={register}
                name="email"
                label="Email*"
                isRequired
                placeholder="example@gmail.com"
                errors={errors}
            />
            <div className={styles.doubleColumnSection}>
                <TextInput 
                    register={register}
                    name="password"
                    label="Password*"
                    isRequired
                    placeholder="***********"
                    errors={errors}
                />
                <TextInput 
                    register={register}
                    name="confirmPassword"
                    label="Confirm password *"
                    isRequired
                    placeholder="***********"
                    errors={errors}
                />
            </div>
        </>
    )
}