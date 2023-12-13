import React from 'react'
import styles from './Footer.module.css'
import behance from '../../assets/icons/behance.svg'
import github from '../../assets/icons/github.svg'
import instagram from '../../assets/icons/instagram.svg'
import twitter from '../../assets/icons/twitter.svg'
import linkedin from '../../assets/icons/linkedin.svg'
let resumelink = 'https://drive.google.com/file/d/11bDPs_lAjcJFIvUtUoA-_3nP-F-IfL1h/view?usp=sharing'
const Footer = () => {
    return (
        <>
            <section className={styles.footerSection} id='footer'>
                <div className={styles.callToAction}>
                    <h1 className={styles.heading}>Lets Connect</h1>
                    <h4 className={styles.tagline}>you can mail me at <span><a href="mailto:dhruv.rajak2002@gmail.com" className={styles.link}>dhruv.rajak2002@gmail.com</a></span></h4>
                    <a href={resumelink} target="_blank" className={styles.emailBtn}>Resume</a>
                </div>
                <footer className={styles.socialsGroup}>
                    <div className={styles.socials}>
                        <a href="https://github.com/Varchronos" target="_blank"><img src={github}></img></a>
                        <a href="https://www.linkedin.com/in/dhruv-rajak-4669341bb/" target="_blank"><img src={linkedin}></img></a>
                        <a href="https://twitter.com/dhruv0b" target="_blank"><img src={twitter}></img></a>
                        <a href="https://www.behance.net/dhruvrajak16" target="_blank"><img src={behance}></img></a>
                        <a href="https://www.instagram.com/dhruv0b/" target="_blank"><img src={instagram}></img></a>
                    </div>
                    <p className={styles.footerText}>or simply drop a message on my socials</p>
                </footer>

            </section>
        </>
    )
}

export default Footer