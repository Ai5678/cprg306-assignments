import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export const getItems = async (userId) => {
    try {
      const items = [];
      const itemsCollection = collection(db, `users/${userId}/items`);
      const itemsSnapshot = await getDocs(itemsCollection);
      itemsSnapshot.forEach((doc) => {
        items.push({
          id: doc.id,
          ...doc.data()
        });
      });
      return items;
    } catch (error) {
      console.error("Error getting items: ", error);
      throw new Error("Error getting items");
    }
  };
  
  export const addItem = async (userId, item) => {
    try {
      const itemsCollection = collection(db, `users/${userId}/items`);
      const newItemRef = await addDoc(itemsCollection, item);
      return newItemRef.id;
    } catch (error) {
      console.error("Error adding item: ", error);
      throw new Error("Error adding item");
    }
  };