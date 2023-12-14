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
                    <a href="#footer" className={styles.emailBtn}>email me</a>
                    <a href="#work" className={styles.workBtn}>my work</a>
                </div>
                </div>
            </section>
        </>
    )
}

export default Header