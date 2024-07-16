import React from "react";
import Avatar from "react-avatar";
import { FaRegComment } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";

function Tweet() {
  return (
    <div className="">
      <div className="p-3 border-b">
        <div className="flex">
          <Avatar
            src="https://pbs.twimg.com/profile_images/1775131786684891136/JPlYLyjf_400x400.jpg"
            className=""
            size="40"
            round={true}
          />
        
          <div className="ml-2">
            <div className="flex">
              <h1 className="font-semibold">Dhruv</h1>
              <p className="ml-1 text-gray-500">@jangracoder . 2m</p>
            </div>
            <div>
              <p>Hi this is my first tweet.</p>
            </div>
          </div>
          
        </div>
        <div className="flex justify-around mt-5">
            <div className="flex items-center hover:bg-sky-100 cursor-pointer rounded">
            <FaRegComment className="h-5 w-4  "/>
            <p>0</p>
            </div>
            
            <div className="flex items-center hover:border-red-200 rounded">
            <CiHeart className="h-5 w-5"/>
            <p>0</p>
            </div>
            <div className="flex items-center hover:bg-green-200 rounded">
            <CiBookmark className="h-5 w-5"/>
            <p>0</p>
            </div>
            
            
         
        </div>
      </div>
    </div>
  );
}

export default Tweet;
