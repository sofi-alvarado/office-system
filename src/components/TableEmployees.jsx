import React from 'react';

const TableEmployee = ({data}
) => {
  return (
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
              </tr>
            ))
          ) : (
            <tr><td>No data available</td></tr>
          )}
        </tbody>
      </table>   
    </div>
  )
}

export default TableEmployee;