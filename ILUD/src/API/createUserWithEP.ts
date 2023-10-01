'use client'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "@/firebase/client";
import { storage } from "@/firebase/client";
import { database } from "@/firebase/client";
import { useRouter } from 'next/router';



function Firebase() {
  return {
    auth: getAuth(app),
    storage,
    database,
  };
}

function Router()  {
  return useRouter();
}
 
interface create{
  number:any,
  pinCode: any,
  address:any,
  name:any
}

function HandleClientSignUp({number, pinCode, name, address}:create) {
  const { auth } = Firebase();
  const router = Router();
  createUserWithEmailAndPassword(auth, number, pinCode)
    .then((userCredential) => {
    
      const user = userCredential.user;

      router.push(`/client/${user.uid}?number=${user.phoneNumber}&name=${name}&address=${address}`);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage)
     
    }); 
}

export default HandleClientSignUp
