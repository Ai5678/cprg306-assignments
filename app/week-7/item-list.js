'use client'
import { useState } from "react";
import Item from "./item";

export default function ItemList({items, onItemSelect}){
    const [sortBy,setSortBy] = useState("name");

    // group items by category
    const groupByCategory = (items) => {
        return items.reduce((accumulative, item) => {
            const key = item.category;
            if(!accumulative[key]){
                accumulative[key] = [];
            }
            accumulative[key].push(item);
            return accumulative;
        }, {});
    };
    
    const handleChangeSort = (event) => setSortBy(event.target.value);
    
    // sorting function
    const sortedItems = items.sort((a,b) => {
        if(sortBy === "groupedCategory"){
            return 0;
        }
        if(isNaN(parseInt(a[sortBy]))){
            let nameA = a[sortBy].toUpperCase();
            let nameB = b[sortBy].toUpperCase();
            if(nameA < nameB){
                return -1;
            }
            if(nameA > nameB){
                return 1;
            }
            return 0;
        } else {
            return a.id - b.id;
        }
    });

    // render grouped items
    const renderGroupedItems = (groupedItems) => {
        return Object.keys(groupedItems).sort().map((category) => (
            <div key={category}>
                <h2 className="text-2xl font-mono ml-4 mt-4 mb-2">{category}</h2>
                {groupedItems[category].map((eachItem) => (
                    <Item key={eachItem.id} item={eachItem} onSelect={onItemSelect}/>
                ))}
            </div>
        ));
    }

    return(
        <div>
            <section className="ml-4 mt-2">
                <label className="text-xl font-medium">Sort By: </label>
                <button 
                value="name"
                onClick={handleChangeSort} 
                className={`m-4 w-28 rounded-md hover:bg-amber-700 hover:text-white ${sortBy === 'name' ? 'bg-amber-700 text-white' : 'bg-amber-400 text-slate-900'}`}>Name</button>
                <button 
                value="category" 
                onClick={handleChangeSort} 
                className={`w-28 rounded-md hover:bg-amber-700 hover:text-white ${sortBy === 'category' ? 'bg-amber-700 text-white' : 'bg-amber-400 text-slate-900'}`}>Category</button>
                <button 
                value="groupedCategory" 
                onClick={handleChangeSort} 
                className={`ml-4 w-28 rounded-md hover:bg-amber-700 hover:text-white ${sortBy === 'groupedCategory' ? 'bg-amber-700 text-white' : 'bg-amber-400 text-slate-900'}`}>Grouped Category</button>
            </section>
            <section>
                {/* render */}
                {sortBy === "groupedCategory" ? renderGroupedItems(groupByCategory(sortedItems)) : sortedItems.map((eachItem) => (
                <Item key={eachItem.id} item={eachItem} onSelect={() => onItemSelect(eachItem)}/>))
                }
            </section>
        </div>
    );
}