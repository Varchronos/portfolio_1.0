import React from 'react'
import styles from './MyWork.module.css'
const MyWork = () => {
    return (
        <>
            <section className={styles.workSection} id='work'>
                <h2 className={styles.placeholder}>My Work</h2>
                <div className={styles.workGroup}>
                    <h2 className={styles.heading}>My work</h2>
                    <div className={styles.linkGroup}>
                        <a href="https://github.com/Varchronos/library_management_system_backend" target="_blank" className={`${styles.image} ${styles.project1}`}>Library management System</a>
                        <a href="https://github.com/arushpanwar/bechdey" target="_blank" className={`${styles.image} ${styles.project2}`}>Bechdey</a>
                        <a href="https://frontendmentor-tip-calculator-app.vercel.app/" target="_blank" className={`${styles.image} ${styles.project3}`}>Tip Calculator</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MyWork