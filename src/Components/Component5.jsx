import "../Styles/App.css"
import { Development } from "../assets/API4"
const Component5 = () => {
    return (
        <div className="w-[1112px] h-[1556px] pt-[77px]  mx-auto md:w-[320px] md:h-auto md:pt-[117px] md:pb-[80px]">
            <h3 className="w-[634px]  flex text-5xl leading-[60px] mb-[113px] font-bold uppercase md:w-full md:text-[35px] md:leading-[43.75px] md:mb-8">
                Our Blockchain Development<br /> Process
            </h3>
            <div className="flex flex-row justify-between md:w-full">
                <div className="w-[674px] h-[1016px] flex flex-col md:h-full md:w-full ">
                    {Development && Development.map((data) => (
                        <div key={data.id} className="deleteHr">
                            <h5 className={`h-[full] text-2xl font-bold before:mr-[10px] before:content-[attr(data-id)] before:text-primary mb-[15px]`} data-id={"0" + data.id}>{data.title}</h5>
                            <div className="mb-[11px]">
                                <p className="text-lg">{data.content1}</p>
                                <p className="text-lg">{data.content2}</p>
                            </div>
                            <hr className="border border-solid w-[0.5px] h-[59px] border-primary mb-[11px] md:hidden" />
                        </div>
                    ))}
                </div>
                <div className=" flex flex-col items-end md:hidden ">
                    {Development && Development.map((data) => (
                        <img key={data.id} src={data.URL} alt="" className="max-w-[346px] w-[full] h-[full] mb-[49px] last:mb-0" />
                    ))}
                </div>
            </div>
        </div>

    )
}
export default Component5