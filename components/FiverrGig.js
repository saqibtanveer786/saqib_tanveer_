import React from 'react'

import Script from 'next/script'
import Link from 'next/link'

export default function FiverrGig() {
  return (
    <>
    <div  itemScope  itemType='http://schema.org/Person' className='fiverr-seller-widget inline-block'>
    <Link  itemProp='url' href={`https://www.fiverr.com/saqib_tanveer_`} rel="nofollow" target="_blank" className='inline-block'>
       <div className='fiverr-seller-content' id='fiverr-seller-widget-content-a99b1334-eec6-4071-8776-c732738e2b63'  itemProp='contentURL' style={{display: 'none'}}></div>
       <div id='fiverr-widget-seller-data' style={{display: 'none'}}>
           <div  itemProp='name' >saqib_tanveer_</div>
           <div  itemScope  itemType='http://schema.org/Organization'><span  itemProp='name'>Fiverr</span></div>
           <div  itemProp='jobtitle'>Seller</div>
           <div  itemProp='description'>Experienced Full Stack Developer | Fast Delivery | Clean Code.

I am a full stack developer use to work with various frontend and backend framework and technologies. For frontend I use HTML/CSS, JavaScript, Bootstrap, Tailwind CSS, Reactjs, Nextjs. For backend I use the technologies like Nodejs, Expressjs, Pug, MongoDB Atlas, MongoDB, Restful API's.

So, if you need a scalable, efficient and modern web applications or website then feel free to contact me. I am here to complete your application within time and with clean/maintainable code.

          </div>
       </div>
   </Link>
</div>

{/* <Script id='fiverr-seller-widget-script-a99b1334-eec6-4071-8776-c732738e2b63' src='https://widgets.fiverr.com/api/v1/seller/saqib_tanveer_?widget_id=a99b1334-eec6-4071-8776-c732738e2b63' data-config='{"category_name":"Programming \u0026 Tech"}' async='true' defer='true'></Script> */}
</>
  )
}
