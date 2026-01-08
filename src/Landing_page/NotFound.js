import React from 'react';

function NotFound() {
    return ( 
        <div className='container p-5' >
            <div className='row text-center'>
                <h2 className='mt-5' style={{color:"#424242"}}>404</h2>
                <p className='mt-2' style={{color:"#666666"}}>
                    We couldn’t find the page you were looking for. Visit Zerodha’s home page
                </p>
                
            </div>
        </div>
     );
}

export default NotFound;