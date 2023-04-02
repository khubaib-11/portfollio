import React, { useState } from 'react'
import styles from './navbar.module.css'

// My Imports
import logoImage from '../../assets/images/Logo.png'
import { Heading4 } from '../../utils/UI/headings/Headings'
import Icon from '../../utils/UI/Icons/Icon'

// Library Imports
import { useMediaQuery } from 'react-responsive'



// Components

const Logo = () => {
  return (
    <div className={styles.navbar__logo}>
      <img src={logoImage} alt="" />
      <Heading4 color="white">Khubaib</Heading4>
    </div>
  )
}
const NavbarLinks = ({ device }) => {
  // Props will accept the device for which links should be styled.
  // Only valid options are:
  // 1) computer
  // 2) mobile
  return (
    <ul className={styles[`${device}__links_menu`]}>
      <li className={styles.navbar__link}>
        <a href="#">About</a>
      </li>
      <li className={styles.navbar__link}>
        <a href="#">Services</a>
      </li>
      <li className={styles.navbar__link}>
        <a href="#">Pricing</a>
      </li>
      <li className={styles.navbar__link}>
        <a href="#">Work</a>
      </li>
    </ul >
  )
}

const Navbar = () => {
  const [menuIconPressed, setMenuIconPressed] = useState(false)
  const isPhoneOrTablet = useMediaQuery({ maxWidth: 800 })

  const handleClick = () => setMenuIconPressed(!menuIconPressed)

  return (
    <nav className={styles.navbar}>
      {/* Nav Logo */}
      <Logo />
      {/* Nav Links */}
      <NavbarLinks device="computer" />
      {/* Nav Button + Icon */}
      <div>
        <button className={styles.navbar__btn}>Contact</button>
      </div>
      {isPhoneOrTablet && <Icon onClick={handleClick} style={{ cursor: 'pointer' }} icon="icon-menu" size={20} color="#fff" />}

      {menuIconPressed &&
        <div className={styles.mobile_nav} >
          <p onClick={handleClick} className={styles.mobile_nav_close}>Close</p>
          <NavbarLinks device="mobile" />
        </div>
      }

    </nav>
  )
}

export default Navbar