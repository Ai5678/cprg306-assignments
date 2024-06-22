
export default function Item({item}){
    let {name, quantity,category} = item;
    return (
    <div className="bg-slate-900 p-2 m-4 max-w-sm">
        <p className="text-xl font-bold">{name}</p>
        <p className="text-sm">Buy {quantity} in {category}</p>
    </div>
    );
}