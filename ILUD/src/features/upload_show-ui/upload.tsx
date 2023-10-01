import { ChangeEvent, useState } from "react"
import styles from "./styles.module.css";
import FileUpLoad from "@/API/fileUpLoad";

const UploadUi = () => {
  const [file, setfile] = useState({})
  const [isFileVisible, setFileVisible] = useState(false)
  const uploadfile =(event: ChangeEvent<HTMLInputElement>)=>{
    let file = event?.target.files?.[0];
    FileUpLoad(file);
  }
  return (
    <>

    {isFileVisible && <input onChange={(event)=>uploadfile(event)} type="file"/>}
    
    <div onClick={()=> setFileVisible(!isFileVisible)} className={styles.button }>upload file</div>
    <div className={styles.button }>upload folder</div>
    </>
    
  )
}

export default UploadUi