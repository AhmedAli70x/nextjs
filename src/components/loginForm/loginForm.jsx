"use client"

import styles from './loginForm.module.css'
import {useFormState} from "react-dom"
import { login } from "@/lib/action";
import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";


const LoginForm = () => {
    const [state, formAction] = useFormState(login, undefined);
    const router = useRouter();


    return (
          <form action={formAction} className={styles.form}>
              <input type="text" placeholder="username" name="username"/>
              <input type="text" placeholder="Password" name="password"/>
              <button > Login with Credential</button>
                {state?.error}
                <Link href="/register">
                {"Do you have an Account"} <b>Register</b>
                </Link>
          </form>
    )
    
    };
    
    export default LoginForm;