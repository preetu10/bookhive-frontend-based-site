import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200 rounded-3xl mb-8">
        <div className="hero-content flex-col lg:flex-row-reverse lg:gap-36">
          <img
            src="image-banner.png"
            className="max-w-sm rounded-lg  bg-base-200"
          />
          <div>
            <h1 className="text-5xl font-bold mb-12">Books to freshen<br/> up your bookshelf</h1>
          <Link to="/listed"><button className="btn bg-[#23BE0A] rounded-lg text-white text-lg font-bold">Visit the list</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
