import React, { useState } from "react";
import useEmployee from "../hooks/useEmployee";
import "../styles/Modal.css";

const Modal = ({ 
	data, 
	show, 
	onClose, 
	onEmployeeUpdate 
}) => {
  const { editEmployee, addEmployee } = useEmployee();

	const [editForm, setEditForm] = useState(() => {
		if(data) {
      return {
        id: data.id,
        name: data.name,
        lastname: data.lastname,
        genre: data.genre,
        employment_area: data.employment_area
      }
    } else {
      return {
        id: "",
        name: "",
        lastname: "",
        genre: "",
        employment_area: ""
      };
    }
	});

	const handleSubmit = async (e) => {
    e.preventDefault();
		data ? await editEmployee(data.id, editForm) : await addEmployee(editForm)
    onClose();
		onEmployeeUpdate();
  };

  const handleChange = (e) => {
    setEditForm({
      ...editForm,
      [e.target.name]: e.target.value,
    })
  }

	if (!show) {
    return null;
  }

  return (
		<div className="modal">
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">{data ? 'EDITAR EMPLEADO' : 'AGREGAR EMPLEADO'}</h5>
						<button type="button" className="btn-close" data-bs-dismiss="modal" onClick={onClose} aria-label="Close">
							<span aria-hidden="true"></span>
						</button>
					</div>
					<div className="modal-body">
							<form onSubmit={handleSubmit}>
								<div className="row">
									<div className="col">
										<div>
											<label htmlFor="employee-name" className="col-form-label mt-4">Nombre</label>
											<input 
												id="employee-name"
												name="name" 
												type="text" 
												className="form-control"
												value={editForm.name}
												required 
												onChange={handleChange} 
											/>
										</div>
									</div>
									<div className="col">
                    <div>
											<label htmlFor="employee-lastname" className="col-form-label mt-4">Apellido</label>
											<input 
												id="employee-lastname"
												name="lastname" 
												type="text" 
												className="form-control"
												value={editForm.lastname}
												required 
												onChange={handleChange} 
											/>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col">
										<div>
											<label htmlFor="employee-genre" className="col-form-label mt-4">Genero</label>
											<input 
												id="employee-genre"
												name="genre"
												type="text" 
												className="form-control"
												value={editForm.genre}
												required
												onChange={handleChange} 
											/>
										</div>
									</div>
									<div className="col">
										<div>
											<label htmlFor="employment-area" className="col-form-label mt-4">Area</label>
											<input 
												id="employment-area"
												name="employment_area" 
												type="text"
												className="form-control"
												value={editForm.employment_area}
												required
												onChange={handleChange}
											/>
										</div>
									</div>
								</div>
								<div className="row pb-0 mt-3 modal-footer">
									<div className="col  d-flex align-content-end justify-content-end">
										<button type="submit" className="btn btn-primary">{data ? 'EDITAR' : 'AGREGAR'}</button>
									</div>
								</div>
							</form>
					</div>
				</div>
			</div>
		</div>
  );
}

export default Modal;