import React from 'react'
import styles from 'styles/components/atoms/snippets/Input.module.scss'

interface InputBarProps {
    label: string;
}

const Input: React.FC<InputBarProps> = ({ label }) => {
    return (
        <input className={styles.InputBar} placeholder={label}/>
    )
}

export default Input
