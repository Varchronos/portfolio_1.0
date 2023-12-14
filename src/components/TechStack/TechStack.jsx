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
                        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target='_blank'>javascript</a>
                        <a href="https://react.dev/" target='_blank'>ReactJS</a>
                        <a href="https://nodejs.org/en/about" target='_blank'>NodeJS</a>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target='_blank'>CSS</a>
                        <a href="https://www.figma.com/" target='_blank'>Figma</a>
                        <a href="https://supabase.com/" target='_blank'>Supabase</a>
                    </div>
                </div>
                </div>
            </section>
        </>
    )
}

export default TechStack