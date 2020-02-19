import React, {useEffect, useState} from 'react';
import axios from 'axios';

const ListaPermisos = (props) => {
        const [list, setList] = useState([]);
        useEffect(() => {
                axios.get('https://localhost:44318/api/permisos')
                    .then(res => {
                        setList(res.data);
                    })
                    .catch(err => console.error(err))
        }, []);

  	return (
                <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Tipo Permiso</th>
                  </tr>
                </thead>
                <tbody>
                  {list.length > 0 ? (
                    list.map((item, index) => (
                      <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.nombre}</td>
                        <td>{item.apellido}</td>
                        <td>{item.tipoPermiso.descripcion}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={4}>No hay Permisos</td>
                    </tr>
                  )}
                </tbody>
              </table>
  	)
};

export default ListaPermisos;
