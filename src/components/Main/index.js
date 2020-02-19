import React from 'react';
import {
    Switch,
    Route
} from "react-router-dom";
import ListaPermisos from './../ListaPermisos';
import NuevoPermiso from './../NuevoPermiso';
const Main = (props) => {
  	return (
        <div>
            <Switch>
                <Route exact path="/" component={ListaPermisos} />
                <Route path="/nuevo-permiso" component={NuevoPermiso} />
            </Switch>
        </div>
  	)
};

export default Main;