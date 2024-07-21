import React from "react";
import Avatar from "react-avatar";

import { IoIosSearch } from "react-icons/io";

function Rightbar() {
  return (
    <div className="w-[30%] border-l ">

      <div className="bg-slate-200 flex mx-5 mt-2  items-center p-2 rounded-full">
        <IoIosSearch className="h-5 w-6 " />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none text-lg"
        />
      </div>
      <div className=" mx-5 mt-5 bg-slate-100 p-2 rounded-lg">
        <h1 className="text-2xl font-bold">Who to follow</h1>

        <div className="flex items-center justify-between mt-2 mb-5   ">
          <div className=" flex">
            <Avatar
              src="https://pbs.twimg.com/profile_images/1775131786684891136/JPlYLyjf_400x400.jpg"
              className=""
              size="40"
              round={true}
            />

            <div className=" pl-2">
              <h1 className="font-semibold ">Dhruv</h1>
              <p className=" text-gray-500 text-sm">@jangracoder</p>
            </div>
          </div>
          <div>
            <button className="text-white bg-black px-5 py-1 rounded-full ">
              Follow
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between mb-5   ">
          <div className=" flex">
            <Avatar
              src="https://pbs.twimg.com/profile_images/1711696987656159232/_V55R28E_400x400.jpg"
              className=""
              size="40"
              round={true}
            />

            <div className="pl-2">
              <h1 className="font-semibold -mb-1">Sonu</h1>
              <p className=" text-gray-500 text-sm">@sonusnjha</p>
            </div>
          </div>
          <div>
            <button className="text-white bg-black px-5 py-1 rounded-full ">
              Follow
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Rightbar;
