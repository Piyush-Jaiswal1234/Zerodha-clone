import React from 'react';

function Education() {
    return ( 
        <div className="container p-5">
            <div className="row">
                <div className="col-6 mt-5">
                    <img src="/Media/education.svg" style={{width:"72%",marginLeft:"75px"}}/>
                </div>
                <div className="col-6 mt-5">
                    <h3 className='mt-4' style={{color:"#424242"}}>Free and open market education</h3>
                    <p  className='mt-4' style={{color:"#666666"}}>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href="" style={{textDecoration:"none"}}>Varsity <i class="fa fa-long-arrow-right" arial-hidden="true"></i></a>
                    <p className='mt-4' style={{color:"#666666"}}>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href="" style={{textDecoration:"none"}}>TradingQ&A <i class="fa fa-long-arrow-right" arial-hidden="true"></i></a>
                </div>
            </div>
        </div>
     );
}

export default Education;