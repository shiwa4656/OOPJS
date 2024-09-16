import '@testing-library/jest-dom';
import { fireEvent, screen } from '@testing-library/dom';

// Assuming simple-greeting is defined and imported here

test('simple-greeting displays a greeting message', () => {
  document.body.innerHTML = `<simple-greeting name="World"></simple-greeting>`;

  const greeting = screen.getByText(/hello, world/i);
  expect(greeting).toBeInTheDocument();
});

 
