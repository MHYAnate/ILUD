'use client'
import {
	sendEmailVerification,
	getAuth,
	updateProfile,
} from "firebase/auth";
import { firebaseConfig,storage, database, clientColRef  } from "@/firebase/client";
import {doc, addDoc, getDocs, deleteDoc, onSnapshot}from "firebase/firestore";

 
interface AddData {
  address: string;
	number: string;
}

interface deleteData {
	id: string;
}

const getClientDoc =getDocs(clientColRef)
 .then((snapshot)=>{
    let client = [];
    snapshot.docs.forEach((doc)=>{
      client.push({...doc.data(), id: doc.id})
    })
}).catch((error)=>{
  console.log(error)
})

const add: any = (AddData:AddData)=>{
	addDoc(clientColRef,{
  address:AddData.address,
  number:AddData.number,
})}

const Delete: any = (deleteData:deleteData)=>{
	const docRef = doc(database, 'client', deleteData.id )
	deleteDoc(docRef)
}

export const getClientRealTimDoc = onSnapshot(clientColRef,(snapshot)=>{
	let client:any = [];
	snapshot.docs.forEach((doc)=>{
		client.push({...doc.data(), id: doc.id})
	})
	
}
)

async function getDoument(collection:any, id:any) {
	
	let result = null;
	let error = null;

	try {
			result = await getDocs(clientColRef);
	} catch (e) {
			error = e;
	}

	return { result, error };
}
 

function Firebase() {
	return {
		auth: getAuth(firebaseConfig),
		storage,
		database,
		clientColRef,
		add,
		getClientDoc,
		Delete,
	};
}

export default Firebase()