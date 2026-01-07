import React from 'react';

function OpenAccount() {
    return ( 
        <div className='container p-5' >
            <div className='row text-center'>
                <h2 className='mt-5' style={{color:"#424242"}}>Open a Zerodha account</h2>
                <p className='mt-2' style={{color:"#666666"}}>
                    Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
                </p>
                <button type="button" style={{width:"17%",margin:"15px auto"}} class="btn btn-primary fs-5">
                    Sign up for free
                </button>
            </div>
        </div>
     );
}

export default OpenAccount;