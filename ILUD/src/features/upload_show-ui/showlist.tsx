import { fetchFiles } from "@/hooks/fetchFilesFireBase";

import React from 'react'

const ShowList = () => {
  let {fileList} =fetchFiles();
  return (
    <div>{fileList.map((file)=>{
      return(
        <div>
          
        </div>
      )
    })}</div>
  )
}

export default ShowList