import React from 'react';

function RightSection({imageURL,productname,productDescription,learnMore}) {
    return ( 
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 p-5 mt-5" style={{padingTop:"60px",paddingLeft:"50px",allignItems:"center"}}>
                    <h3 style={{fontSize:"30px",color:"#424242",paddingLeft:"50px",paddingTop:"40px"}}>{productname}</h3>
                    <p style={{fontSize:"17px",color:"#424242",paddingTop:"20px",lineHeight:"1.8",paddingLeft:"50px"}}>{productDescription}</p>
                    <div style={{paddingTop:"10px"}}>
                        <a href={learnMore} style={{textDecoration:"none",marginLeft:"50px"}}>{learnMore} <i class="fa fa-long-arrow-right" arial-hidden="true"></i></a>
                    </div>
                </div>
                <div className="col-6 mt-2" >
                    <img src={imageURL} />
                </div>
            </div>
        </div>
     );
}

export default RightSection;