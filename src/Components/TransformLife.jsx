import React from 'react';
function TransformLife() {
    return (
        <div className='lightviolet '>

            <div className="container">
                <div className="text-center">
                    <img src={require('../Images/Geeta Status PNg.jpg')} alt="" className='img-fluid py-3' style={{ width: "350px" }} />
                </div>
                <div className='text-center col-sm-8 col-12 mx-auto'>
                    <p className='text-light lh-lg' style={{ fontFamily: "Hind Vadodara" }}><span className='fw-bold orangecolor'>શ્રીમદ્ ભગવદ્ ગીતા </span> એ આપણા હિન્દુ સનાતન સાહિત્યનો હૃદય સમાન ગ્રંથ છે અને જ્ઞાન,કર્મ અને ભક્તિના અજોડ સંગમથી સફળતાના શિખરો પાર કરી શકાય છે જેનું જીવતું જાગતું ઉદાહરણ એટલે આપણા સૌના વ્હાલા ગોવિંદકાકા એમના જીવનમાં ગીતા દ્વારા થયેલા બદલાવ વિશે માર્ગદર્શન આપશે.</p>
                </div>
                <div className="text-center py-1">
                    <div className='orangecolor textsizefont '>"First Time In Surat"</div>
                    <div className="row d-flex justify-content-center py-3 ">
                        <div className="col-12 col-md-4 h-75">
                            <img src={require("../Images/SINGER.jpgs.jpg")} alt="" className='object-fit-contain rounded-4 border border-secondary border-4 w-100 h-75' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TransformLife;
