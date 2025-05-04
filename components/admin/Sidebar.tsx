"use client";
import React from 'react'
import Image from "next/image";
import {adminSideBarLinks} from "@/constants";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {usePathname} from "next/navigation";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Session} from "next-auth";

const Sidebar = ({session}: { session: Session }) => {

    const pathname = usePathname();

    return (
        <div className="admin-sidebar">
            <div>
                <div className="logo">
                    <Image src="/icons/logo.png" alt="logo" width={40} height={40}/>
                    <h1>BookWise</h1>
                </div>

                <div className="mt-10 flex flex-col gap-5">
                    {adminSideBarLinks.map((link) => {
                        const isSelected = (link.route !== "admin" && pathname.includes(link.route) && link.route.length > 1) || pathname === link.route;

                        return (
                            <Link href={link.route} key={link.route}>
                                <div className={cn("link", isSelected && "bg-primary shadow-sm")}>
                                    <div className="relative size-5">
                                        <Image src={link.img} alt="icon" fill
                                               className={`${isSelected ? "brightness-0 invert" : "object-contain"}`}/>
                                    </div>

                                    <p className={cn(isSelected ? 'text-white' : 'text-black')}>{link.text}</p>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>

            <div className="user">
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png"/>
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <div className="flex flex-col max-md:hidden">
                    <p className="font-semibold text-black">{session?.user?.name}</p>
                    <p className="text-black text-sm">{session?.user?.email}</p>
                </div>
            </div>
        </div>
    )
}
export default Sidebar
