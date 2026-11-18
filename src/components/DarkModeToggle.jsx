import React from 'react'
import styles from '../styles/DarkMode.module.css'

const DarkModeToggle = ({ dark, setDark }) => {
  return (
    <button
      onClick={() => setDark(!dark)}
      className={dark ? styles.dark : styles.light}
    >
      {dark ? 'Toggle Light Mode' : 'Toggle Dark Mode'}
    </button>
  )
}

export default DarkModeToggle