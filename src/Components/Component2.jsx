import React from "react"
import { useState, useEffect } from "react"
import { accordionData, accordionData2, accordionData3 } from "../assets/API"
import Accordion from "./Accordion"

const Component2 = () => {


    return (
        <div className="w-[1122px] mx-auto  md:w-full ">
            <div className="w-[1112px] mx-auto mb-[65px] md:w-full md:mb-[35px]">
                <h3 className="w-[1000px] mb-[6px] text-5xl leading-[60px] uppercase font-bold md:text-[35px] md:w-full md:mb-[29px] md:leading-[43.75px]">
                    Blockchain Development Services
                </h3>
                <p className="w-[959px] text-[25px] md:w-full md:text-xl">We offer futuristic Blockchain
                    development solutions to help clients grow in this thriving market. We provide services in areas like
                </p>
            </div>

            <div className="w-[1112px] mb-[148px] mx-auto md:w-full md:mb-[52px]">
                <div className="flex flex-row mb-8 md:w-full md:flex-col">
                    <h3 className="w-[296px] text-[35px] rounded-[52.5px] mr-[37px] font-bold md:w-full md:mb-3 md:text-[28px]">
                        Cryptocurrency<br />& NFTs
                    </h3>
                    <div className="md:w-[324px] cursor-pointer">
                        {accordionData && accordionData.map(({ id, title, content }) => (
                            <Accordion key={id} title={title} content={content} />
                        ))}
                    </div>
                </div>
                <hr className="border w-full" />
                <div className=" flex flex-row pt-8 mb-8 md:flex-col">
                    <h3 className="w-[296px] text-[35px] rounded-[52.5px] mr-[37px] font-bold md:mb-3 md:text-[28px]">Decentralized Solutions</h3>
                    <div className="text-xl flex flex-col justify-between md:w-full md:text-lg cursor-pointer">
                        {accordionData2 && accordionData2.map(({ id, title, content }) => (
                            <Accordion key={id} title={title} content={content} />
                        ))}
                    </div>
                </div>
                <hr className="border w-full" />
                <div className="flex flex-row pt-8 md:flex-col md:w-full">
                    <h3 className="w-[296px] text-[35px] mr-[37px] font-bold md:mb-3 md:text-[28px]">Blockchain Solutions</h3>
                    <div className="text-xl flex flex-col justify-between md:w-full md:text-lg cursor-pointer">
                        {accordionData3 && accordionData3.map(({ id, title, content }) => (
                            <Accordion key={id} title={title} content={content} />
                        ))}
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Component2