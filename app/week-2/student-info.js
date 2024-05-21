import Link from "next/link";

export default function StudentInfo(){
    let name = 'Narisara';
    const linkStyles = "underline text-cyan-600 hover:text-cyan-300";
    return(
        <div className="h-screen">
            <h2>My name is {name}</h2>
            <Link className={linkStyles} href="https://github.com/Ai5678/cprg306-assignments.git">My GitHub repo</Link>
        </div>
    )
}