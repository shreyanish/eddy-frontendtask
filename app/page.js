import Link from "next/link"

export default function Home() {
  return (
    <Link href="/cardflip" className="redirect--button">
        <div className="redirect--button">
          <h3 className="redirect--text">Click Me</h3>
        </div>
    </Link>
  )
}
