import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { FaBars, FaTimes } from 'react-icons/fa'

import './Navbar.css'
const Navbar = () => {
  
  const [navbar, setNavbar] = useState(false)
  const changeNavbar = () => {
    setNavbar(!navbar)
  }

  const isMobile = useMediaQuery({query: `(max-width:760px)`})
  useEffect(() => {
    if(!isMobile) {
      setNavbar(false)
    }
  },[isMobile])
  return (
    <header>
      <div className='logo'>
      <img src='/logo.png' alt='Pokébola' className='logo-header'/>
      <p>PokéDex</p>
    </div>
    <nav className={navbar ? 'navbar-active' : 'navbar-default' }>
        <ul>
          <li>
            Pokemones
          </li>
          <li>
            Bayas
          </li>
          <li>
            Items
          </li>
        </ul>
    </nav>
    {navbar ? <FaTimes className='bars' onClick={changeNavbar} /> : <FaBars className='bars' onClick={changeNavbar} />}
    </header>
  )
}

export default Navbar