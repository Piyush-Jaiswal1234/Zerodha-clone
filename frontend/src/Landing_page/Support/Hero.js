import React from 'react';

function Hero() {
    return ( 
        <section className="container-fluid" id='supportHero'>
            <div className='mt-5' id='supportWrapper'>
                <h4 style={{paddingLeft:"150px",paddingTop:"50px"}}>Support Portal</h4>
                <a href="" style={{color:"white",paddingRight:"30px",paddingTop:"50px"}}>Track Tickets</a>
            </div>
            <div className='row p-5'>
                <div className='col-6 '>
                    <h4 style={{paddingLeft:"200px",lineHeight:"1.5"}}>Search for an answer or browse help topics to create a ticket</h4>

                    <input className="p-4 mt-3 mb-4"type='text' placeholder='Eg: how do i activate F&O, why is my order getting rejected..' style={{width:"480px",height:"50px",marginLeft:"200px",borderRadius:"5px"}}></input>

                    <a href="" style={{paddingLeft:"200px",color:"white"}}>Track account opening</a>
                    <a href="" style={{paddingLeft:"20px",color:"white"}}>Track segment activation</a>
                    <br></br>
                    <a href="" style={{paddingLeft:"200px",color:"white"}}>kite user manual</a>
                </div>
                <div className='col-6'>
                    <h4 style={{paddingLeft:"200px"}}>Featured</h4>
                    <ol style={{paddingLeft:"230px"}}>
                        <li className="mt-2"><a href="" style={{color:"white"}}>Current Takeovers and Delisting - January 2024</a></li>
                        <li className="mt-3"><a href="" style={{color:"white"}}>Latest Intraday leverages - MIS & CO</a></li>
                    </ol>
                </div>
            </div>
        </section>
     );
}

export default Hero;