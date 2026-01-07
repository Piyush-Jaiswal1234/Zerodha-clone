import React from 'react';

function Pricing() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-5 p-4' style={{marginLeft:"30px"}}>
                    <h3 className='mb-4' style={{color:"#424242"}}>Unbeatable pricing</h3>
                    <p style={{color:"#666666"}}>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='' style={{textDecoration:"none"}}>See pricing <i class="fa fa-long-arrow-right" arial-hidden="true"></i></a>
                </div>
                {/* style={{marginTop:"20px",marginRight:"10px",display:"flex"}} */}
                {/* style={{fontSize:"13px",margin:"10px"}} */}
                <span className='col-2 p-5' style={{marginTop:"20px"}}>
                    <img src="/Media/pricingMF.svg"/>
                    {/* <p  style={{fontSize:"11px",textAlign:"left"}}>Free account opening</p> */}
                </span>
                <span className='col-2 p-5' style={{marginTop:"20px"}}>
                    <img src="/Media/pricingMF.svg"/>
                     {/* <p style={{fontSize:"11px",textAlign:"justify"}}>Free equity delivery and direct mutual funds</p> */}
                </span>
                <span className='col-2 p-5' style={{marginTop:"20px"}}>
                    <img src="/Media/other-trades.svg"/>
                    {/* <p style={{fontSize:"11px"}}>Intraday and F&O</p> */}
                </span>
                
            </div>
        </div>
     );
}

export default Pricing;