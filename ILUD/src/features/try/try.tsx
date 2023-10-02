import { getAuth, createUserWithEmailAndPassword, UserCredential } from "firebase/auth";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { getFirestore, doc, setDoc } from "firebase/firestore";

async function createUser(email: string, password: string, extraUserInfo: {
  image: string;
  address: string;
  skills: string[];
}): Promise<UserCredential> {
  const auth = getAuth();
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);

  const user = userCredential.user;

  // Save the extra user info to the firestore.
  const firestore = getFirestore();
  const userDoc = doc(firestore, `users/${user.uid}`);
  await setDoc(userDoc, extraUserInfo);

  return userCredential;
}


