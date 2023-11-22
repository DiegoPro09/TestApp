import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { CustomTable } from './CustomTable'

//Datos simulados para insertar dentro de la tabla
const fileData = [
  { filename: 'test1.csv', lines: { text: 'Text1', number: 123, hex: 'abc' } },
  { filename: 'test2.csv', lines: { text: 'Text2', number: 456, hex: 'def' } },
]

test('renders CustomTable with data', () => {
  render(<CustomTable fileData={fileData} />)

  // Verifica que el componente se renderiza correctamente
  expect(screen.getByText('File')).toBeInTheDocument()
  expect(screen.getByText('Text')).toBeInTheDocument()
  expect(screen.getByText('Number')).toBeInTheDocument()
  expect(screen.getByText('Hex')).toBeInTheDocument()

  //Verifica que los datos se muestran correctamente en la tabla
  expect(screen.getByText('test1.csv')).toBeInTheDocument()
  expect(screen.getByText('Text1')).toBeInTheDocument()
  expect(screen.getByText('123')).toBeInTheDocument()
  expect(screen.getByText('abc')).toBeInTheDocument()

  expect(screen.getByText('test2.csv')).toBeInTheDocument()
  expect(screen.getByText('Text2')).toBeInTheDocument()
  expect(screen.getByText('456')).toBeInTheDocument()
  expect(screen.getByText('def')).toBeInTheDocument()
})

