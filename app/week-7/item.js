
export default function Item({item, onSelect}){
    let {name, quantity,category} = item;
    return (
    <div onClick={() => onSelect(item)} className="bg-slate-900 p-2 m-4 max-w-sm hover:bg-red-900">
        <p className="text-xl font-bold">{name}</p>
        <p className="text-sm">Buy {quantity} in {category}</p>
    </div>
    );
}