import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'
// ...
export default React.createClass({
  render() {
    return (
      <div>
        <h2>Perfil</h2>

        {/* add some links */}
        <ul>

              <li><NavLink to="/abouts/user/Funcionario">Funcionarios</NavLink></li>
              <li><NavLink to="/abouts/user/Competencias">Competencias</NavLink></li>
              <li><NavLink to="/abouts/user/Evaluacion">Evalucion por competencias</NavLink></li>
              <li><NavLink to="/abouts/user/Vacaciones">Vacaciones</NavLink></li>
              <li><NavLink to="/abouts/user/Ausencia">Ausencias</NavLink></li>
              <li><NavLink to="/abouts/user/Contabilidad">Contabilidad</NavLink></li>
              <li><NavLink to="/abouts/user/Documentacion">Documentacion</NavLink></li>
            <li> <NavLink to="/abouts/user/Manual">Manual del usuario</NavLink></li>

          <li><NavLink to="/" onlyActiveOnIndex={true}>Cerrar sesion</NavLink></li>

        </ul>
          {this.props.children}
      </div>
    )
  }
})
