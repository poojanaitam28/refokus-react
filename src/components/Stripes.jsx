import React from 'react'
import Stripe from "../components/Stripe"

function Stripes() {
    const data = [
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b597d53302df1b88f5_660191f0bd52de169c0dbc94_Logo-black.svg",number: 48},
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b5306b05c2b704224d_65b2ca264ed8d89bad9b331c_Logo%2520Black%25201.svg",number: 2},
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d76e013990180ea2be31_jungle-logo-black.svg",number: 11},
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b597d53302df1b88f5_660191f0bd52de169c0dbc94_Logo-black.svg",number: 48},
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b5306b05c2b704224d_65b2ca264ed8d89bad9b331c_Logo%2520Black%25201.svg",number: 2},
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d76e013990180ea2be31_jungle-logo-black.svg",number: 11},
       
    ]
  return (
    <div className='flex items-center mt-16'>
        {data.map((elem,index) =>(
            <Stripe key={index}  val={elem}/>
        ))}
    </div>
  )
}

export default Stripes