import React from 'react'
import {NavLink} from 'react-router-dom'

const Navigation = () => {
    return (
        <div className="navigation">
         <NavLink excat to="/" activeClassName="nav-active">
             Accueil
         </NavLink>
         <NavLink exact to="a-propos" activeClassName="nav-active">
             À propos
         </NavLink>
            
        </div>
    )
}

export default Navigation
