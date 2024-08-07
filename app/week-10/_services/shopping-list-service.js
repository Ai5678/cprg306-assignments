import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userId, updateItemList){
    try {
        const collectionReference = collection(db, "users", userId, "items");
        const itemsQuery = query(collectionReference);
        const querySnapshot = await getDocs(itemsQuery);
        let items = [];
        querySnapshot.forEach((doc) => {
            let thisItem = {
                id: doc.id,
                ...doc.data()
            }
            items.push(thisItem);
        });
        updateItemList(items);
    } catch (error) {
        console.log(error);
    }
}

export async function addItem(userId, item){
    try {
        const itemCollection = collection(db, "users", userId, "items");
        const newItemReference = await addDoc(itemCollection, item);
        return newItemReference.id;
    } catch (error) {
        console.log(error);
    }
}