"use client"
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context"
import Link from "next/link";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function Page(){
    // const[items, setItems] = useState(itemsData.map((item) => ({...item})));
    const[items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState("");
    const {user} = useUserAuth();
    
    const handleAddItem = async (item) => {
        try {
            const newItemId = await addItem(user.uid, item);
            setItems([...items, { id: newItemId, ...item }]);
        } catch (error) {
            console.log(error);
        }
    };
    
    // This function extracts the name of the selected item, cleans it up, and updates the selectedItemName state. This event handler is passed down to the ItemList component and is called when an item in the list is clicked
    const handleItemSelect = (item) => {
        const cleanedItemName = item.name
            .split(',')[0]
            .trim()
            .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
        setSelectedItemName(cleanedItemName);
    };

    const loadItems = async () => {
        try {
            const items = await getItems(user.uid);
            setItems(items);
        } catch (error) {
            console.error("Error loading items: ", error);
        }
    };

    useEffect(() => {
        if (user) {
            loadItems();
        }
    }, [user]);

    return(
        <main>
            <h1 className="text-3xl font-bold ml-4">Shopping List</h1>
            {user ? (
            <div className="flex">
                <div className="flex-1 max-w-sm-m-2">
                    <NewItem onHandleAddItem={handleAddItem}/>
                    <ItemList items={items} onItemSelect={handleItemSelect}/>
                </div>
                <div className="flex-1 max-w-sm-m-2">
                <MealIdeas ingredient={selectedItemName} />
                </div>
            </div>
            ) : (
                <div className="m-2">
                    <p className="text-red-400 font-bold text-lg">You must be logged in to view this page.</p>
                    <Link href="/week-8/" className="hover:underline hover:text-blue-400">Click here to return to sign in page.</Link>
                </div>
            )}
        </main>
    );
}
