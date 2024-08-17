import { FieldErrors, UseFormRegister } from "react-hook-form"

export type LoginForm = {
    email: string,
    password: string
}

export type RegisterForm = {
    firstName: string,
    lastName?: string,
    username: string,
    email: string,
    password: string,
    confirmPassword: string,
}

export type AuthFormTypes = LoginForm | RegisterForm

export type SubFormSectionProps = {
    register: UseFormRegister<AuthFormTypes>,
    errors?: FieldErrors
}