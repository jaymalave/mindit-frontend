import { useState } from "react";
import { storage } from "../../config/firebase.config";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import styles from "./DpUpload.module.css";
import { useDpStore } from "../../states/dp.state";

export function DpUpload() {
  const [image, setImage] = useState<any>(null);
  const [file, setFile] = useState<any>(null);
  const setDp = useDpStore((state: any) => state.setDp);
  function handleChange(event: any) {
    setFile(event.target.files[0]);
    handleUpload();
  }
  function handleUpload() {
    if (!file) {
      alert("Please choose a file first!");
    }
    const storageRef = ref(storage, `/files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        percent;
      },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setImage(url);
          setDp(url);
          console.log(url, "image url");
        });
      }
    );
  }

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleChange} />
      <img src={image} alt="" className={styles.dpImage} />
    </div>
  );
}

export default DpUpload;
