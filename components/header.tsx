'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Header(){
    const pathname = usePathname();
    return(
        <div className="grid grid-cols-2 mb-10">
            <h1 className="text-2xl ">Hello</h1>
            <ul className=" flex justify-end space-x-2">
                <li><Link className={`${pathname === '/'? 'text-green-400': 'text-gray-50'}`} href="/">Home</Link></li>
                <li><Link className={`${pathname === '/work'? 'text-green-400': 'text-gray-50'}`}  href="/work">Work</Link></li>
                <li><Link className={`${pathname === '/blog'? 'text-green-400': 'text-gray-50'}`}  href="/blog">Blog</Link></li>
                <li><Link className={`${pathname === '/contact'? 'text-green-400': 'text-gray-50'}`}  href="/contact">Contact</Link></li>
            </ul>
        </div>
    )
}