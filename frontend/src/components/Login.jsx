import React, { useState } from "react";

function Login() {
    const [isLogin,setisLogin]=useState(false);
    const loginHandler =()=>{
            setisLogin(!isLogin);
    }
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex gap-32 ">
        <div className=" ">
          <img
            className="size-80"
            src="https://www.edigitalagency.com.au/wp-content/uploads/new-Twitter-logo-x-black-png.png"
            alt=""
          />
        </div>
        <div className="">
          <div className="-mt-20">
            <h1 className="text-7xl font-bold tracking-tight">Happening now</h1>
          </div>
          <div className="mt-8">
            <p className="text-3xl font-semibold mb-2">Login</p>
            <form className="flex flex-col w-[50%] gap-3">
            {
                !isLogin && (<>
                        
            <input type="text" placeholder="Name" className="outline-blue-500 px-3 py-1 rounded-full border " />
              <input type="text" placeholder="Username" className="outline-blue-500 px-3 py-1 rounded-full border "/>

                </>)
            }
            
              <input type="text" placeholder="Email" className="outline-blue-500 px-3 py-1 rounded-full border "/>
              <input type="text" placeholder="Password" className="outline-blue-500  px-3 py-1 rounded-full border "/>
              
              <button className="bg-sky-400 rounded-full py-2 hover:bg-sky-500   text-white">{isLogin ? "Log in " : "Sign up "}</button>
              <h1 className="text-lg">{isLogin ?"New to X ?" : "Already on X ?"} <span onClick={loginHandler}  className="text-blue-600 cursor-pointer">Click here</span></h1>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
