
import React from "react";

function Note() {
    return(
        <>
          <div className="container-fluid">
      
            <div className="row">
        <div className="feature-box col-lg-4">
          <i className="fas fa-question-circle fa-3x icon"></i>
          <h3 className="feature-title">What we do</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt .</p>
        </div>
        <div className="col-lg-4 feature-box">
          <i className="fas fa-info-circle fa-3x icon"></i>
          <h3 className="feature-title">How to get started</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt .</p>
        </div>
        <div className="col-lg-4 feature-box">
          <i className="fas fa-wallet fa-3x icon"></i>
          <h3 className="feature-title">Connect your wallet</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt .</p>
        </div>
      </div>

    </div>
        </>
    )
}

export default Note;
