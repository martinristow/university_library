import React from 'react'
import BookCard from "@/components/BookCard";

interface Props {
    books: Book[];
    containerClassName?: string;
    title: string;
}

const BookList = ({title, books, containerClassName}: Props) => {
    if(books.length < 2) return;
    return (
        <section className={containerClassName}>
            <h2 className="font-sans text-4xl text-white">{title}</h2>

            <ul className="book-list">
                {books.map(book => (
                    <BookCard key={book.title} {...book} />
                ))}
            </ul>
        </section>
    )
}
export default BookList
