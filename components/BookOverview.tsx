import React from 'react'
import Image from "next/image";
import {Button} from "@/components/ui/button";
import BookCover from "@/components/BookCover";

export const BookOverview = ({
                                 title,
                                 author,
                                 genre,
                                 rating,
                                 total_copies,
                                 available_copies,
                                 description,
                                 color,
                                 cover
                             }: Book) => {
    return (
        <section className="book-overview">
            <div className="flex flex-col gap-5 lg:flex-row lg:justify-between">

                {/* Text Content (Left side) */}
                <div className="flex-1 flex flex-col gap-5">
                    <h1 className="text-6xl text-white">{title}</h1>

                    <div className="book-info">
                        <p className="text-white">By <span className="font-semibold">{author}</span></p>
                        <p className="text-white">Category <span className="font-semibold">{genre}</span></p>

                        <div className="flex flex-row gap-1">
                            <Image src="/icons/star.svg" alt="star" width={22} height={22}/>
                            <p>{rating}</p>
                        </div>

                        <div className="book-copies">
                            <p>Total Books: <span>{total_copies}</span></p>
                            <p>Available Books: <span>{available_copies}</span></p>
                        </div>

                        <p className="book-description">
                            {description}
                        </p>
                    </div>

                    <div>
                        <Button className="book-overview_btn">
                            <Image src="/icons/book.svg" alt="book" width={20} height={20}/>
                            <p className="text-xl font-mono text-black">Borrow</p>
                        </Button>
                    </div>
                </div>

                <div className="relative flex justify-center items-start mt-10 lg:mt-0">
                    <div className="relative">
                        <BookCover
                            variant="wide"
                            className="z-10"
                            coverColor={color}
                            coverImage={cover}
                        />
                        <div className="absolute left-16 top-10 rotate-12 opacity-40 max-sm:hidden">
                            <BookCover
                                variant="wide"
                                coverColor={color}
                                coverImage={cover}
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>

    )
}
