import { useLoaderData } from "react-router-dom";
import ListedBookCard from "../ListedBookCard/ListedBookCard";
import { getAllWishlist, getReadFromLocalStorage } from "../../utility/localStorage";
import { useEffect, useState } from "react";
const ListedBooks = () => {
    const books= useLoaderData();
    const [bookRead,setBookRead]=useState([]);
    const [bookWish,setBookWish]=useState([]);
  useEffect(() =>{
    const readBooks= getReadFromLocalStorage();
    if(readBooks.length>0){
        const booksRead=[];
        for (const id of readBooks){
            const book=books.find(book=>book.bookId==id);
        if(book){
            booksRead.push(book);
        }
        }
        booksRead.sort((a, b) => a.bookId - b.bookId);
        setBookRead(booksRead);
    }

        const wishBooks=getAllWishlist();
        if(wishBooks.length>0){
            const booksWish=[];
            for(const id of wishBooks){
                const book=books.find(book=>book.bookId==id);
                if(book){
                    booksWish.push(book);
                }
            }
                booksWish.sort((a,b)=>a.bookId-b.bookId);
                setBookWish(booksWish);
        
    }
  },[]);
  return (
    <div>
      <div className="h-[100px] bg-[#1313130D] flex items-center mb-8 mt-4">
        <p className="font-bold text-3xl text-center mx-auto">Books</p>
      </div>
      <div className="text-center mb-20">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn text-lg bg-[#23BE0A] text-white   rounded-lg font-bold"
          >
            Sort by
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Rating</a>
            </li>
            <li>
              <a>Number of Pages</a>
            </li>
            <li>
              <a>Publish Year</a>
            </li>
          </ul>
        </div>
      </div>
      <div role="tablist" className="tabs tabs-lifted">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Read Books"
          checked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-3 my-10"
        >
          {
            bookRead.map(book=><ListedBookCard key={book.bookId} book={book}></ListedBookCard>)
          }
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="WishList Books"
         
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
           {
            bookWish.map(book=><ListedBookCard key={book.bookId} book={book}></ListedBookCard>)
          }
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
