import React from 'react'
import styles from './Header.module.css'
const Header = () => {
    return (
        <>
            <section className={styles.landingPage} id='header'>
                <div className={styles.headGroup}>
                <h1 className={styles.heading}>I am A Developer</h1>
                <h4 className={styles.tagline}>Always learning something new, every week <span>(take breaks)</span></h4>
                <div className={styles.homeButtons}>
                    <button className={styles.emailBtn}><a href="#footer" className={styles.link}>email me</a></button>
                    <button className={styles.workBtn}><a href="#work" className={styles.link}>my work</a></button>
                </div>
                </div>
            </section>
        </>
    )
}

export default Header