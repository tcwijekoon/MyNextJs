import Link from "next/link";

export default function Home() {
    return <>
        <h1> hello next</h1>
        <Link href="/blog">Blog</Link><h1/>
        <Link href="/products">products</Link>
    </> 
}