import React from 'react'
import styles from './headings.module.css'


export const Heading4 = (props) => {
    return (
        <>
            <h4 className={`${styles.h4} ${styles.white}`}>{props.children}</h4>
        </>
    )
}
