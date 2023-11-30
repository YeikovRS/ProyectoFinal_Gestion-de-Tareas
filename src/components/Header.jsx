import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = ({ tab, setTab }) => {
  return (
    <header className='border-b border-slate-950 mb-4'>
      <nav className='max-w-[60%] m-auto'>
        <ul className='flex justify-around text-gray02 [&>li]:py-2 [&>li]:w-full [&>li]:cursor-pointer'>
          
        <NavLink
            className={tab==='formulario'?'current':''}
            onClick={e=>setTab('formulario')} to="/Formulario"
          >Formulario</NavLink>
          <NavLink
            className={tab==='day'?'current':''}
            onClick={e=>setTab('day')} to="/Dia"
          >Día</NavLink>
          <NavLink
            className={tab==='week'?'current':''}
            onClick={e=>setTab('week')} to="/Semana"
          >Semana</NavLink>
        
          <NavLink
            className={tab==='month'?'current':''}
            onClick={e=>setTab('month')} to="/Mes"
          >Mes</NavLink>
         
          <NavLink
            className={tab==='year'?'current':''}
            onClick={e=>setTab('year')} to="/Año"
          >Año</NavLink>
        </ul>
      </nav>
    </header>
  )
}

export default Header