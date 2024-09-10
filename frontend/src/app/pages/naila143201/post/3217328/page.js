import { Noto_Sans_Bengali, Inter } from "next/font/google"
import Link from "next/link";

const notoSansBengali = Noto_Sans_Bengali({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (<>
        <div>
            <div className="fixed w-screen h-dvh bg-gray-500 bg-opacity-60 flex justify-center items-center z-10">
                <Link href="/login" className="w-[92%] h-[400px] bg-white pt-12 p-5 rounded-lg relative">
                    <div className="w-10 aspect-square absolute top-2 right-2 flex justify-center items-center text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>

                    </div>

                    <div className="w-full h-32 flex justify-center items-center">
                        <img src="/imgs/icon2.png" alt="" className="w-20 aspect-square" />
                    </div>
                    <div className="w-full h-10 flex justify-center items-center text-2xl font-bold">Get the full experience </div>
                    <div className="w-full h-12 mt-1 flex justify-center items-center text-center text-[16px] text-slate-600">Log in to see the latest content and explore your interests</div>

                    <div className="flex mt-4 flex-col gap-2 font-bold text-[18px]">
                        <button className="w-full h-10 rounded-md bg-[#1A74E4] text-white">Log in</button>
                        <button className="w-full h-10 rounded-md bg-gray-200">Create new account</button>
                    </div>
                </Link>
            </div>

            <div className="w-full">
                <div className=" shadow-sm shadow-gray-400">
                    <div className="w-full h-16 text-[#1a5ae4] flex justify-between pl-2 pr-2">
                        <div className="w-36 h-full text-[30px] flex justify-center items-center font-bold">facebook</div>
                        <div className="flex-1 h-full flex gap-2  justify-end items-center text-[16px] font-bold">
                            <div className="w-20 h-10 flex justify-center items-center">
                                Open app
                            </div>
                            <div className="w-20 h-10 rounded-md flex justify-center items-center bg-[#1A74E4] text-white">Log in</div>
                        </div>
                    </div>
                    <div className="w-full h-12 text-[#4B5054] flex justify-center items-center relative">
                        <div className="w-12 h-full absolute left-0 flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                            </svg>
                        </div>
                        <div className="font-bold text-[17px]">
                            {"Naila's post"}
                        </div>
                    </div>
                </div>

                <div className="w-full h-[56px] mt-2 pl-2 flex justify-between items-center">
                    <div className="flex-1 h-full flex justify-start">
                        <div className="h-full aspect-square p-2">
                            <div className="h-full w-full rounded-full ring-2  ring-offset-4 ring-[#1A74e4]">
                                <img src="/imgs/girl1.jpeg" alt="" className="rounded-full object-cover" />
                            </div>
                        </div>
                        <div className="h-full pl-2 flex-1 flex flex-col justify-center">
                            <div className="w-full h-7 font-bold text-[18px]">Naila Amin</div>
                            <div className="w-full h-4">
                                <img src="/imgs/globel-icon.png" alt="" className=" object-contain h-full" />
                            </div>
                        </div>
                    </div>
                    <div className="h-full aspect-square flex justify-center items-center text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>

                    </div>
                </div>

                <div className="w-full">
                    <div className={`${notoSansBengali.className} w-full h-auto px-2 pt-2 text-[16px]`}>
                        আসসালামু আলাইকুম বিজ্ঞ ভাই এবং স্যারদের। প্রথমেই ক্ষমা চেয়ে নিচ্ছি লেখাটা বড় হয়েছে তার জন্যে। আমি বৈবাহিক সুত্রে বিবাহিত আমার একজন ছেলে সন্তান আছে, আমাদের বিয়ের বয়স অলমোস্ট ৫ বছর,  ঘটনা চক্রে বিয়ের ৬ মাস অতিবাহিত হওয়ার পর আমার ফ্যামিলির সাথে বোঝাপড়ার অভার কারণে আমার ফ্যামেলি থেকে আমাকে বলা হলো আলাদা হওয়ারজন্যে যেহেতো তার সাথে প্রতিনিয়ত ঝামেলা হয়েই যাচ্ছিলো আর আমি কাজের সুত্রে অফিসে থাকার কারনে অনেক প্রবলেম হতো আমার, বিচার আর সালিশের মধ্যেই
                        <span className={`${inter.className} text-gray-500 text-[17px]`}>....see more</span>
                    </div>
                    <div className="w-full h-auto px-2 mt-3">
                        <img src="/imgs/reaction.png" alt="" className="w-full h-full object-contain" />
                    </div>
                </div>

                <div className="w-full h-auto mt-2">
                    <img src="/imgs/comments.jpg" alt="" className="w-full object-contain" />
                </div>
            </div>
        </div>
    </>);
}
