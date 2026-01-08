import React from 'react';

function LeftSection({imageURL,productname,productDescription,tryDemo,learnMore,googlePlay,appstore}) {
    return ( 
        <div className="container mt-5 mb-3">
            <div className="row">
                <div className='col-1'></div>
                <div className="col-5">
                    <img src={imageURL} />
                </div>
                <div className="col-6">
                    <h3 style={{fontSize:"30px",color:"#424242",paddingLeft:"150px",paddingTop:"40px"}}>{productname}</h3>
                    <p style={{fontSize:"17px",color:"#424242",paddingTop:"10px",paddingLeft:"150px",paddingRight:"150px",lineHeight:"1.8"}}>{productDescription}</p>
                    <p style={{fontSize:"17px",color:"#424242",paddingTop:"10px",paddingLeft:"150px",paddingRight:"150px",lineHeight:"1.8"}}><a href={tryDemo} style={{textDecoration:"none"}}>Try demo <i class="fa fa-long-arrow-right" arial-hidden="true"></i></a>
                    <a href={learnMore} style={{textDecoration:"none",paddingLeft:"60px"}}>Learn more <i class="fa fa-long-arrow-right" arial-hidden="true"></i></a></p>
                    <a href={googlePlay}><img src="/Media/googlePlayBadge.svg" style={{paddingLeft:"155px",paddingTop:"20px"}}/></a>
                    <a href={appstore}><img src="/Media/appstoreBadge.svg" style={{paddingLeft:"30px",paddingTop:"22px"}}/></a>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;