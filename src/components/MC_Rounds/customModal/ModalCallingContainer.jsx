import React, { useState } from "react";
import CustomModal from "./CustomModal";

const ModalCallingContainer = () => {
  const [showModal, setShowModal] = useState(false);

  const handleToggle = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <div>ModalCallingContainer</div>
      <button onClick={handleToggle}> {!showModal ? 'Show Modal' : 'Close Modal'}</button>
      {showModal && <CustomModal handleToggle={handleToggle} />}
    </>
  );
};

export default ModalCallingContainer;
