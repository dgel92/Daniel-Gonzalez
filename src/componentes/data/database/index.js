import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, query, where, collection, getDocs} from 'firebase/firestore/lite'

const firebaseConfig = {
    apiKey: "AIzaSyACZSI1K6AgmobhIpocmSn3F4iIuz0XHb8",
    authDomain: "desafiocoderhousereactdanielg.firebaseapp.com",
    projectId: "desafiocoderhousereactdanielg",
    storageBucket: "desafiocoderhousereactdanielg.appspot.com",
    messagingSenderId: "354147849886",
    appId: "1:354147849886:web:8be085fe662bbc7a8e8d8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(app);

export default firestoreDB;

export async function getAllItems(){
    const miColec = collection(firestoreDB, 'items');
    /*getDocs(miColec).then(result => console.log(result))*/

    const itemsSnap = await getDocs(miColec);

    return itemsSnap.docs.map(doc =>{
        return{
            ...doc.data(),
            id: doc.id
        }
    });
}

export async function getItemByCategory(categoryId){
    const miColec = collection(firestoreDB, 'items');
    const queryiItems = query(miColec, where("categoria","==", categoryId));

    const itemsSnap = await getDocs(queryiItems);
    return itemsSnap.docs.map(doc=>{
        return{
            ...doc.data(),
            id: doc.id
        }
    });
}

export async function getItem(id){
    const miColec = collection(firestoreDB, 'items');
    const itemRef =doc(miColec, id);
    const itemSnap = await getDoc(itemRef); 

    return { ...itemSnap.data(id), id: itemSnap.id };
}
