import { useEffect, useState } from "react";
import BookCard from "../BookCard/BookCard";
const ShowBooks = () => {
    const [books,setBooks]=useState([]);
    useEffect(() =>{
        fetch('books.json')
        .then(res=>res.json()
        .then(data=>setBooks(data)));
    },[]);

    return (
        <div>
            <h2 className="text-center font-bold text-4xl mx-auto mb-10 mt-24">Books</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-5">
            {
                books.map(book=><BookCard key={book.bookId} book={book} />)
            }
            </div>
        </div>
    );
};

export default ShowBooks;