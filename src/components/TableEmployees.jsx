import React, {useState} from 'react';
import Modal from './Modal';

const TableEmployee = ({data, onEmployeeUpdate}) => {
  const [editingItem, setEditingItem] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);


  const handleEdit = (item) => {
    setEditingItem(item);
    setIsModalVisible(true);
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
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data ? (
            data.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.lastname}</td>
                <td>{item.genre}</td>
                <td>{item.employment_area}</td>
                <td>
                  <div className="d-flex align-items-center">
                    <button type="button" className="btn btn-outline-primary" onClick={() => handleEdit(item)}>Edit</button>
                    <button type="button" className="btn btn-outline-danger mx-2">Delete</button>
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
        show={isModalVisible} 
        itemId={editingItem}
        onEmployeeUpdate={onEmployeeUpdate}
        onClose={() => {
          setEditingItem(null); 
          setIsModalVisible(false)
        }}
      />
    )}
</>

  )
}

export default TableEmployee;