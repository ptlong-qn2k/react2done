import { IoMdMenu } from 'react-icons/io';
import { sidebarData } from '../Services/Sidebar';
import { AiOutlineCloseSquare } from 'react-icons/ai';

const Header = ({ sidebar, statusSidebar }) => {
    const showSidebar = (value) => {
        statusSidebar(value);
    };

    return (
        <div>
            <div className="w-[1112px] h-20 flex flex-row items-center m-auto md:w-full md:justify-between md:mt-[20px] md:h-auto md:mb-[75.83px]">
                <img
                    src="./image/Group.png"
                    alt=""
                    className="w-[162px] mr-[229px] md:w-[124px] md:h-[21.17px] md:mr-0 "
                />
                <ul className="w-[675px] h-[13px] relative right flex flex-row justify-between text-sm md:hidden">
                    <li>HOME</li>
                    <li>SERVICES</li>
                    <li className="text-primary">BLOCKCHAIN</li>
                    <li>BLOG</li>
                    <li>JOBS</li>
                    <li>ABOUT</li>
                    <li>TESTIMONIALS</li>
                    <li>CONTACT</li>
                </ul>

                <IoMdMenu
                    onClick={showSidebar}
                    color="#2E3A59"
                    size={30}
                    className={`cursor-pointer mdpc:hidden md:inline ${sidebar ? '!hidden' : ''}`}
                />
                <nav className={sidebar ? 'nav-menu active mdpc:hidden' : 'nav-menu mdpc:hidden'}>
                    <ul className="nav-menu-items mdpc:hidden w-full h-[full] bg-yellow ">
                        <li className="navbar-toggle ml-10">
                            <a to="#" className="">
                                <AiOutlineCloseSquare color="black" onClick={showSidebar} />
                            </a>
                        </li>

                        {sidebarData.map((item) => {
                            return (
                                <div key={item.id} className={`flex flex-row ml-10 justify-start items-center `}>
                                    <div className="mr-5">{item.icon}</div>
                                    <h3>{item.title}</h3>
                                </div>
                            );
                        })}
                    </ul>
                </nav>
            </div>
            <hr className="border w-[1112px] mx-auto mb-[92px] md:hidden" />
        </div>
    );
};
export default Header;
