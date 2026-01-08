import React from 'react';

function Team() {
    return ( 
        <div className='container '>
            <div className='row p-2' style={{marginLeft:"300px",marginRight:"300px"}}>
                <h2 style={{textAlign:"center",color:"#424242",lineHeight:"1.5"}}>People</h2>
            </div>
            <div className='row p-4' >
                <div className='col-2'></div>
                <div className='col-4' style={{paddingLeft:"70px"}}>
                    <img src="/Media/nithinKamath.jpg" style={{borderRadius:"100%",width:"80%"}}/>
                    <h4 style={{paddingLeft:"60px",paddingTop:"20px"}}>Nithin Kamath</h4>
                    <p style={{color:"#424242",paddingLeft:"85px"}}>Founder, CEO</p>
                </div>
                <div className='col-6 p-5' style={{justifyContent:"space-between"}}>
                    <p style={{lineHeight:"1.8",color:"#424242"}}>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

                    <p style={{lineHeight:"1.8",color:"#424242"}}> He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

                    <p style={{lineHeight:"1.8",color:"#424242"}}>Playing basketball is his zen.</p>
                </div>
            </div>
        </div>
     );
}

export default Team;