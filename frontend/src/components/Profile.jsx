import React from "react";
import { GoArrowLeft } from "react-icons/go";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div className="w-[50%]">
      <div>
        <div className="flex items-center m-2 ">
          <Link to={"/"} className="px-3 py-3 hover:bg-slate-100 rounded-full">
            <GoArrowLeft size={24} />
          </Link>
          <div>
            <h1 className="text-2xl  font-semibold">Dhruv </h1>
            <p className=""> 5 posts</p>
          </div>
        </div>
        <img
          className="h-48 w-full bg-slate-400"
          src="https://pbs.twimg.com/profile_banners/3279344658/1712251525/1500x500"
          alt=""
        />
        <div className="absolute  top-48 left-96  ">
          <Avatar
            src="https://pbs.twimg.com/profile_images/1775131786684891136/JPlYLyjf_400x400.jpg"
            className=" border bg-slate-100"
            size="130"
            round={true}
          />
        </div>
        
          <div className="text-right p-2">
          <button className="px-3 border rounded-full p-2 hover:bg-slate-200 ">Edit Profile</button>
          </div>

          <div className="m-4">
            <h1 className="text-2xl font-bold">Dhruv</h1>
            <p className="text-gray-500 -mt-1">@jangracoder</p>
            <p className="mt-2 leading-tight">Engineer @ Google | Building - takeUforward | Youtuber (400K+ Subs) | Angular, Java | Cricket Enthusiast | http://Ex-Media.net, Amazon</p>
          </div>
        
      </div>
    </div>
  );
}

export default Profile;
