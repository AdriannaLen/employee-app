import { render, screen } from '@testing-library/react';
import PopUp from './index'

describe('PopUp component', () => {
  test('should render with visible class when visible is true', () => {
    render(<PopUp visible={true} />);
    const popupElement = screen.getByTestId('popup');

    expect(popupElement).toBeInTheDocument();
    expect(popupElement).toHaveClass('popup--visible');
  });

  test('should render without visible class when visible is false', () => {
    render(<PopUp visible={false} />);
    const popupElement = screen.getByTestId('popup');

    expect(popupElement).toBeInTheDocument();
    expect(popupElement).not.toHaveClass('popup--visible');
  });

  test('should render the success message', () => {
    render(<PopUp visible={true} />);
    const successMessage = screen.getByText('Employee added successfully!');

    expect(successMessage).toBeInTheDocument();
  });
});