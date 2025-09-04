import React from 'react'
import Logo from './_logo'
import PerfilUsuario from './_perfilUsuario'
import Buscador from './_buscador'
import './Header.css'

const Header = () => {
  return (
    <section className='header'>   
        <div className='header-superior'>
            <Logo />
            <PerfilUsuario />
        </div>
        <Buscador />
    </section>
  )
}

export default Header