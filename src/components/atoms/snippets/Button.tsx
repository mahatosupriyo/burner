import React from 'react'
import styles from 'styles/components/atoms/snippets/Buttons.module.scss'

interface ButtonBadgeProps {
    label: string;
}

const Button: React.FC<ButtonBadgeProps> = ({ label }) => {
  return (
    <button className={styles.Button}>
      {label}
    </button>
  )
}

export default Button;
