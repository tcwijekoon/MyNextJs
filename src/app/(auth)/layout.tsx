'use client'

import { link } from "fs";
import Link from "next/link"
import { usePathname } from "next/navigation"
import './styles.css'
import { useState } from "react";
import { Input } from "postcss";

const navLinks = [
    {name : "Register", href: "/register"},
    {name : "Login", href: "/login"},
    {name : "Forgot password", href: "/forgot-password"},
]

export default function AuthLayout({
    children,
}: {
    childre : React.ReactNode
}){
    const pathName = usePathname();
    const [input, setInput] = useState("");

    return (       
        <div>
            <div>
                <input value={input} onChange={(e) => setInput(e.target.value)} />
            </div>
            {navLinks.map((link)=> {
                const isActive = pathName.startsWith(link.href);
                console.log(pathName + link.href);
                console.log(isActive);
                return (
                    <Link 
                    href = {link.href} 
                    key = {link.href}
                    className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4" }>
                        {link.name}
                    </Link>
                )
            })}
            {children}
        </div>
    )
}