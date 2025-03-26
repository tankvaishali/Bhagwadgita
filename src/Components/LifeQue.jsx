import React from 'react';
import { FaHandPointRight } from 'react-icons/fa';

function LifeQue() {
    let data=[
        {
            pera:"જરૂરિયાત પૂરી થતાં જ લોકોનો વ્યવહાર તરત કેમ બદલાઈ જાય છે?",
        },
        {
            pera:"ખોટા લોકો જલ્દી સુખી થાય અને સાચા લોકો બહુ દુઃખી કેમ થાય છે?",
        },
        {
            pera:"હમેશા જેમનું આપણે હિત કરીએ છીએ એજ આપણા અંગત લોકો આપણું અહિત શું કામ કરે છે?",
        },
        {
            pera:"જેના પર આપણે વિશ્વાસ કરીએ એ જ આપણી સાથે વિશ્વાસઘાત કરે છે અને મનફાવે એ રીતે દુઃખી કરવામાં સફળ કેમ થાય છે ?",
        },
        {
            pera:"અઢળક પૈસા, મનની શાંતિ અને પરિવારનું સુખ આ ત્રણેય એક સાથે કેવી રીતે પ્રાપ્ત કરવું?",
        },
       
    ]
  return (
   <>
    <div className='darkviolet'>
       <div className="gujfont yellowcolor lightviolet title  text-center">
       વ્યવહારિક જીવનના પ્રશ્નો
      </div>

      <div className="container ">
<div className="row g-3">
    <div className="col-12 col-lg-6 ">
        <div className="h-100 text-white d-flex flex-column justify-content-center ">
          {
            data.map((x,i)=>{
                return(
                    <div className='d-flex align-items-center py-1 ' key={i}>
                    <div className='fs-5 d-flex align-items-center justify-content-center'><FaHandPointRight /></div>
                    <div className='ps-2 pera gujfont'>{x.pera}</div>
                </div>
                )
            })
          }
        </div>
    </div>
    <div className="col-12 col-lg-6">
<div className="h-100">
    <img src={require("../Images/life que_image.jpg")} alt="" className='img-fluid object-fit-cover rounded-4 border border-2 '/>
</div>
    </div>
</div>
      </div>
    </div>
    <div className=" py-3  bgparas">
<div className=' text-center  container' >
  <div className="row d-flex align-items-center justify-content-center">
    <div className="col-12 col-md-6 col-lg-7">
    <img src={require("../Images/bhagwadgeeta_image.jpg")} alt="" className='img-fluid object-fit-cover w-100 h-100 rounded-4 border border-2 border-white' />
    </div>
  </div>
</div>
    </div>
   </>
  );
}

export default LifeQue;
