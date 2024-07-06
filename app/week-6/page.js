"use client"
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from './items.json';
import { useState } from "react";

export default function Page(){
    const[items, setItems] = useState(itemsData.map((item) => ({...item})));
    
    const handleAddItem = (item) => {
        setItems([...items, item]);
    }

    return(
        <main>
            <h1 className="text-3xl font-bold ml-4">Shopping List</h1>
            <NewItem onHandleAddItem={handleAddItem}/>
            <ItemList items={items} />
        </main>
    );
}
