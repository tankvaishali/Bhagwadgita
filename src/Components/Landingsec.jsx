import React from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { FiClock } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';

function Landingsec() {
    let detail = [
        {
            icon: <FiClock />,
            title: "Time :",
            detail: "08:00 PM to 11:30 PM",
            col: "col-12 col-md-3"
        },
        {
            icon: <FaRegCalendarAlt />,
            title: "Date:",
            detail: "9, 10, 11 April 2025​",
            col: "col-12 col-md-3"
        },
        {
            icon: <HiOutlineLocationMarker />,
            title: "Venue:",
            detail: "Sardar Patel Smruti Bhavan - Varachha Main Road Hira Nagar, Mini Bazar, Khodiyar Nagar, Surat.",
            col: "col-12 col-md-6"
        },
    ]

    return (
        <div className='darkviolet'>
            <div className="container">
                <div className="">
                    <div className='titlebg border-2 border border-danger  text-center gujfont'>
                        <h5>After successfully delivering programs across various subjects, including a Shreemad Bhagavad Gita course, we are now organizing the Shreemad Bhagavad Gita course for the second time.</h5>
                    </div>
                    <div className='text-center text-white fw-bold'>
                        <h2 className='title pt-3'><span className="text-danger"> Shreemad Bhagavad Gita </span> Course In <span className="yellowcolor">Surat</span></h2>
                    </div>
                    <div className="row d-flex justify-content-center py-3 ">
                        <div className="col-12 col-md-6 col-lg-6">
                            <img src={require("../Images/ImportedPhoto_1741755792907.jpg")} alt="" className='img-fluid object-fit-cover rounded-4 border border-secondary border-4 w-100 h-100' />
                        </div>
                    </div>

                    <div className="lightviolet ">
                        <div className="row px-1 d-flex align-items-center mx-1 justify-content-center">
                            {
                                detail.map((x, i) => {
                                    return (
                                        <div className={`p-1 ${x.col}`} key={i}>
                                            <div className="d-flex align-items-center  text-white fw-medium">
                                                <div className='orangecolor display-5 pe-3 d-flex align-items-center justify-content-center'>{x.icon}</div>
                                                <div>
                                                    <h5>{x.title}</h5>
                                                    <h6>{x.detail}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landingsec;