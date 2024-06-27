import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import AddNewWorker from "./index";
import { Employee } from "../../Context/hooks/useAppContext";

jest.mock("../../Context/AppContext", () => {
  const employees: Employee[] = [];
  const setEmployees = jest.fn();

  return {
    AppContext: {
      Consumer: ({ children }: { children: (value: any) => React.ReactNode }) =>
        children({
          employees,
          setEmployees,
        }),
    },
    useContext: () => ({
      employees,
      setEmployees,
    }),
  };
});

describe("AddNewWorker component", () => {
  it("renders AddNewWorker component correctly", () => {
    render(<AddNewWorker />);

    expect(screen.getByText(/new employee/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/first-name/i)).toBeInTheDocument();
  });

  it("updates form state when input values change", () => {
    render(<AddNewWorker />);

    const firstNameInput = screen.getByPlaceholderText(/first-name/i);
    fireEvent.change(firstNameInput, { target: { value: "John" } });

    expect(firstNameInput).toHaveValue("John");
  });

  it("submits form with valid data", async () => {
    render(<AddNewWorker />);

    fireEvent.change(screen.getByPlaceholderText(/first-name/i), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByPlaceholderText(/last-name/i), {
      target: { value: "Doe" },
    });
    fireEvent.change(screen.getByPlaceholderText(/birth-date/i), {
      target: { value: "1990-01-01" },
    });
    fireEvent.change(screen.getByPlaceholderText(/street/i), {
      target: { value: "123 Main St" },
    });
    fireEvent.change(screen.getByPlaceholderText(/city/i), {
      target: { value: "New York" },
    });
    fireEvent.change(screen.getByPlaceholderText(/email/i), {
      target: { value: "john.doe@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText(/phone/i), {
      target: { value: "123-456-7890" },
    });
    fireEvent.change(screen.getByPlaceholderText(/url-address/i), {
      target: { value: "https://example.com/photo.jpg" },
    });

    fireEvent.click(screen.getByText(/add/i));
    
    await waitFor(() => {
      expect(screen.getByText(/Employee added successfully!/i)).toBeInTheDocument();
    });
  });
});