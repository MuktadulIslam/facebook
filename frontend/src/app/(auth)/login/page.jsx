"use client"
import {Opt} from "next/font/google";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const togglePasswordVisibility = (event) => {
        event.preventDefault();
        setPasswordVisible(!passwordVisible);
    };

    return (<>
        <div className="w-full h-full login-bg flex flex-col">
            <div className="w-full flex-1 flex flex-col">
                <div className="w-full h-8 pt-3 bg-transparent flex justify-center items-baseline text-[13px] text-gray-700">
                    <button>English (UK)</button>
                </div>
                <div className="w-full flex-1 flex justify-center items-center">
                    <img src="./icon.png" className="w-[3.5rem] aspect-square rounded-full" />
                </div>
            </div>

            <div className="w-full h-60 px-4">
                <form className="space-y-3 h-auto w-full">
                    <div className="w-full h-16 relative">
                        <input type="text" id="mobile" name="mobile" placeholder=" " className="peer absolute w-full h-full pl-4 pr-12 pt-5 text-[16px] font-medium border border-gray-300 rounded-xl focus:border-gray-700 focus:outline-none text-gray-900" />
                        <label htmlFor="mobile" className="absolute w-full h-full px-4 py-2 flex flex-col justify-center font-medium text-gray-500 text-[14px] peer-placeholder-shown:text-[16px] peer-focus:text-[14px] translate-y-[-11px] peer-focus:translate-y-[-11px] peer-placeholder-shown:translate-y-[0px]  translate-x-[1px] peer-focus:translate-x-[1px] peer-placeholder-shown:translate-x-[0px] transition-all duration-200">
                            <span>
                                Mobile number or email address
                            </span>
                        </label>

                        <div className="absolute z-10 opacity-0 peer-focus:opacity-100 top-0  right-0 h-full aspect-[3/4]">
                            <button
                                onClick={(e) => {
                                    e.preventDefault()
                                    console.log("hi")
                                    document.getElementById('mobile').value = '';
                                }}
                                className="w-full h-full flex justify-center items-center text-gray-500">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-7">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>

                            </button>
                        </div>
                    </div>

                    <div className="w-full h-16 relative">
                        <input type={passwordVisible ? 'text' : 'password'}
                            id="password"
                            name="password"
                            placeholder=" "
                            className="peer absolute w-full h-full pl-4 pr-12 pt-5 text-[16px] font-medium border border-gray-300 rounded-xl focus:border-gray-700 focus:outline-none text-gray-900"
                        />
                        <label htmlFor="password" className="absolute w-full h-full px-4 py-2 flex flex-col justify-center font-medium text-gray-500 text-[14px] peer-placeholder-shown:text-[16px] peer-focus:text-[14px] translate-y-[-11px] peer-focus:translate-y-[-11px] peer-placeholder-shown:translate-y-[0px]  translate-x-[1px] peer-focus:translate-x-[1px] peer-placeholder-shown:translate-x-[0px] transition-all duration-200">
                            <span>
                                Password
                            </span>
                        </label>

                        <div className="absolute z-10 opacity-100 peer-focus:opacity-100 peer-placeholder-shown:opacity-0 top-0  right-0 h-full aspect-[3/4]">
                            <button
                                onClick={(e) => togglePasswordVisibility(e)}
                                className="w-full h-full flex justify-center items-center text-gray-500"
                            >
                                <img src={passwordVisible ? '/imgs/eyeopen.png' : '/imgs/eyeclose.png'} alt="" className="w-1/2 aspect-square" />

                            </button>
                        </div>
                    </div>

                    <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-full font-medium hover:bg-blue-700 focus:ring focus:ring-blue-500 focus:outline-none">
                        Log in
                    </button>
                </form>

                <a href="https://m.facebook.com/login/identify/" className="text-center flex justify-center text-sm text-gray-800 font-medium mt-4 cursor-pointer">
                    Forgotten Password?
                </a>
            </div>
            <div className="w-full flex-1 flex flex-col-reverse">
                <div className="w-full h-auto pb-3 px-4 space-y-3">
                    <a href="https://m.facebook.com/reg/" className="w-full h-11 flex justify-center items-center py-2 border border-blue-600 text-blue-600 rounded-full font-medium">
                        Create new account
                    </a>
                    <div className="w-full h-5 pt-1 flex justify-center items-center">
                        <img src="/imgs/meta-logo.png" alt="" className="h-full object-contain opacity-60"/>
                    </div>
                    <div className="w-full h-5 flex gap-3 justify-center items-center text-[11px] text-gray-500">
                        <a href="https://about.meta.com/">About</a>
                        <a href="https://m.facebook.com/help/?ref=pf">Help</a>
                        <Link href="">More</Link>
                    </div>
                </div>
            </div>
        </div>


    </>);
}
