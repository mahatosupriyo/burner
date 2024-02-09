import React from 'react'
import styles from 'styles/components/molecules/snippets/SubmitForm.module.scss'
import Button from '@/components/atoms/snippets/Button'
import Input from '@/components/atoms/snippets/Input'

const SubmitForm = () => {
    return (
        <div className={styles.SubmitForm}>
            <Button label='proceed to pay'/>
            <Input label='enter your email'/>
        </div>
    )
}

export default SubmitForm
