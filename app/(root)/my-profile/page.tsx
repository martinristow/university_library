import React from 'react'
import {Button} from "@/components/ui/button";
import {signOut} from "@/auth";

const Page = () => {
    return (
        <>
            <form action={async () => {
                "use server";

                await signOut();
            }}>
                <Button>Logout</Button>
            </form>
        </>
    )
}
export default Page
