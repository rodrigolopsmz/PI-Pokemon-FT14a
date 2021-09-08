import { render,fireEvent,waitFor, screen,waitForElementToBeRemoved } from '@testing-library/react';
import App from './App';

test('renders learn react link', async() => {
  render(<App />);
  const linkElement = screen.getByRole('button');
  expect(linkElement).toBeInTheDocument();

  fireEvent.click(screen.getByText('Iniciar!'))
  const linkElement2 = screen.getByText(/Buscar/i);
  expect(linkElement2).toBeInTheDocument();

  const linkElement3 = screen.getByText(/Cargar/i);
  expect(linkElement3).toBeInTheDocument();

  const linkElement4 = screen.getByText(/Alfab/i);
  expect(linkElement4).toBeInTheDocument()

  const linkElement5 = screen.getByText(/Fuerza/i);
  expect(linkElement5).toBeInTheDocument()

  const linkElement6 = screen.getByText(/Ordenar:/i);
  expect(linkElement6).toBeInTheDocument()

  const linkElement7 = screen.getByText(/Filtrar:/i);
  expect(linkElement7).toBeInTheDocument()

  fireEvent.click(screen.getByText(/Agregar/i))
  
 // console.log(linkElement1)
 // expect(linkElement1).toBeInTheDocument();

 

  
  
});
