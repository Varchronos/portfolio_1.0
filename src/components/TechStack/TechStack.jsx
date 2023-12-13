import React from 'react'
import styles from './TechStack.module.css'
const TechStack = () => {
    return (
        <>
            <section className={styles.techContainer} id='techstack'>
                <div className={styles.mainContainer}>
                <h2 className={styles.placeholder}>Tech Stack</h2>
                <div className={styles.techGroup}>
                    <h2 className={styles.heading}>Tech Stack</h2>
                    <div className={styles.linkGroup}>
                        <a href="">javascript</a>
                        <a href="">ReactJS</a>
                        <a href="">NodeJS</a>
                        <a href="">CSS</a>
                        <a href="">Figma</a>
                        <a href="">Supabase</a>
                    </div>
                </div>
                </div>
            </section>
        </>
    )
}

export default TechStack