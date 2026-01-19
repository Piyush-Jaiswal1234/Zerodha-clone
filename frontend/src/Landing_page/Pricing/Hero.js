import React from 'react';

function Hero() {
    return ( 
        <div className='container mt-5'>
           <div className='row' style={{textAlign: 'center',marginTop:"90px"}}>
                <h3 style={{color:"#424242",fontSize:"30px"}}>Charges</h3>
                <p style={{color:"#424242",fontSize:"20px",paddingTop:"10px",textAlign:"center"}}>List of all charges and taxes</p>
           </div>
           <div className='row mt-5'>
                <div className='col mt-3 p-5'> 
                    <img src="/Media/pricingMF.svg" style={{width:"80%",alignItems:"center",paddingLeft:"60px"}}/>
                    <h2 style={{textAlign:"center",padding:"5px",color:"#424242"}}>Free equity delivery</h2>
                    <p style={{textAlign:"center",color:"#424242"}}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col mt-4 '> 
                    <img src="/Media/intradayTrades.svg" style={{width:"77%",alignItems:"center",paddingLeft:"50px",paddingTop:"40px"}}/>
                    <h2 style={{textAlign:"center",padding:"2px",color:"#424242"}}>Intraday and F&O trades</h2>
                    <p style={{textAlign:"center",color:"#424242"}}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col mt-1 p-5'>
                    <img src="/Media/pricingMF.svg" style={{width:"80%",alignItems:"center",paddingLeft:"60px"}}/>
                    <h2 style={{textAlign:"center",padding:"2px",color:"#424242"}}>Free direct MF</h2>
                    <p style={{textAlign:"center",color:"#424242"}}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
           </div>
        </div>
     );
}

export default Hero;