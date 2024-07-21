import React from "react";
import Avatar from "react-avatar";
import { CiImageOn } from "react-icons/ci";



function Createpost() {
  return (
    <div className=" ">
      <div className="flex justify-around border-b ">
        <div className=" w-full text-lg py-3 hover:bg-gray-200 text-center ">
          For You
        </div>
        <div className=" w-full text-lg py-3 hover:bg-gray-200 text-center">
          Following
        </div>
      </div>
      <div className="border-b m-2">
        <div className="flex     " >
          <div>
            <Avatar
              src="https://pbs.twimg.com/profile_images/1775131786684891136/JPlYLyjf_400x400.jpg"
              className=""
              size="40"
              round={true}
            />
          </div>
          <textarea  className="text-2xl pl-2  outline-none w-full resize-none" placeholder="What is happening ?"></textarea>
        </div>
        <div className="m-3   flex justify-between  ">
          <CiImageOn className="h-10 w-6 ml-5" />
          <button className="text-xl   text-white bg-sky-500 px-4 rounded-full  ">
            Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default Createpost;
