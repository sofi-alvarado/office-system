import React, {useEffect} from 'react';
import useEmployee from '../hooks/useEmployee';
import TableEmployee from '../components/TableEmployees';
import NavBar from '../components/NavBar';

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
      <NavBar />
      <div className="row d-flex m-4">
        <div className="col-sm-12">
          <h1 className='my-3'>Lista de Empleados</h1>
          <TableEmployee data={employeeData} onEmployeeUpdate={fetchEmployees}/>
        </div>
        <div className="col-sm-12 d-flex justify-content-end">
          <button type="button" className="btn btn-primary my-2" onClick={() => openModal()}>Agregar Empleado</button>
        </div>
        <Modal
          show={isOpen} 
          onEmployeeUpdate={fetchEmployees}
          onClose={() => closeModal()}
        />
      </div>
    </>
  )
}

export default Home;