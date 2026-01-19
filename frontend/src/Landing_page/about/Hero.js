import React from 'react';

function Hero() {
    return ( 
        <div className='container mt-5'>
            <div className='row p-5' style={{marginLeft:"300px",marginRight:"300px",marginTop:"50px",marginBottom:"50px"}}>
                <h4 style={{textAlign:"center",color:"#424242",lineHeight:"1.5"}}>We pioneered the discount broking model in India. <br />Now, we are breaking ground with our technology.</h4>
            </div>
            <div className='row p-5 border-top' >
                <div className='col-6 mt-4 p-5' style={{justifyContent:"space-between"}}>
                    <p style={{lineHeight:"1.8",color:"#424242"}}>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.</p>

                    <p style={{lineHeight:"1.8",color:"#424242"}}>Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p>

                    <p style={{lineHeight:"1.8",color:"#424242"}}>Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>
                </div>
                <div className='col-6 mt-4 p-5'>
                    <p style={{lineHeight:"1.8",color:"#424242"}}>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>

                    <p style={{lineHeight:"1.8",color:"#424242"}}> <a href=" " style={{textDecoration:"none"}}>Rainmatter</a>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>

                    <p style={{lineHeight:"1.8",color:"#424242"}}>And yet, we are always up to something new every day. Catch up on the latest updates on our <a href=" " style={{textDecoration:"none"}}>blog</a> or see what the media is <a href=" " style={{textDecoration:"none"}}>saying about us</a> or learn more about our business and product <a href=" " style={{textDecoration:"none"}}>philosophies.</a></p>
                </div>
            </div>
        </div>
     );
}

export default Hero;