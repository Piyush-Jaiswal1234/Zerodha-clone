import React from 'react';

function Universe() {
    return ( 
        <div className="container">
            <div className="row mt-5 ">
                <h3 style={{color:"#424242",textAlign:"center",fontSize:"28px",paddingBottom:"10px"}}>The Zerodha Universe</h3>
                <p style={{color:"#424242",textAlign:"center",fontSize:"18px"}}>Extend your trading and investment experience even further with our partner platforms</p>
            </div>
            <div className="row ">
                <span className='col-4 mt-4' style={{paddingLeft:"200px",paddingTop:"40px"}}>
                    <img src=" /Media/zerodhafundhouse.png" style={{width:"100%"}}/>
                    <p style={{fontSize:"13px",textAlign:"center",color:"#424242",paddingTop:"15px"}}>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
                </span>
                <span className='col-4 mt-4' style={{paddingLeft:"100px",paddingTop:"40px"}}>
                    <img src=" /Media/sensibullLogo.svg" style={{width:"90%",paddingLeft:"15px"}}/>
                    <p style={{fontSize:"13px",textAlign:"center",color:"#424242",paddingTop:"29px",marginRight:"20px"}}>Options trading platform that lets youcreate strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>
                </span>
                <span className='col-4 mt-4' style={{paddingLeft:"70px",paddingTop:"30px",allignContent:"center"}}>
                    <img src="/Media/tijori.svg" style={{width:"70%",paddingLeft:"20px"}}/>
                    <p style={{fontSize:"13px",textAlign:"center",color:"#424242",paddingTop:"15px",paddingRight:"90px"}}>Investment research platform that offers detailed insights on stocks,sectors, supply chains, and more.</p>
                </span>
            </div>
            <div className="row p-3">
                    <span className='col-4 mt-4' style={{paddingLeft:"200px",paddingTop:"40px"}}>
                    <img src=" /Media/streak-logo.png" style={{width:"90%"}}/>
                    <p style={{fontSize:"13px",textAlign:"center",color:"#424242",paddingTop:"15px"}}>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
                </span>
                <span className='col-4 mt-4' style={{paddingLeft:"100px",paddingTop:"40px"}}>
                    <img src=" /Media/smallcase-logo.png" style={{width:"80%",paddingLeft:"15px"}}/>
                    <p style={{fontSize:"13px",textAlign:"center",color:"#424242",paddingTop:"29px",marginRight:"20px"}}>Options trading platform that lets youcreate strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>
                </span>
                <span className='col-4 mt-4' style={{paddingLeft:"70px",paddingTop:"30px",allignContent:"center"}}>
                    <img src="/Media/ditto-logo.png" style={{width:"60%",paddingLeft:"20px"}}/>
                    <p style={{fontSize:"13px",textAlign:"center",color:"#424242",paddingTop:"15px",paddingRight:"90px"}}>Investment research platform that offers detailed insights on stocks,sectors, supply chains, and more.</p>
                </span>
            </div>
        </div>   
     );
}

export default Universe;