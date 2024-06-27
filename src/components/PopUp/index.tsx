import React from 'react';

interface PopUpProps {
  visible: boolean;
}

const PopUp: React.FC<PopUpProps> = ({ visible }) => {
  return (
    <div className={`popup ${visible ? "popup--visible" : ""}`} data-testid="popup">
      <p>Employee added successfully!</p>
    </div>
  );
};

export default PopUp;