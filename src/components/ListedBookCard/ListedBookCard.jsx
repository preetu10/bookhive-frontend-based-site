import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
const ListedBookCard = ({ book }) => {
  const {
    image,
    bookId,
    bookName,
    author,
    tags,
    publisher,
    yearOfPublishing,
    totalPages,
    category,
    rating,
  } = book;

  const navigate = useNavigate();
  const handleViewBook = (bookId) => {
    navigate(`/viewBook/${bookId}`);
  };

  return (
    <div className="card flex flex-col gap-5 md:card-side bg-base-100 shadow-xl my-8">
      <figure className="px-10 pt-10 w-[280px] h-[330px] mt-5">
        <img src={image} alt="books" className="rounded-xl" />
      </figure>
      <div className="card-body mt-3">
        <h2 className="card-title">{bookName}</h2>
        <p>By: {author} </p>
        <div className="text-start ml-3 flex flex-col md:flex-row md:gap-4">
          <div>
            <span className="font-bold">Tag: </span>
            {tags.map((tag, idx) => (
              <button
                key={idx}
                className="rounded-full text-[#23BE0A] font-medium bg-[#23BE0A0D] px-5 py-3 mx-5 my-6"
              >
                {tag}
              </button>
            ))}
          </div>
          <div className="flex flex-row gap-3 md:items-center md:justify-center">
            <div>
              <figure className="w-[21px] h-[28px] text-start">
                <img src="Vector.png" alt="" />
              </figure>
            </div>
            <div>
              <p className="text-[#131313CC] text-lg">
                Year of Publishing: {yearOfPublishing}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-8">
          <div className="flex flex-row gap-3 items-center justify-center">
            <img src="people.png" alt="" />
            <p className="text-[#131313CC] text-lg">Publisher: {publisher}</p>
          </div>
          <div className="flex flex-row gap-3 items-center justify-center">
            <img src="page.png" alt="" />
            <p className="text-[#131313CC] text-lg">Page {totalPages}</p>
          </div>
        </div>
        <hr></hr>
        <div className="flex flex-row gap-2 md:gap-5 ">
          <button className="rounded-full text-[#328EFF] font-medium bg-[#328EFF26] px-2 md:px-5 py-3 md:mx-5 my-6">
            Category: {category}
          </button>
          <button className="rounded-full text-[#FFAC33] font-medium bg-[#FFAC3326] px-2 md:px-5 py-3 md:mx-5 my-6">
            Rating: {rating}
          </button>
          <button
            onClick={() => {
              handleViewBook(bookId);
            }}
            className="rounded-full text-white font-medium bg-[#23BE0A] px-2 md:px-5 py-3 md:mx-5 my-6"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

ListedBookCard.propTypes = {
  book: PropTypes.object.isRequired,
};

export default ListedBookCard;
