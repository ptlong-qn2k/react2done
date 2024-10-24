import "../Styles/App.css"
import { Approaches } from "../assets/APi3"

const Component4 = () => {
    return (
        <div className="w-[1112px] h-[866px] m-auto pt-[84px] bg-gray_cus md:w-[375px] md:mx-[-35px] md:h-auto md:pb-[95px]">
            <h3 className="block text-5xl leading-[60px] text-center font-bold uppercase md:text-[35px] md:leading-[43.75px] md:mb-[31px]">
                Approaches to Blockchain
            </h3>
            <p className="w-[1103px] text-[25px] text-center mx-auto mb-[47px] md:w-full md:px-4 md:text-xl md:leading-[25px]">
                Our world-class team, of course, suggests which Blockchain approach would best fit your business. But, we
                let you have the last word before we get things rolling for you. Here are the Blockchain approaches we think
                can transform your business.</p>
            <div className="flex flex-row justify-center mb-5 md:flex-col">
                {Approaches && Approaches.map((data) => (
                    <div key={data.id} className="w-[380px] h-[364px] flex flex-col items-center px-6 border-r-[1px] border-black last:border-none md:border-b md:border-r-0 md:w-full md:h-full md:mb-10 ">
                        <div className={`w-[98px] h-[98px] rounded-[50%] relative top-[-12px] bg-red-200 flex justify-center items-center mb-[6px] md:top-0 md:mb-[21px]`}>
                            <img src={data.URL} alt="" className="w-16 h-16" />
                        </div>
                        <h5 className="text-[22px] mb-[21px]">{data.title}</h5>
                        <p className="w-[343px] h-[full] text-center text-lg leading-[27px] px-4">
                            {data.content}
                        </p>
                    </div>
                ))
                }
            </div >
            <button
                className="w-[282px] h-[70px] bg-primary text-[25px] rounded-[5px] hover:bg-red-700 mx-auto relative block font-bold text-white md:w-[260px] md:h-[65px] md:text-xl">
                Get in Touch
            </button>
        </div >

    )
}
export default Component4