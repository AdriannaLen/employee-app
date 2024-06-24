import React, { useContext, useState } from "react";
import { AppContext } from "../../Context/AppContext";
import Card from "../../components/Card/Card";
import "./index.scss";
import Button from "../../components/Button/Button";
import Modal from "../../components/Modal";
import { Employee } from "../../Context/hooks/useAppContext";
import { useTranslation } from "react-i18next";
import Search from "../../components/Search";
import Loader from "../../components/Loader/Loader";

const UserList: React.FC = () => {
  const { employees, setEmployees, isLoading, currentPage, itemsPerPage, totalPages, setCurrentPage } = useContext(AppContext);
  const [results, setResults] = useState<Employee[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);

  const openModal = (employee: Employee) => {
    setSelectedEmployee(employee);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedEmployee(null);
    setShowModal(false);
  };

  const { t } = useTranslation();

  const handleDeleteEmployee = (id: number) => {
    const newEmployees = employees.filter((employee) => employee.id !== id);
    setEmployees(newEmployees);
  };

  const displayedEmployees = results.length > 0 ? results : employees;

  // Pagination logic
  const indexOfLastEmployee = currentPage * itemsPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - itemsPerPage;
  const currentEmployees = displayedEmployees.slice(indexOfFirstEmployee, indexOfLastEmployee);

  
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="user-list">
      <header className="user-list__header">
        <h2 className="user-list__title">{t("app.employee-list")}</h2>
        <Search employees={employees} setResults={setResults} />
      </header>
      <Card className="user-list__card--header">
        <p>{t("app.image")}</p>
        <p>{t("app.name")}</p>
        <p>{t("app.birth-date")}</p>
        <p>{t("app.email")}</p>
        <p>{t("app.phone")}</p>
        <p>{t("app.desc")}</p>
        <p>{t("app.view")}</p>
        <p>{t("app.delete")}</p>
      </Card>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <ul className="user-list__items">
            {currentEmployees.map((employee) => (
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
          <div className="pagination">
            <Button
              onClick={handlePrevPage}
              className="pagination__btn"
              label={t("app.prev")}
              variant="secondary"
              height="large"
              disabled={currentPage === 1}
            />
            <span className="pagination__info">
              {t("app.page")} {currentPage} {t("app.of")} {totalPages}
            </span>
            <Button
              onClick={handleNextPage}
              className="pagination__btn"
              label={t("app.next")}
              variant="secondary"
              height="large"
              disabled={currentPage === totalPages}
            />
          </div>
        </>
      )}
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