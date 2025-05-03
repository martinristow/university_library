"use client"
import React from 'react'
import AuthForm from "@/components/AuthForm";
import {singInSchema} from "@/lib/validations";
import {signInWithCredentials} from "@/lib/actions/auth";

const Page = () => (
    <AuthForm
        type="SIGN_IN"
        schema={singInSchema}
        defaultValues={{
            email: "",
            password: "",
        }}
        onSubmit={signInWithCredentials}
    />
)
export default Page
