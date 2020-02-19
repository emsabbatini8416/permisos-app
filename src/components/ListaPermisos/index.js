import React, {useEffect, useState} from 'react';
import axios from 'axios';

const ListaPermisos = (props) => {
        const [list, setList] = useState([]);
        useEffect(() => {
                axios.get('https://restcountries.eu/rest/v2/all')
                    .then(res => {
                        setList(res.data);
                    })
                    .catch(err => console.error(err))
        }, []);

  	return (
                <table>
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Tipo Permiso</th>
                  </tr>
                </thead>
                <tbody>
                  {list.length > 0 ? (
                    list.map((user, index) => (
                      <tr key={index}>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={3}>No hay Permisos</td>
                    </tr>
                  )}
                </tbody>
              </table>
  	)
};

export default ListaPermisos;
