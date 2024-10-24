import React from "react";
import { FaHome } from "react-icons/fa";
import { MdContentPaste } from "react-icons/md";
import { TbMessageReport } from "react-icons/tb";
import { MdContactSupport } from "react-icons/md";


export const sidebarData = [
    {
        id: 1,
        title: "Home",
        icon: <FaHome />,
    }, {
        id: 2,
        title: "Burger",
        icon: <MdContentPaste />,

    }, {
        id: 3,
        title: "Pizzas",
        icon: <TbMessageReport />,
    }, {
        id: 4,
        title: "Disser",
        icon: <MdContactSupport />,
    }
]