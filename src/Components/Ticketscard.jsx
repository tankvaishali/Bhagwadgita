import React from 'react';
import { Link } from 'react-router-dom';

function Ticketscard() {
    return (
        <>
            <div className="lightviolet">
                <div className="container">
                    <div className="row g-3 py-2 py-lg-4 d-flex align-items-center justify-content-center">
                        <div className="col-12 col-lg-6 ">
                            <div className="h-100 bg-white rounded-4 p-3 d-flex flex-column justify-content-between">
                                <div className='text-center rounded p-3 py-4 ' style={{ backgroundColor: "var(--orange)" }}>
                                    <div className='fw-bold display-6'>
                                        Token Amount
                                    </div>
                                    <div className='fw-bold'>
                                        (For 3 Days)
                                    </div>
                                    <div className='fw-bold display-6'>
                                        ₹ 200
                                    </div>
                                </div>
                                <div className='mt-2'>
                                    <Link to={"/buynow"} className='text-decoration-none'>
                                        <button className='buttons w-100 btn text-light' type="button" style={{ fontFamily: "Sora, Sans-serif", fontWeight: 700 }}>Register Now</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Ticketscard;
