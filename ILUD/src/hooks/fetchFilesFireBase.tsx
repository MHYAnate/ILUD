import { onSnapshot,collection } from "firebase/firestore"
import { database } from "@/firebase/client"
import { useState, useEffect, use } from "react"
interface Array {

}
let files =collection(database, 'files')

export const fetchFiles = () => {
  const [fileList, setFileList] = useState<Array>([{imageLink:"" , id:""}]);

  return onSnapshot(files, (response)=>{
    setFileList(response.docs.map((item)=>{
        return{...item.data(), id:item.id}
      }));
  });
  
  useEffect(()=>{
 
  },[])

  return {fileList};
}  