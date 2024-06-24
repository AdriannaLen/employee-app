import { ChangeEvent, FormEvent, useContext, useState } from "react";
import "./Modal.scss";
import { AppContext } from "../../Context/AppContext";
import Button from "../Button/Button";
import { Employee } from "../../Context/hooks/useAppContext";
import { t } from "i18next";

type ModalProps = {
  onClose: () => void;
} & Employee;

const Modal = ({
  onClose,
  id,
  firstName: initialFirstName,
  lastName: initialLastName,
  birthDate: initialBirthDate,
  phone: initialPhone,
  email: initialEmail,
  image: initialImage,
  address: initialAddress,
  maidenName,
  age,
  gender,
  username,
  password,
  bloodGroup,
  height,
  weight,
  hair,
  eyeColor,
  ip,
}: ModalProps) => {
  const { updateEmployees } = useContext(AppContext);

  const [formData, setFormData] = useState({
    firstName: initialFirstName,
    lastName: initialLastName,
    birthDate: initialBirthDate,
    phone: initialPhone,
    email: initialEmail,
    image: initialImage,
    address: initialAddress.address,
    city: initialAddress.city,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const updatedData = {
      ...formData,
      id,
      address: {
        address: formData.address,
        city: formData.city,
      },
      maidenName,
      age,
      gender,
      username,
      password,
      bloodGroup,
      height,
      weight,
      hair,
      eyeColor,
      ip,
    };

    updateEmployees(id, updatedData);

    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal__title">
          <b>{t("app.full-name")} </b>
          {formData.firstName} {formData.lastName}
        </h2>
        <section className="modal__section">
          <div className="modal__section-box">
            <img src={formData.image} alt={formData.firstName} />
          </div>

          <div className="modal__section-box">
            <p>
              <b>{t("app.user-name")}:</b> {username}
            </p>
            <p>
              <b>{t("app.email")}:</b> {formData.email}
            </p>
            <p>
              <b>{t("app.phone")}:</b> {formData.phone}
            </p>
            <p>
              <b>{t("app.ip")}:</b> {ip}
            </p>
            <p>
              <b>{t("app.password")}:</b> {password}
            </p>
          </div>

          <div className="modal__section-box">
            <p>
              <b>{t("app.birth-date")}:</b> {formData.birthDate}
            </p>
            <p>
              <b>{t("app.age")}:</b> {age}
            </p>
            <p>
              <b>{t("app.maiden-name")}:</b> {maidenName}
            </p>
            <p>
              <b>{t("app.gender")}:</b> {gender}
            </p>
          </div>

          <div className="modal__section-box">
            <p>
              <b>{t("app.blood-group")}:</b> {bloodGroup}
            </p>
            <p>
              <b>{t("app.height")}:</b> {height}cm
            </p>
            <p>
              <b>{t("app.weight")}:</b> {weight}kg
            </p>
            <p>
              <b>{t("app.eye-color")}:</b> {eyeColor}
            </p>
          </div>

          <div className="edit-worker">
            <h2 className="edit-worker__title">Edytuj Pracownika</h2>
            <form className="edit-worker__form" onSubmit={handleSubmit}>
              <input
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                name="firstName"
                placeholder="Imię"
              />
              <input
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                name="lastName"
                placeholder="Nazwisko"
              />
              <input
                type="date"
                value={formData.birthDate}
                onChange={handleChange}
                name="birthDate"
                placeholder="Data urodzenia"
              />
              <input
                type="text"
                value={formData.address}
                onChange={handleChange}
                name="address"
                placeholder="Ulica"
              />
              <input
                type="text"
                value={formData.city}
                onChange={handleChange}
                name="city"
                placeholder="Miejscowość"
              />
              <input
                type="email"
                value={formData.email}
                onChange={handleChange}
                name="email"
                placeholder="Email"
              />
              <input
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                name="phone"
                placeholder="Numer telefonu"
              />
              <input
                type="url"
                value={formData.image}
                onChange={handleChange}
                name="image"
                placeholder="URL do zdjęcia"
              />
              <Button label="Edit" type="submit" />
              <Button label={t("app.close")} onClick={onClose} />
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Modal;
