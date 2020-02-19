import React, {useEffect, useState} from 'react';
import axios from 'axios';

const NuevoPermiso = (props) => {
	const initialFormState = { Nombre: '', Apellido: '', TipoPermisoId: 0, Fecha: new Date() }
	const [ permiso, setPermiso ] = useState(initialFormState)
  const [tipos, setTipos] = useState([]);
  useEffect(() => {
          axios.get('https://localhost:44318/api/tipopermisos')
              .then(res => {
                  setTipos(res.data);
              })
              .catch(err => console.error(err))
  }, []);

	const handleInputChange = event => {
		const { name, value } = event.target
		setPermiso({ ...permiso, [name]: value })
  }
  
  	return (
      <form
        onSubmit={event => {
          event.preventDefault()
          if (!permiso.Nombre || !permiso.Apellido || !permiso.TipoPermisoId) return;
          axios.post('https://localhost:44318/api/permisos', permiso)
          .then(res => {
            setPermiso(initialFormState);
          })
          .catch(err => console.error(err))

        }}
      >
        <label>Nombre</label>
        <input type="text" name="Nombre" value={permiso.Nombre} onChange={handleInputChange} />
        <label>Apellido</label>
        <input type="text" name="Apellido" value={permiso.Apellido} onChange={handleInputChange} />
        <label>Tipo Permiso</label>
        <select name="TipoPermisoId" value={permiso.TipoPermisoId} onChange={handleInputChange}>
        {
          tipos.map(t => {
            return <option value={t.id}>{t.descripcion}</option>
          })
        }
        </select>
        <button type="submit">Add new user</button>
		</form>
  	)
};

export default NuevoPermiso;
