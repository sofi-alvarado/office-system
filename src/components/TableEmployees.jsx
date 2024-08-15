import React, {useState} from 'react';
import Modal from './Modal';

import useModal from '../hooks/useModal';
import useEmployee from '../hooks/useEmployee';

const TableEmployee = ({
  data, 
  onEmployeeUpdate
}) => {
  const [editingItem, setEditingItem] = useState(null);
  const { isOpen, openModal, closeModal } = useModal();
  const { removeEmployee } = useEmployee();

  const handleEdit = (item) => {
    setEditingItem(item);
  };

  const handleDelete = async (id) => {
    await removeEmployee(id);
    onEmployeeUpdate();
  };

  return (
    <>
    <div className="table-responsive">
      <table className="table table-sm table-hover">
        <thead>
          <tr>
            <th>ID</th>
						<th>Nombre</th>
						<th>Apellido</th>
            <th>Genero</th>
            <th>Area</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(data) && data ? (
            data.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.lastname}</td>
                <td>{item.genre}</td>
                <td>{item.employment_area}</td>
                <td>
                  <div className="d-flex">
                    <button type="button" className="btn btn-outline-primary" onClick={() => {handleEdit(item); openModal()}}>Editar</button>
                    <button type="button" className="btn btn-outline-danger mx-2" onClick={() => handleDelete(item.id)}>Eliminar</button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr><td>No data available</td></tr>
          )}
        </tbody>
      </table>   
    </div>

    {editingItem && (
      <Modal
        data={editingItem}
        show={isOpen} 
        itemId={editingItem}
        onEmployeeUpdate={onEmployeeUpdate}
        onClose={() => {
          setEditingItem(null); 
          closeModal();
        }}
      />
    )}
</>

  )
}

export default TableEmployee;