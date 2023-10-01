import { storage} from "@/firebase/client";
import { NextApiRequest, NextApiResponse } from "next";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { error } from "console";
import { addFiles } from "./firestore";

const FileUpLoad = (file: any) => {
	const storageRef = ref(storage, `files/${file.name}`);

	const upLoadTask = uploadBytesResumable(storageRef, file);
	upLoadTask.on(
		"state_changed",
		(snapshot) => {
			const progress = Math.round(
				(snapshot.bytesTransferred / snapshot.totalBytes) * 100
			);
			console.log(progress);
		},
		(error) => {
			alert(error);
		},
		() => {
			getDownloadURL(upLoadTask.snapshot.ref).then((downloadURL) =>
				addFiles(downloadURL)
			);
		}
	);
};

export default FileUpLoad;
