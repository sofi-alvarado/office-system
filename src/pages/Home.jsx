import React, {useEffect} from 'react';
import useEmployee from '../hooks/useEmployee';
import TableEmployee from '../components/TableEmployees';

import Modal from '../components/Modal';
import useModal from '../hooks/useModal';

const Home = () => {
  const { data: employeeData, fetchEmployees } = useEmployee();
  const { isOpen, openModal, closeModal } = useModal();

  useEffect(() => {
    fetchEmployees();
  }, [])

return (
  <>
   <button type="button" className="btn btn-outline-primary" onClick={() => openModal()}>Agregar Empleado</button>
    <TableEmployee data={employeeData} onEmployeeUpdate={fetchEmployees}/>
    
    <Modal
      show={isOpen} 
      onEmployeeUpdate={fetchEmployees}
      onClose={() => closeModal()}
    />
  </>
)
}

export default Home;