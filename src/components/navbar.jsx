// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { FaBars, FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { HiUser } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa6";
import { CiShoppingCart } from "react-icons/ci";
import avatarImg from "../assets/avatar.png";
import { useSelector } from "react-redux";
import { useAuth } from "../context/AuthContext";

const navigation = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Orders", href: "/order" },
  { name: "Cart Page", href: "/cart" },
  { name: "Check Out", href: "/checkout" },
];

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);

  const { currentUser, logout } = useAuth();
  const handleLogOut = () => {
    logout();
  };
  // const currentUser = false;
  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6">
      <div className="bg-primary text-white py-2 text-center font-semibold text-lg">
        <h1 className="text-3xl md:text-4xl font-bold">
          Welcome to Your Dream Shop – Where Quality Meets Convenience!
        </h1>

        <p className="mt-2 text-lg md:text-xl">
          Discover the Best Deals on Your Favorite Products!
        </p>

        <p className="mt-2 text-lg md:text-xl">
          Explore, Shop, and Enjoy – Your Ultimate Shopping Destination!
        </p>

        <p className="mt-2 text-lg md:text-xl">
          Shop the Latest Trends, Delivered Right to Your Door!
        </p>

        <p className="mt-2 text-lg md:text-xl font-semibold">
          Unbeatable Offers Await – Start Shopping Today!
        </p>
      </div>
      <nav className="flex justify-between items-center">
        <div className="flex item-center md:gap-16 gap-4">
          <Link to="/">
            <FaBars className="size-6" />
          </Link>
          <div className="relative sm:w-72 w-40 space-x-2">
            <FaSearch className="absolute inline-block left-3 inset-y-2" />
            <input
              type="text"
              placeholder="Search here"
              className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md
              focus:outline-none"
            />
          </div>
        </div>

        <div className="relative flex item-center md:space-x-3 space-x-2">
          <div>
            {currentUser ? (
              <>
                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                  <img
                    src={avatarImg}
                    alt=""
                    className={`size-7 rounded-full $
                            {currentUser ? 'ring-2 ring-blue-500':''}`}
                  />
                </button>
                {isDropdownOpen && (
                  <div
                    className="absolute right-0 mt-2 w-48 bg-white
                            shadow-lg rounded-md z-40"
                  >
                    <ul className="py-2">
                      {navigation.map((item) => (
                        <li key={item.name}>
                          <Link
                            to={item.href}
                            className="block
                                                px-4 py-2 text-sm hover:bg-gray-100"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                      <li>
                        <button
                          onClick={handleLogOut}
                          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-200">
                            Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <Link to="/login">
                <HiUser className="size-8" />
              </Link>
            )}
          </div>
          <button className="hidden sm:block">
            <FaRegHeart className="size-6" />
          </button>
          <Link
            to="/cart"
            className="bg-primary p-1 sm:px-6 px-2 flex items-center rounded-sm"
          >
            <CiShoppingCart />
            {cartItems.length > 0 ? (
              <span className="text-sm font-semibold sm:ml-1">
                {cartItems.length}
              </span>
            ) : (
              <span className="text-sm font-semibold sm:ml-1">0</span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
