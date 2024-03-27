import PropTypes from "prop-types";
import {  useNavigate } from "react-router-dom";
const BookCard = ({ book }) => {
  const { bookId, image, tags, bookName, author, category, rating } = book;

  const navigate=useNavigate();
    const handleViewBook = (bookId) => {
         navigate(`/viewBook/${bookId}`);
    }

  return (
      <div  onClick={()=>{handleViewBook(bookId)}} className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10 h-[270px]">
          <img
            src={image}
            alt="books"
            width="200px"
            height="230px"
            className="rounded-xl"
          />
        </figure>
        <div className="text-start ml-3">
       {
        tags.map((tag,idx)=> <button key={idx} className="rounded-full text-[#23BE0A] font-medium bg-[#23BE0A0D] px-5 py-3 mx-5 my-6">{tag}</button>)
       }
       </div>
        <div className="card-body  text-start">
          <h2 className="card-title">{bookName}</h2>
          <p>By:  {author}</p>
          <hr></hr>
          <div className="flex flex-row justify-between items-stretch">
         <p className="text-[#131313CC] text-lg">{category}</p>
         <p className="text-[#131313CC] text-lg text-end">{rating} 
         
         </p>
          </div>
        </div>
      </div>
    
  );
};

BookCard.propTypes = {
  book: PropTypes.object.isRequired,
};

export default BookCard;
