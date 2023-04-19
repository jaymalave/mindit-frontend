import React, { useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  useToast,
} from "@chakra-ui/react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import DpUpload from "../DpUpload/DpUpload";
import styles from "../../styles/OnboardCards.module.css";
import { useDpStore } from "../../states/dp.state";
import { createPatient } from "../../api/createPatient";

export const PatientOnboarding = () => {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const [phone, setPhone] = useState<string>("");
  const dp = useDpStore((state: any) => state.dp);
  const toast = useToast();

  const handleCreatePatient = async () => {
    try {
      const res = await createPatient({
        name: nameRef.current?.value,
        phoneNumber: phone,
        profilePictue: dp,
        email: localStorage.getItem("email"),
      });
      console.log(res);
      toast({
        title: "Account created",
        description: "Your account has been created successfully",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } catch (err) {
      toast({
        title: "Error",
        description: "Something went wrong",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      console.log(err);
    }
  };

  return (
    <div className={styles.form}>
      <FormControl className={styles.formBox}>
        <FormLabel>Name</FormLabel>
        <Input type="text" ref={nameRef} />
      </FormControl>
      <FormControl className={styles.formBox}>
        <FormLabel>Phone Number</FormLabel>
        <PhoneInput
          country={"in"}
          onChange={(phone) => {
            console.log(phone);
            setPhone(phone);
          }}
        />
      </FormControl>
      <FormControl className={styles.formBox}>
        <DpUpload />
      </FormControl>
      <button className={styles.button} onClick={handleCreatePatient}>
        Create Account
      </button>
    </div>
  );
};
