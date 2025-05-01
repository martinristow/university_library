"use client"
import Link from "next/link";
import {usePathname} from "next/navigation";
import {cn} from "@/lib/utils";
import Image from "next/image";

const Header = () => {

    const pathname = usePathname();
    console.log(pathname);

    return (
        <header className="my-10 flex justify-between gap-5">
            <Link href="/">
                <Image src="/icons/logo.png" alt="logo" width={40} height={40} priority={true}/>
            </Link>

            <ul className="flex flex-row items-center gap-8">
                <li>
                    <Link
                        href="/library"
                        className={cn("text-base cursor-pointer capitalize", pathname === "/library" ? "accent-yellow-700 font-semibold" : "text-white")}
                    >
                        Library
                    </Link>
                </li>
            </ul>
        </header>
    )
}
export default Header
