import React from 'react'
import products from './data.json';
import Item from './Item';

// Debemos importar el listado de objetos del archivo JSON para usarlos como array a la hora de crear cada Item.
// El componente Listado es el padre de:
// - varios Item
// ESTADO: Listado no necesita manejar un estado.
// MÉTODOS: Listado no requiere de métodos.
// PROPS: Listado recibe el método para aumentar el estado de App y se lo pasa a cada uno de sus hijos.

export default function Listado({ onStockChange }) {

  const renderProduct = ({ id, stock, producto: { nombre: name, descripcion: description  } }) => <Item
    key={id}
    name={name}
    description={description}
    stock={stock}
    onStockChage={onStockChange}
  />

  return (
    <div className='container'>
      {products.map(renderProduct)}
    </div>
  )
}
