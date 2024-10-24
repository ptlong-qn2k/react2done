import React from "react"
import { useState } from "react"
const Accordion = ({ title, content }) => {
    const [open, setOpen] = useState(false)

    return (
        <div>
            <div onClick={() => setOpen(!open)}>
                <div className={`text-xl md:w-full md:text-lg mb-4 ${open ? "list_black" : "list_red"}`}>{title}</div>
            </div>
            {open && <div className="w-[476px] pl-[37px] text-[16px] mb-4 md:w-[324px]">{content}</div>}
        </div>
    )
}
export default Accordion