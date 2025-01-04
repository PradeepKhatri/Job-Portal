import React, { useRef, useContext } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const Hero = () => {
  const { setSearchFilter, setIsSearched } = useContext(AppContext);

  const titleRef = useRef(null);
  const locationRef = useRef(null);

  const onSearch = () => {
    setSearchFilter({
      title: titleRef.current.value,
      location: locationRef.current.value
    });
    setIsSearched(true);
  };

  return (
    <div className="container lg:px-20 mx-auto my-10  ">
      <div className="bg-gradient-to-r from-purple-800 to-purple-950 text-white py-16 text-center mx-2 rounded-xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4 font-medium">
          {" "}
          Over 10,000+ jobs to apply
        </h2>
        <p className="text-sm max-w-xl mb-8 mx-auto font-light px-5">
          Your Next Big Career Move Starts Right Here - Explore The Best Job
          Opportunities And Take The First Step Towads Your Future !
        </p>
        <div className=" flex items-center justify-between bg-white max-w-xl pl-4 mx-4 rounded text-gray-600 sm:mx-auto ">
          <div className="flex items-center ">
            <img className="h-4 sm:h-5" src={assets.search_icon} alt="" />
            <input
              className="max-sm:text-xs p-2 outline-none w-full"
              type="text"
              placeholder="Search for jobs"
              ref={titleRef}
            />
          </div>
          <div className="flex items-center">
            <img className="h-4 sm:h-5" src={assets.location_icon} alt="" />
            <input
              className="max-sm:text-xs p-2 outline-none w-full"
              type="text"
              placeholder="Location"
              ref={locationRef}
            />
          </div>
          <button
            className="rounded bg-blue-600 text-white py-2 px-6 m-1"
            onClick={onSearch}
          >
            Search
          </button>
        </div>
      </div>

      <div className="border border-gray-300 rounded-xl shadow-md mt-5 mx-2 px-6 py-5 ">
        <div className="flex gap-10 lg:gap-16">
          <p className="text-gray-500 ">Trusted By :</p>
          <img className="h-6" src={assets.microsoft_logo} />
          <img className="h-6" src={assets.walmart_logo} />
          <img className="h-6" src={assets.accenture_logo} />
          <img className="h-6" src={assets.amazon_logo} />
          <img className="h-6" src={assets.samsung_logo} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
