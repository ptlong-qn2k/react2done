import { Vinova, Vinova2 } from '../API/Api5';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

const Component6 = () => {
    return (
        <div>
            <div className="w-[1112px] h-[905px] m-auto bg-gray_cus flex flex-col  pt-[127px] md:w-[375px] md:mx-[-35px] md:h-auto">
                <h3 className="text-5xl leading-[60px]  mx-auto mb-[79px] font-bold md:text-[35px] md:mb-10">
                    WHY HIRE
                    <b className="text-primary font-bold text-5xl after:content-['?'] after:text-black md:text-[35px]">
                        VINOVA
                    </b>
                </h3>
                <div className="flex flex-row justify-center text-center mb-[52px] md:w-full md:flex-col md:items-center md:mb-5">
                    {Vinova &&
                        Vinova.map((data) => (
                            <div key={data.id} className="w-[full] h-full px-5 flex flex-col items-center md:mb-5">
                                <img src={data.URL} alt="" className="mb-[26px]" />
                                <b className="text-2xl mb-[10px] whitespace-nowrap">{data.title}</b>
                                <p>{data.content}</p>
                            </div>
                        ))}
                </div>
                <div className="flex flex-row justify-center text-center md:w-full md:flex-col md:items-center md:mb-10">
                    {Vinova2 &&
                        Vinova2.map((data) => (
                            <div key={data.id} className="w-[full] h-full px-5 flex flex-col items-center md:mb-5">
                                <img src={data.URL} alt="" className="mb-[26px]" />
                                <b className="text-2xl mb-[10px] whitespace-nowrap">{data.title}</b>
                                <p>{data.content}</p>
                            </div>
                        ))}
                </div>
            </div>

            <div className="w-[1112px] m-auto md:w-[375px] md:mx-[-35px]">
                <div className="w-full h-[780px] md:w-[full] md:h-[200px]">
                    <img
                        src="/image/session8/bg.jpg"
                        alt=""
                        className=" w-full h-[780px]  md:h-[200px] md:w-[375px] "
                    />
                    <div className="w-full h-[780px] bg-primary opacity-70 relative bottom-[780px]  left-0 md:h-[200px] md:bottom-[200px] md:pb-[200px]"></div>
                </div>
                <div className="bg-primary w-[1112px] h-[236px] flex flex-col justify-between text-white md:w-full md:h-[200px]">
                    <div className="w-[300px] relative top-[30px] left-[650px] md:left-10">
                        <h3>Visit us</h3>
                        <p>280 Tran Hung Dao street, Da Nang, Viet Nam</p>
                    </div>
                    <div className="w-full h-[40px] bg-red-800 flex flex-row justify-around items-center md:h-[60px] md:px-[30px]">
                        <p className="md:w-[250px]">copyright @2023 Vinova Pte.Ltd.All Rights Reserved </p>
                        <div className="flex flex-row md:flex-col">
                            <FaFacebookSquare className="mr-4 cursor-pointer md:mr-0" />
                            <FaTwitter className="cursor-pointer" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Component6;
