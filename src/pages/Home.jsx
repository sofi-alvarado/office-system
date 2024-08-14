import React, {useEffect} from 'react';
import useEmployee from '../hooks/useEmployee';
import TableEmployee from '../components/TableEmployees';

const Home = () => {
  const { data: employeeData, fetchEmployees } = useEmployee();

  useEffect(() => {
    fetchEmployees();
  }, [])

return (
  <>
    <TableEmployee data={employeeData}/>
  </>
)
}

export default Home;