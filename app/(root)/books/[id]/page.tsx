import React from 'react'
import {books} from "@/database/schema";
import {db} from "@/database/drizzle";
import {eq} from "drizzle-orm";
import {redirect} from "next/navigation";
import {BookOverview} from "@/components/BookOverview";
import {auth} from "@/auth";
import BookVideo from "@/components/BookVideo";

const Page = async ({params} : {params: Promise<{id: string}>}) => {

    const id = (await params).id;
    const session = await auth()

    // Fetch data based on id
    const [bookDetails] = await db.select().from(books).where(eq(books.id, id)).limit(1);

    if(!bookDetails) redirect("/404")

    return (
        <>
        <BookOverview {...bookDetails} userId={session?.user?.id as string} />

            <div className="book-details">
                <div className="flex-[1.5]">

                    <section className="flex flex-col gap-7">
                        <div className="text-white">
                            <h3>Video</h3>
                        </div>
                        <BookVideo videoUrl={bookDetails.videoUrl}/>
                    </section>

                    <section className="mt-10 flex flex-col gap-7">
                        <h3>Summary</h3>
                        <div className="space-y-5 text-xl text-white">
                            {bookDetails.summary}
                        </div>
                    </section>
                </div>

                {/* SIMILAR BOOKS */}
            </div>
        </>
    )
}
export default Page

