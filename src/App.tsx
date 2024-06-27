import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { GetAllRoles } from './axiosConfig';

function App() {
  const [roles, setRoles] = useState<any[]>()
 

  const getAllRoles = async () => {
      const roleList = await GetAllRoles();
      if (roleList.payload) {
          setRoles(roleList.payload);
      }
  };

  useEffect(() => {
      getAllRoles();
  }, []);
  return (
    <div className="App">
      <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Des</th>
             
            </tr>
          </thead>
          <tbody>
            {roles?.map(role => (
              <tr key={role.id}>
              
                <td>{role.name}</td>
                <td>{role.description}</td>
              
              </tr>

            ))}
          </tbody>
        </table>
    </div>
  );
}

export default App;
