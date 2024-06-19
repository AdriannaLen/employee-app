import { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import './EmployeeList.scss'

const EmployeeList = () => {
  const { employees } = useContext(AppContext);

  return (
    <div className="employee-list">
      <ul>
        {employees.map(({ id, firstName, lastName }) => (
          <li key={id}>
            {firstName} {lastName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
