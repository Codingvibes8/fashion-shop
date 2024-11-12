"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Menu = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="">
            <Image
                src="/menu.png"
                alt=""
                width={28}
                height={28}
                className="cursor-pointer text-white"
                onClick={() => setOpen((prev) => !prev)}
            />
            {open && (
                <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl  z-10">
                    <Link href="/fashion-store/public">Homepage</Link>
                    <Link href="/fashion-store/public">Shop</Link>
                    <Link href="/fashion-store/public">Deals</Link>
                    <Link href="/fashion-store/public">About</Link>
                    <Link href="/fashion-store/public">Contact</Link>
                    <Link href="/fashion-store/public">Logout</Link>
                    <Link href="/fashion-store/public">Cart(1)</Link>
                </div>
            )}
        </div>
    );
};

export default Menu;