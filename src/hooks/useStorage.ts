import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";
import { storage } from "../firebase/config";
import { v4 as uuidv4 } from "uuid";

const useStorage = () => {
	const [progress, setProgress] = useState<number>(0);
	const [error, setError] = useState<Error | null>(null);
	const [url, setUrl] = useState<string | null>(null);

	const startUpload = (file: File) => {
		if (!file) {
			return;
		}

		const fileId = uuidv4();
		const formatFile = file.type.split("/")[1];
		const storageRef = ref(storage, `images/${fileId}.${formatFile}`);
		const uploadTask = uploadBytesResumable(storageRef, file);

		uploadTask.on(
			"state_changed",
			(snapshot) => {
				// Observe state change events such as progress, pause, and resume
				const progress =
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				console.log("Upload is " + progress + "% done");
				setProgress(progress);
			},
			(error) => {
				console.error("Upload error:", error);
				setError(error);
			},
			() => {
				// Handle successful uploads on complete
				getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
					setUrl(downloadURL);
					setProgress(progress);
				});
			}
		);
	};

	return { progress, error, url, startUpload };
};

export default useStorage;
