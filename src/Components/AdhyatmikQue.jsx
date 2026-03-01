import React from 'react';
import { FaHandPointRight } from 'react-icons/fa';

function AdhyatmikQue() {

    let data = [
        {
            pera: "આપણે કોણ છીએ? ક્યાંથી આવ્યા છીએ અને શું કામ આવ્યા છીએ?",
        },
        {
            pera: "સમગ્ર જગત આપમેળે ચાલે છે કે કોઈ ચલાવનાર છે?",
        },
        {
            pera: "ઈશ્વર છે તો ક્યાં છે અને કોણ છે અને કેવા છે?",
        },
        {
            pera: "શું એ ઈશ્વર સુધી પહોંચવા માટે માર્ગદર્શક કે ગુરુની જરૂર પડે ખરી?",
        },
        {
            pera: "ગર્ભાવસ્થાના પહેલા કોઈ માતા ને ઇચ્છિત સંતાન પ્રાપ્ત કરવામાં શ્રીમદ્ ભગવદ્ ગીતા કઈ રીતે મદદરૂપ થઇ શકે?",
        },
        {
            pera: "ગર્ભમાં જીવ આવ્યા બાદ શ્રીમદ્ ભગવદ્ ગીતા સાંભળવાથી બાળક પર શો પ્રભાવ પડે છે?",
        },
    ]

    // const logos = [
    //     {
    //         src: require("../Images/Goldi_Solar_Logo-removebg-preview.png"),
    //         alt: "Goldi Solar"
    //     },
    //     {
    //         src: require("../Images/Narola_Shine_Within_Blue_page-0001-removebg-preview.png"),
    //         alt: "Narola"
    //     },
    //     {
    //         src: require("../Images/Shivam_Jewels-removebg-preview.png"),
    //         alt: "Shivam Jewels"
    //     },
    //     {
    //         src: require("../Images/SHG_Shri_Hari_Group_Logo_17.0-removebg-preview.png"),
    //         alt: "SHG Shri Hari Group"
    //     },
    //     {
    //         src: require("../Images/unique_sponser.jpeg"),
    //         alt: "unique"
    //     },
    //     {
    //         src: require("../Images/shree shubhlaxmi art sponcer_sm.png"),
    //         alt: "shree shubhlaxmi art"
    //     },
    // ];

    // const supportedlogos = [
    //     {
    //         src: require("../Images/supported_logo-removebg-preview.png"),
    //         alt: "sampada festivity"
    //     },
    //     {
    //         src: require("../Images/City Tadka logo.jpg"),
    //         alt: "City Tadka"
    //     },
    // ]
    return (
        <>
            <div className='darkviolet'>
                <div className=" yellowcolor lightviolet title  text-center gujfont" style={{ fontFamily: "Hind Vadodara" }}>
                    આધ્યાત્મિક જીવનના પ્રશ્નો
                </div>

                <div className="container  ">
                    <div className="row g-3">
                        <div className="col-12 col-lg-6">
                            <div className="h-100">
                                <img src={require("../Images/adhyatmik que_image.jpg")} alt="" className='img-fluid object-fit-cover rounded-4 border border-2 ' />
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 ">
                            <div className="h-100 text-white d-flex flex-column justify-content-center ">
                                {
                                    data.map((x, i) => {
                                        return (
                                            <div key={i} className='d-flex align-items-center py-1 '>
                                                <div className='fs-5 d-flex align-items-center justify-content-center'><FaHandPointRight /></div>
                                                <div className='ps-2 pera gujfont' style={{ fontFamily: "Hind Vadodara" }}>{x.pera}</div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>

                    <div className="col-12 lightviolet text-white text-center mt-1 fs-5 fw-bold p-2 rounded-2">
                        <div className='fw-bold kalfonts' style={{ lineHeight: 1.6, fontFamily: "Hind Vadodara" }}>કાળ + પ્રકૃતિનાં ગુણોનો અભ્યાસ + કર્મનો સિદ્ધાંત = <span className='text-danger'> પરિણામ</span></div>
                        <div className='fw-bold kalfonts' style={{ lineHeight: 1.6, fontFamily: "Hind Vadodara" }}>પરિણામ + ગીતાજ્ઞાન = <span className='text-danger'> સફળતા</span></div>
                    </div>
                </div>
            </div >

            <div style={{ backgroundColor: "#1c1328" }}>
                <div className="container p-2 text-center">
                    <div className='title text-white text-center px-2 px-md-4 text-capitalize gujfont fs-3 lh-sm unevilfont'>
                        "Unveil the Knowledge of Shreemad Bhagavad Gita with Paras Pandhi and <span className='orangecolor'>Eminent Sponsors of India</span>"
                    </div>
                    <div className="col-lg-8 col-md-9 col-sm-10 col-12 mx-auto">
                        <img src={require('../Images/2026 photos/web 2.jpg (1).jpeg')} alt="" className='img-fluid' />
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdhyatmikQue;