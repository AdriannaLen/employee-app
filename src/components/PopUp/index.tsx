import React from 'react';
import './index.scss'
import { useTranslation } from 'react-i18next';

interface PopUpProps {
  visible: boolean;
}

const PopUp: React.FC<PopUpProps> = ({ visible }) => {
  const {t} = useTranslation();
  return (
    <>
      {visible && <div className="overlay"></div>}
      <div className={`popup ${visible ? "popup--visible" : ""}`} data-testid="popup">
        <p> {t("app.new")}</p>
      </div>
    </>
  );
};

export default PopUp;