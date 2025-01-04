import React from "react";
import { assets} from "../assets/assets";

const AppDownload = () => {
  return (
    <div className="container px-4 2xl:px-20 mx-auto my-20">
      <div className="relative bg-gray-200 rounded-xl p-12 sm:p-24 lg:p-32">
        <div>
            <h1 className="text-2xl sm:text-4xl font-bold mb-8 max-w-md">Download Mobile App for Better Experience</h1>
            <div className="flex gap-4">
                <a>
                    <img src={assets.play_store} alt="google play" />
                </a>
                <a>
                    <img src={assets.app_store} alt="Apple Store" />
                </a>
            </div>
        </div>
        <img className="absolute w-80 right-0 bottom-0 mr-32 max-lg:hidden" src={assets.app_main_img} alt="main image" />
      </div>
    </div>
  );
};

export default AppDownload