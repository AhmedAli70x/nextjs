import { signIn, auth } from "@/lib/auth";
import {handleGithubLogin, login} from "@/lib/action"
import LoginForm from "@/components/loginForm/loginForm";

import styles from "./login.module.css"
const LoginPage = () => {
  // const session =  auth();
  // console.log(session);
  /// auth?.user && Router.push("/");

  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
        <form action={handleGithubLogin} >
            <button className={styles.github}> Login With Github</button>
        </form>

        <LoginForm/ >
      </div>
    </div>
  )
  
  };
  
  export default LoginPage;