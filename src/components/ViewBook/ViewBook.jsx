import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ViewBook = () => {
    const booksDetail=useLoaderData();
    const {bookId}=useParams();
    console.log(booksDetail,bookId);
    const book=booksDetail.find(book=>book.bookId==parseInt(bookId));
    console.log(book);
    const handleRead=(bookId)=>{
        
    }


    return (
        <div className="card flex-grow lg:card-side bg-base-100  m-8 p-8">
        <figure className="w-full"><img src={book.image} alt="book"/></figure>
        <div className="card-body">
          <h2 className="text-4xl font-bold  text-[#131313] mb-3">{book.bookName}</h2>
          <p className="text-[#131313CC] text-lg">By:  {book.author}</p>
          <hr></hr>
          <p className="text-[#131313CC] text-lg">{book.category}</p>
          <hr></hr>
          <p className="text-[#131313CC] text-lg mt-2 "><span className="font-bold">Review: </span>{book.review}</p>
          <p className="text-[#131313CC] text-lg mt-2 mb-2 mr-5"><span className="font-bold mr-2">Tag </span>
       {
        book.tags.map((tag,idx)=> <button key={idx} className="rounded-full text-[#23BE0A] font-medium bg-[#23BE0A0D] px-5 py-3 mx-3">{tag}</button>)
       }
          </p>
          <hr></hr>
        <div className="flex flex-row justify-between mt-2 gap-12">
            <p className="font-bold">Number of Pages:</p>
            <p className="text-end">{book.totalPages}</p>
        </div>
        <div className="flex flex-row justify-between mt-2 gap-12">
            <p className="font-bold">Publisher:</p>
            <p className="text-end">{book.publisher}</p>
        </div>
        <div className="flex flex-row justify-between mt-2 gap-12">
            <p className="font-bold">Year of Publishing:</p>
            <p className="text-end">{book.yearOfPublishing}</p>
        </div>
        <div className="flex flex-row justify-between mt-2 gap-12">
            <p className="font-bold">Rating:</p>
            <p className="text-end">{book.rating}</p>
        </div>
          <div className="card-actions mt-5 justify-start">
            <button onClick={()=>{handleRead(book.bookId)}} className="btn text-lg bg-white text-black border-[#1313134D] border-2 rounded-lg font-bold mr-4 ">Read</button>
            <button onClick={()=>{handleWishList(book.bookId)}} className="btn text-lg bg-[#50B1C9] text-white rounded-lg font-bold mr-4 ">Wishlist</button>
          </div>
        </div>
        <ToastContainer/>
      </div>
      
    );
};

export default ViewBook;