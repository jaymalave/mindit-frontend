import React from "react";
import { app, auth, Providers } from "../config/firebase.config";
import {
  signInWithPopup,
  signInWithEmailLink,
  signInWithPhoneNumber,
  ActionCodeSettings,
  RecaptchaVerifier,
} from "firebase/auth";
import GoogleButton from "react-google-button";
import styles from "../styles/Landing.module.css";
import { useRouter } from "next/router";

export default function SignInPage() {
  const router = useRouter();
  const googleSignIn = () => {
    signInWithPopup(auth, Providers.google)
      .then((result) => {
        console.log(result, "result from the popup");
        result.user.getIdToken().then((value) => {
          console.log(result.user.email, "email");
          localStorage.setItem("email", result.user.email!);
          router.push("/onboard");
          console.log(value, "token");
        });
      })
      .catch((error) => {
        console.log(error, "error");
      });
  };

  return (
    <div className={styles.container}>
      <p>Sign in to continue</p>
      <GoogleButton
        onClick={googleSignIn}
        type="dark"
        style={{
          backgroundColor: "black",
        }}
      >
        Sign in with Google
      </GoogleButton>
    </div>
  );
}
