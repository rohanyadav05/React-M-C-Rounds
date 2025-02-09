import React from "react";
import './CustomModalStyle.css';

const CustomModal = ({handleToggle}) => {
   
  
  return (
    <>
      <div className="modal-container">
        <div className="modal-body" >
          <div className="modal-header">This is a Modals heading </div>
          <div>Modals body content need to be placed here
          In the original code, the modal's positioning was set with top: 50vh and left: 50vh. This approach tries to center the modal based on its dimensions, but it doesn’t actually center it properly on the screen because it uses viewport height (vh) rather than percentages of the container size.</div>
          <div className="modal-content">
            <div>Wanna close?</div>
            <div>
            <button className="modal-button" onClick={handleToggle} >Close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomModal;
