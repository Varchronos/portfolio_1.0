import React, { useEffect, useState } from 'react'
import styles from './Navbar.module.css'
// import {Link, Element, Events, animateScroll as scroll, scrollSpy} from 'react-scroll'
const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isActive, setActive] = useState(1);

  const clickHandler = (event) => {
    switch (event.target.name) {
      case 'go-to-top': setActive(1); break;
      case 'about': setActive(2); break;
      case 'work': setActive(3); break;
      case 'footer': setActive(4); break;
    }
  }

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    setVisible(currentScrollPos <= 100 || currentScrollPos === 0)
    setPrevScrollPos(currentScrollPos)
  }

  const handleMouseMove = (event) => {
    const cursorY = event.clientY;

    // Adjust the threshold as needed
    const threshold = 100;
    const currentScrollPos = window.scrollY;
    if (currentScrollPos !== 0) {
      setVisible(cursorY <= threshold);
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll)
    }
  }, [prevScrollPos])




  return (
    <>
      <nav className={`${styles.nav} ${visible ? '' : `${styles.hidden}`}`}>
        <div className={styles.linkGroup}>
          <a className={`${styles.link} ${isActive === 1 ? styles.active : styles.inactive}`} href="#" name='go-to-top' onClick={clickHandler} >Go to top</a>
          <a className={`${styles.link} ${isActive === 2 ? styles.active : styles.inactive}`} name='about' href="#about" onClick={clickHandler}>About me</a>
          <a className={`${styles.link} ${isActive === 3 ? styles.active : styles.inactive}`} name='work' href="#work" onClick={clickHandler}>My work</a>
          <a className={`${styles.link} ${isActive === 4 ? styles.active : styles.inactive}`} name='footer' href="#footer" onClick={clickHandler}>Socials</a>
        </div>
      </nav>
    </>
  )
}

export default Navbar