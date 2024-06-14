import Link from "next/link";

export default function Home() {
  const linkStyles = "hover:underline hover:text-cyan-300";

  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <ul>
        <li>
          <Link className={linkStyles} href={"./week-2"}>Week 2 Assignment</Link>
        </li>
        <li>
          <Link className={linkStyles} href={"./week-3"}>Week 3 Assignment</Link>
        </li>
        <li>
          <Link className={linkStyles} href={"./week-4"}>Week 4 Assignment</Link>
        </li>
      </ul>
    </main>
  );
}
