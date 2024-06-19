import React, { useContext, useState } from "react";
import { AppContext } from "../../Context/AppContext";
import Card from "../../components/Card/Card";
import "./index.scss";
import Button from "../../components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Modal from "../../components/Modal";
import { Employee } from "../../Context/hooks/useAppContext";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Search from "../../components/Search";

const UserList: React.FC = () => {
  const { employees, setEmployees } = useContext(AppContext);
  const navigate = useNavigate();
  const [results, setResults] = useState<Employee[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(
    null
  );

  const openModal = (employee: Employee) => {
    setSelectedEmployee(employee);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedEmployee(null);
    setShowModal(false);
  };

  const { t } = useTranslation();

  const handleAddEmployee = () => {
    navigate("/add-new-worker");
  };

  const handleDeleteEmployee = (id: number) => {
    const newEmployees = employees.filter((employee) => employee.id !== id);
    setEmployees(newEmployees);
  };

  const displayedEmployees = results.length > 0 ? results : employees;

  return (
    <div className="user-list">
      <header className="user-list__header">
        <h2 className="user-list__title">{t("app.employee-list")}</h2>

        <Search employees={employees} setResults={setResults} />

        <Button
          variant="primary"
          height="large"
          onClick={handleAddEmployee}
          label={
            <>
              <FontAwesomeIcon icon={faPlus} /> {t("app.new-employee")}
            </>
          }
        />
      </header>
      <Card className="user-list__card--header">
        <p>{t("app.image")}</p>
        <p>{t("app.name")}</p>
        <p>{t("app.birth-date")}</p>
        <p>{t("app.email")}</p>
        <p>{t("app.phone")}</p>
        <p>{t("app.desc")}</p>
        <p>{t("app.desc")}</p>
        <p>{t("app.view")}</p>
      </Card>
      <ul className="user-list__items">
        {displayedEmployees.map((employee) => (
          <li key={employee.id} className="user-list__item">
            <Card className="user-list__card">
              <img
                className="user-list__image"
                src={employee.image}
                alt={employee.firstName}
              />
              <h3 className="user-list__name">
                {employee.firstName} {employee.lastName}
              </h3>
              <p className="user-list__description">{employee.birthDate}</p>
              <p className="user-list__description">{employee.email}</p>
              <p className="user-list__description">{employee.phone}</p>
              <p className="user-list__description">lorem</p>
              <p className="user-list__description">lorem</p>
              <Button
                onClick={() => openModal(employee)}
                className="user-list__btn"
                label={t("app.view")}
                variant="primary"
                height="large"
              />
              <Button
                onClick={() => handleDeleteEmployee(employee.id)}
                className="user-list__delete-btn"
                label={t("app.delete")}
                variant="primary"
                height="large"
              />
            </Card>
          </li>
        ))}
      </ul>

      {showModal && selectedEmployee && (
        <Modal
          firstName={selectedEmployee.firstName}
          lastName={selectedEmployee.lastName}
          birthDate={selectedEmployee.birthDate}
          phone={selectedEmployee.phone}
          email={selectedEmployee.email}
          image={selectedEmployee.image}
          address={selectedEmployee.address}
          maidenName={selectedEmployee.maidenName}
          age={selectedEmployee.age}
          gender={selectedEmployee.gender}
          username={selectedEmployee.username}
          password={selectedEmployee.password}
          bloodGroup={selectedEmployee.bloodGroup}
          height={selectedEmployee.height}
          weight={selectedEmployee.weight}
          hair={selectedEmployee.hair}
          eyeColor={selectedEmployee.eyeColor}
          ip={selectedEmployee.ip}
          onClose={closeModal}
          id={selectedEmployee.id}
        />
      )}
    </div>
  );
};

export default UserList;
