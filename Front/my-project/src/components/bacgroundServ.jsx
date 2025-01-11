import React from 'react'

function BacgroundServ() {
  return (
    <>
    <div style={{ height: '530px' }} className="bacground_serv relative flex">

        <div className="bg_red sm:hidden md:block w-4/12 h-full bg-rose-600"></div>
        <div className="bg_blue sm:w-full md:w-3/4 h-full bg-sky-800"></div>

        <div className="serc_content absolute flex gap-5 px-20 py-12">
            <div className="serv_c_image">
                <img style={{width:"1200px", height:"450px"}} src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/about.png" alt="" />
            </div>

            <div className="serv_c_text text-white flex flex-col gap-10">
                <span className='font-light'>Our Top Services</span>
                <h2 className='text-4xl font-bold'>Our Best Services</h2>
                <p className='text-2xl'>Mollit anim laborum duis adseu dolor iuyn voluptcate velit ess cillum dolore egru lofrre dsu quality mollit anim laborumuis au dolor in voluptate velit cillu.</p>
                <p className='font-light'>Mollit anim laborum.Dvcuis aute serunt  iruxvfg dhjkolohr indd re voluptate velit esscillumlore eu quife nrulla parihatur. Excghcepteur sfwsignjnt occa cupidatat non aute iruxvfg dhjinulpadeserunt moll.</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default BacgroundServ
