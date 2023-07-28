"use client"
import React from 'react'
import { ContactBanner } from './ContactBanner'
import { ContactHandler } from './ContactHandler'
import styles from './Contact.module.css'

export const Contact = () => {

  return (
    <>
        <ContactBanner />
        <div className={styles.secondContactBG} style={{zIndex: '-1' }}>
            <div className={styles.csd}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 0L0 0 892.25 114.72 1200 0z" className={styles.sf}></path>
                </svg>
            </div>
            <ContactHandler />
        </div>
    </>
  )
}
