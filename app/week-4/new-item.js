"use client";
import { useState } from "react";

export default function NewItem(){
    
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");
    
    const handleSubmit = (event) => {
        event.preventDefault();
        let item = {name, quantity, category};
        console.log({item});
        alert(`Added item: ${name}, quantity: ${quantity} category: ${category}`)   
    };

    return(
        <main className="display: flex justify-center">
        <form onSubmit={handleSubmit} className="p-2 m-4 bg-slate-900 max-w-sm w-full">
            <div>
                {/* <label>Name: </label> */}
                <input className="w-full mt-2 border-2 border-gray-300 p-2 rounded text-black" required
                placeholder="Item Name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}/>
            </div>
            <div className="flex justify-between w-full mt-3">
            <div>
                {/* <label>Quantity: </label> */}
                <input className="border-2 border-gray-300 p-2 rounded text-black" required
                type="number"
                min="1" max="99"                value={quantity}
                onChange={(event) => setQuantity(event.target.value)}/>
            </div>

            <div>
                {/* <label>Category: </label> */}
                <select className="border-2 border-gray-300 p-2 rounded text-black"
                value={category}
                onChange={(event) => setCategory(event.target.value)}>
                
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen_foods">Frozen Food</option>
                    <option value="canned_goods">Canned Goods</option>
                    <option value="dry_goods">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="other">Other</option>
                </select>
            </div>
            </div>
            <button className="bg-blue-500 text-white w-full rounded mt-4 p-2 font-semibold hover:bg-blue-700">+</button>
        </form>
        </main>
    )
}