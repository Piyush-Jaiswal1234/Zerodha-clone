import React from 'react';

function CreateTicket() {
    return ( 
        <div className='container mt-5'>
            <div className='row p-4' >
                <h2>To create a ticket select a relevent topic</h2>
            </div>
            <div className='row p-5' >
                <div className='col-4'>
                    <p style={{fontSize:"20px",fontWeight:"revert"}}><i class='fa fa-plus-circle' arial-hidden='true'></i>  Account Opening</p>
                    <p className='mt-4'style={{lineHeight:"1.8"}}> <a href="" style={{textDecoration:"none"}}>Online Account Opening</a></p>
                    <p style={{lineHeight:"1.8"}}> <a href="" style={{textDecoration:"none"}}>Offline Account Opening</a></p>
                    <p style={{lineHeight:"1.8"}}> <a href="" style={{textDecoration:"none"}}>Company partnerShip and HUF account Opening</a></p>
                    <p style={{lineHeight:"1.8"}}> <a href="" style={{textDecoration:"none"}}>NRI Account Opening</a></p>
                    <p style={{lineHeight:"1.8"}}> <a href="" style={{textDecoration:"none"}}>Charges at zerodha</a></p>
                    <p style={{lineHeight:"1.8"}}> <a href="" style={{textDecoration:"none"}}>Zerodha IDFC first bank 3-in-1 Account</a></p>
                    <p style={{lineHeight:"1.8"}}> <a href="" style={{textDecoration:"none"}}>Getting Started</a></p>
                </div>
                <div className='col-4'>
                    <p style={{fontSize:"20px",fontWeight:"revert",paddingLeft:"40px"}}><i class="fa-solid fa-user" arial-hidden='true'></i> Your zerodha Account</p>
                    <p className='mt-4'style={{lineHeight:"1.8",paddingLeft:"40px"}}> <a href="" style={{textDecoration:"none"}}>Login credentials</a></p>
                    <p style={{lineHeight:"1.8",paddingLeft:"40px"}}> <a href="" style={{textDecoration:"none"}}>Account Modification and Segment Addition</a></p>
                    <p style={{lineHeight:"1.8",paddingLeft:"40px"}}> <a href="" style={{textDecoration:"none"}}>DP ID and bank details</a></p>
                    <p style={{lineHeight:"1.8",paddingLeft:"40px"}}> <a href="" style={{textDecoration:"none"}}>Your profile</a></p>
                    <p style={{lineHeight:"1.8",paddingLeft:"40px"}}> <a href="" style={{textDecoration:"none"}}>Transfer and conversion of shares</a></p>
                </div>
                <div className='col-4'>
                    <p style={{fontSize:"20px",fontWeight:"revert",paddingLeft:"40px"}}><i class="fa-solid fa-chart-area"></i> Your zerosha Account</p>
                    <p className='mt-4'style={{lineHeight:"1.8",paddingLeft:"40px"}}> <a href="" style={{textDecoration:"none"}}>Margin/leverage,Product and Order types</a></p>
                    <p style={{lineHeight:"1.8",paddingLeft:"40px"}}> <a href="" style={{textDecoration:"none"}}>Kite web and mobile</a></p>
                    <p style={{lineHeight:"1.8",paddingLeft:"40px"}}> <a href="" style={{textDecoration:"none"}}>Trading FAQs</a></p>
                    <p style={{lineHeight:"1.8",paddingLeft:"40px"}}> <a href="" style={{textDecoration:"none"}}>Corporate Actions</a></p>
                    <p style={{lineHeight:"1.8",paddingLeft:"40px"}}> <a href="" style={{textDecoration:"none"}}>Sentinel</a></p>
                    <p style={{lineHeight:"1.8",paddingLeft:"40px"}}> <a href="" style={{textDecoration:"none"}}>kite API</a></p>
                    <p style={{lineHeight:"1.8",paddingLeft:"40px"}}> <a href="" style={{textDecoration:"none"}}>Pi and otger platform</a></p>
                    <p style={{lineHeight:"1.8",paddingLeft:"40px"}}> <a href="" style={{textDecoration:"none"}}>GTT</a></p>
                </div>
            </div>
        </div>
     );
}

export default CreateTicket;