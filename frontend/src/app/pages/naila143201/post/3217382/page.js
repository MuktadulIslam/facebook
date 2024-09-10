export default function Page() {
    return (<>
    <div>
        <div className=" shadow-sm shadow-gray-400">
            <div className="w-full h-16 text-[#1a5ae4] flex justify-between pl-2 pr-2">
                <div className="w-36 h-full text-[32px] flex justify-center items-center font-bold">facebook</div>
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

        <div className="w-full h-auto p-0.5">
            <img src="/imgs/notfound.jpg" alt="" className="w-full object-contain"/>
        </div>
        </div>
    </>)
}