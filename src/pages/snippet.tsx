import CSSFlex from 'components/snippets/CSSFlex'
import React from 'react'
import Footer from 'components/Footer'
import styles from 'styles/pages/snippets.module.scss'
import BoxModel from 'components/snippets/BoxModel'
import SubmitForm from 'components/molecules/snippets/SubmitForm'

const snippet = () => {
  return (
    <>
      <div className={styles.Wraper}>
        <div className={styles.Container}>
          <div className={styles.Hero}>
            <h2 className={styles.HeadingDark}>
              CSS
            </h2>

            <SubmitForm />
          </div>
          <CSSFlex />
          <BoxModel />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default snippet
