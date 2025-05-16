import React from 'react'
import Image from "next/image";
import BookCover from "@/components/BookCover";
import BorrowBook from "@/components/BorrowBook";

interface Props extends Book {
    userId: string;
}

export const BookOverview = ({
                                 title,
                                 author,
                                 genre,
                                 rating,
                                 totalCopies,
                                 availableCopies,
                                 description,
                                 coverColor,
                                 coverUrl,
                                 id,
                                 userId,
                             }: Props) => {
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
                            <p>Total Books: <span>{totalCopies}</span></p>
                            <p>Available Books: <span>{availableCopies}</span></p>
                        </div>

                        <p className="book-description">
                            {description}
                        </p>
                    </div>

                    <div>
                        <BorrowBook userId={userId} bookId={id} />
                    </div>
                </div>

                <div className="relative flex justify-center items-start mt-10 lg:mt-0">
                    <div className="relative">
                        <BookCover
                            variant="wide"
                            className="z-10"
                            coverColor={coverColor}
                            coverImage={coverUrl}
                        />
                        <div className="absolute left-16 top-10 rotate-12 opacity-40 max-sm:hidden">
                            <BookCover
                                variant="wide"
                                coverColor={coverColor}
                                coverImage={coverUrl}
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>

    )
}
