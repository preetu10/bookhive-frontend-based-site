import { Link } from "react-router-dom";
const ErrorPage = () => {
    return (
        <div className=" max-w-6xl text-center font-extrabold text-5xl mx-auto mt-40 py-8">
            <p className="py-8">404 Not Found</p>
           <Link to="/"><button className="btn bg-[#23BE0A] text-white text-2xl ">Go back to Home page</button></Link>
        </div>
    );
};

export default ErrorPage;