import './index.scss'


interface PopUpProps {
    visible: boolean;
  }
  
  const PopUp: React.FC<PopUpProps> = ({ visible }) => {
    return (
      <div className={`popup ${visible ? "popup--visible" : ""}`}>
        <p>Employee added successfully!</p>
      </div>
    );
  };
  
  export default PopUp;