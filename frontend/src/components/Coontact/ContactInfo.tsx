import React from 'react'
import { CONTACT_TEXT_COLOR } from '../../constants/colors'

import { BiPhone } from "react-icons/bi";
import { CgMail } from "react-icons/cg";
import { FaMarker } from "react-icons/fa";
import { PHONE, EMAIL, ADDRESS } from '../../constants/content/contact';
const ContactInfo = () => {
    return (
        <div
            className={`mt-16 border-t pt-8 grid md:grid-cols-3 gap-6 text-center contact-info-card ${CONTACT_TEXT_COLOR.primary}`}
        >
            <div className="flex flex-col items-center gap-2 contact-info-card ">
                <BiPhone className="text-blue-600" />
                <p className="font-semibold">Phone</p>
                <p>{PHONE}</p>
            </div>

            <div className="flex flex-col items-center gap-2 contact-info-card ">
                <CgMail className="text-blue-600" />
                <p className="font-semibold">Email</p>
                <p>{EMAIL}</p>
            </div>

            <div className="flex flex-col items-center gap-2 contact-info-card ">
                <FaMarker className="text-blue-600" />
                <p className="font-semibold">Address</p>
                <p>{ADDRESS}</p>
            </div>
        </div>
    )
}

export default ContactInfo