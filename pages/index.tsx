import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Landing.module.css";
import { SignIn } from "@clerk/nextjs";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>MindIt</title>
          <meta name="description" content="" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1>Mind It</h1>
        <p>One stop for all your mental care needs.</p>
        <button
          onClick={() => {
            router.push("/sign-in");
          }}
        >
          Get Started
        </button>
      </div>
    </>
  );
};

export default Home;
