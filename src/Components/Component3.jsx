import { number } from "yup"
import "../Styles/App.css"
import { ListIcon, ListIcon2, ListIcon3, List4, ListIcon4 } from "../assets/Api2"
const Component3 = () => {
    return (
        <div>
            <div
                className="w-[1112px] h-[325px] m-auto bg-primary text-center pt-[69px] md:w-[375px] md:h-[369px] md:ml-[-35px] md:pt-[72px] ">
                <h3
                    className="text-5xl text-white leading-[60px] font-bold md:text-[35px] md:leading-[43.75px] md:mx-auto md:mb-[21px]">
                    50+ PROJECTS DELIVERED
                </h3>
                <p className="text-[25px] text-white mb-[26px] leading-9 md:text-xl md:leading-[25px]">
                    Our highly experienced team have delivered ....
                </p>
                <button
                    className="w-[282px] h-[70px] bg-white rounded-[5px] text-[25px] font-bold text-primary md:w-[260px] md:h-[65px] md:text-xl">
                    Get in Touch
                </button>
            </div>
            <div className="w-full h-[713px] pt-[69px] md:pt-[57px] md:h-auto">
                <div className="w-[1112px] m-auto mb-[61px] md:w-full">
                    <h3 className=" block text-5xl leading-[60px] text-center mx-auto font-bold uppercase md:text-[35px] md:leading-[43.75px] md:mb-[23px]">
                        Technology Stack We Use
                    </h3>
                    <p className="w-[923px] px-14 text-[25px] text-center mx-auto md:w-full md:px-0 md:text-xl md:leading-[25px]">
                        Our blockchain developers provide you the quality you need and the flexibility you want using the
                        following tech stacks:
                    </p>
                </div>
                <div className="w-[1112px] flex flex-row justify-between m-auto md:w-full md:flex-col">
                    <div className="flex flex-col w-[514px] md:w-full">
                        <div className="mb-[51px] m-auto">
                            <p className="text-[16px] text-center mb-6">Cloud & Containerization</p>
                            <div className="w-[437px] h-[79px] text-[13px] flex flex-row justify-between md:w-full md:grid md:h-auto md:grid-cols-3 md:grid-rows-2 md:gap-5">
                                {ListIcon && ListIcon.map((data) => (
                                    <div key={data.id} className="w-[52px] flex flex-col items-center justify-between">
                                        <img src={data.URL} className="mb-[7px]" />
                                        <p>{data.Name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex-col flex m-auto md:w-full md:mb-[51px]">
                            <p className="text-[16px] text-center mb-6">Languages</p>
                            <div className="flex flex-row gap-x-[25px] w-[514px] md:flex-col md:w-full">
                                <div className="h-[79px] text-[13px] flex flex-row gap-x-[25px] justify-center md:mb-[25px] md:w-full md:h-auto md:justify-center ">
                                    {ListIcon3 && ListIcon3.map(({ URL, id, Name }) => (
                                        <div key={id} className={`w-[52px] flex flex-col items-center justify-between`}>
                                            <img src={URL} className="mb-[7px]" />
                                            <p>{Name}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="h-[79px] text-[13px] flex flex-row gap-x-[25px] justify-center md:justify-center md:w-full md:h-auto">
                                    {ListIcon4 && ListIcon4.map(({ URL, id, Name }) => (
                                        <div key={id} className={`w-[52px] flex flex-col items-center justify-between`}>
                                            <img src={URL} className="mb-[7px]" />
                                            <p>{Name}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* <div
                                    className="flex flex-col items-center justify-between md:col-start-2 md:col-end-4 md:row-start-1">
                                    <img src="/image/session4/image13.png" alt="" className="mb-[7px]" />
                                    <p>Solana</p>
                                </div>
                                <div
                                    className="flex flex-col items-center justify-between md:col-start-4 md:col-end-6 md:row-start-1">
                                    <img src="/image/session4/image14.png" alt="" className="mb-[7px]" />
                                    <p>Angular</p>
                                </div>
                                <div
                                    className="flex flex-col items-center justify-between md:col-start-6 md:col-end-8 md:row-start-1">
                                    <img src="/image/session4/image15.png" alt="" className="mb-[7px]" />
                                    <p>GoLang</p>
                                </div>
                                <div
                                    className="flex flex-col items-center justify-between md:col-start-1 md:col-end-3 md:row-start-2">
                                    <img src="/image/session4/image16.png" alt="" className="mb-[7px]" />
                                    <p>Java</p>
                                </div>
                                <div
                                    className="flex flex-col items-center justify-between md:col-start-3 md:col-end-5 md:row-start-2">
                                    <img src="/image/session4/image17.png" alt="" className="mb-[7px]" />
                                    <p>Javascript</p>
                                </div>
                                <div
                                    className="flex flex-col items-center justify-between md:col-start-5 md:col-end-7 md:row-start-2">
                                    <img src="/image/session4/image18.png" alt="" className="mb-[7px]" />
                                    <p>node.js</p>
                                </div>
                                <div
                                    className="flex flex-col items-center justify-between md:col-start-7 md:col-end-9 md:row-start-2">
                                    <img src="/image/session4/image19.png" alt="" className="mb-[7px]" />
                                    <p>react.js</p>
                                </div> */}
                        </div>
                    </div>
                    <div className="w-[514px] flex flex-col md:w-full">
                        <div className="flex flex-col mx-auto mb-[51px]">
                            <p className="text-[16px] text-center mb-6">Platforms & Blockchains</p>
                            <div
                                className="w-[437px] h-[79px] text-[13px] flex flex-row justify-between md:w-full md:grid md:h-auto md:grid-cols-3 md:grid-rows-2 md:gap-5">
                                {ListIcon2 && ListIcon2.map((data) => (
                                    <div key={data.id} className="w-[52px] flex flex-col items-center justify-between">
                                        <img src={data.URL} className="mb-[7px]" />
                                        <p>{data.Name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col items-center mx-auto md:w-full md:mb-9">
                            <p className="text-[16px] text-center mb-6">Standards we Follow</p>
                            <div
                                className="w-[506px] h-[63px] text-sm flex flex-row gap-1 justify-between items-center md:w-[275px] md:grid md:h-auto  md:gap-y-[11px] md:gap-x-2 md:m-auto md:grid_ok">
                                {List4 && List4.map((data) => (
                                    <div key={data.id} className="h-full border border-solid px-2 rounded-[5px] text-center flex flex-col justify-center md:w-auto md:px-2">
                                        {data.Name}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Component3