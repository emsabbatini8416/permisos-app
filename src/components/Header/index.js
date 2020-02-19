import React from 'react';
import {
    Link
} from "react-router-dom";
const Header = (props) => {
  	return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Lista Permisos</Link>
                    </li>
                    <li>
                        <Link to="/nuevo-permiso">Nuevo Permiso</Link>
                    </li>
                </ul>
            </nav>
        </div>
  	)
};

export default Header;