import { NavLink } from "react-router-dom";

const Header = () => {
  const link = (
    <>
      <li className="px-2 text-[#131313CC]">
        <NavLink to="/"
        style={({isActive})=>{
            return{
                color:isActive?"#23BE0A":"#131313CC",
                border:isActive?"2px solid #23BE0A ":"none",
                backgroundColor:isActive&&"white",
                fontWeight:isActive&&"bold",
            };
        }}
        >Home</NavLink>
      </li>
      <li className="px-2 text-[#131313CC]">
        <NavLink to="/listed"
         style={({isActive})=>{
            return{
                color:isActive?"#23BE0A":"#131313CC",
                border:isActive?"2px solid #23BE0A ":"none",
                backgroundColor:isActive&&"white",
                fontWeight:isActive&&"bold",
            };
        }}
        >Listed Books</NavLink>
      </li>
      <li className="px-2 text-[#131313CC]">
        <NavLink to="/pages"
         style={({isActive})=>{
            return{
                color:isActive?"#23BE0A":"#131313CC",
                border:isActive?"2px solid #23BE0A ":"none",
                backgroundColor:isActive&&"white",
                fontWeight:isActive&&"bold",
            };
        }}
        >Pages to Read</NavLink>
      </li>
      <li className="px-2 text-[#131313CC]">
        <NavLink to="/about"
         style={({isActive})=>{
            return{
                color:isActive?"#23BE0A":"#131313CC",
                border:isActive?"2px solid #23BE0A ":"none",
                backgroundColor:isActive&&"white",
                fontWeight:isActive&&"bold",
            };
        }}
        >About Us</NavLink>
      </li>
      <li className="px-2 text-[#131313CC]">
        <NavLink to="/contact"
         style={({isActive})=>{
            return{
                color:isActive?"#23BE0A":"#131313CC",
                border:isActive?"2px solid #23BE0A ":"none",
                backgroundColor:isActive&&"white",
                fontWeight:isActive&&"bold",
            };
        }}
        >Contact Us</NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {link}
            </ul>
          </div>
          <a className="btn btn-ghost font-extrabold  text-3xl">Book Hive</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-[#23BE0A] text-white font-bold mr-4">Sign In</a>
          <a className="btn text-white bg-[#59C6D2] font-bold">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
