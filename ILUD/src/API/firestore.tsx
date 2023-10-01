import { database } from "@/firebase/client";
import { collection, addDoc } from "firebase/firestore";


let files =collection(database, 'files')
export const addFiles = (imageLink: string) =>{
  try{
     addDoc(files, {
    imageLink: imageLink,
  })
  }
  catch(err){
    console.log(err)
  }
 
};
