import React from 'react';
import './index.scss'

interface PopUpProps {
  visible: boolean;
}

const PopUp: React.FC<PopUpProps> = ({ visible }) => {
  return (
    <>
      {visible && <div className="overlay"></div>}
      <div className={`popup ${visible ? "popup--visible" : ""}`} data-testid="popup">
        <p>Employee added successfully!</p>
      </div>
    </>
  );
};

export default PopUp;