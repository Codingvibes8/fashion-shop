
import Menu from "@/src/components/Menu";
import Link from "next/link";

import { FaCanadianMapleLeaf } from "react-icons/fa";

const Navbar=()=>{
    return(
        <div className="h-20 bg-indigo-400  px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
            {/* MOBILE */}
            <div className="h-full flex items-center justify-between md:hidden">
                <Link href="/fashion-store/public" className={'flex items-center justify-center gap-2'}>
                    <div className={'rounded-full bg-white p-1'}>
                        <FaCanadianMapleLeaf size={35}/>
                    </div>
                    <div className={'flex flex-col text-white font-bold'}>
                        <span className="text-2xl tracking-wide">Trendies</span>
                        <span className="text-sm">Online Fashion Store </span>
                    </div>
                </Link>
                <Menu/>
            </div>
            {/* BIGGER SCREENS */}
            <div className="hidden md:flex items-center justify-between gap-8 h-full">
                {/* LEFT */}
                <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
                    <Link href="/fashion-store/public" className="flex items-center gap-3">
                        <div className={'rounded-full bg-white p-1'}>
                            <FaCanadianMapleLeaf size={35} />
                        </div>

                        <div className={'flex flex-col text-white font-bold'}>
                        <div className="text-2xl tracking-wide">Trendies</div>
                        <span className="text-sm">Online Fashion Store </span>
                        </div>
                    </Link>
                    <div className="hidden xl:flex gap-4">
                        <Link href="/fashion-store/public">Homepage</Link>
                        <Link href="/fashion-store/public">Shop</Link>
                        <Link href="/fashion-store/public">Deals</Link>
                        <Link href="/fashion-store/public">About</Link>
                        <Link href="/fashion-store/public">Contact</Link>
                    </div>
                </div>
                {/* RIGHT */}
                <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
                    {/*<SearchBar />*/}
                    <p>SearchBar</p>
                    {/*<NavIcons />*/}
                    <p>NavIcons</p>
                </div>
            </div>
        </div>)
}
export default Navbar