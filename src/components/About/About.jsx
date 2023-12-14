import React from 'react'
import styles from './About.module.css'
const About = () => {
    return (
        <>
            <section className={styles.aboutSection} id='about'>
                <h2 className={styles.placeholder}>About</h2>
                <div className={styles.aboutGroup}>
                    <div className={styles.textGroup}>
                        <div className={styles.text}>
                            <p className={styles.para}>Hi! I am Dhruv. Almost a year ago I discovered that I love working on the web. And now I am here...</p>
                            <p className={styles.subPara}>I am a full-Stack Web Developer and also design User Interfaces as a hobby. I love to work on projects that have a simple yet intuitive approach to problems.</p>
                        </div>
                        <a href="#footer" className={styles.btn}>Lets connect</a>
                    </div>
                    <div className={styles.image}></div>
                </div>
            </section>
        </>
    )
}

export default About