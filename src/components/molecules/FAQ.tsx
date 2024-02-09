import React from 'react'
import { useState } from 'react';
import { FAQs } from '@/data/FAQ';
import FAQItem from '../atoms/FAQItem';
import styles from '@/styles/components/molecules/FAQ.module.scss'

const FAQ = () => {
    // FAQ Starts
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const handleFAQ = (index: number) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };
    // FAQ Ends
    return (
        <div className={styles.Wraper}>
        <div className={styles.FAQContainer}>
            <div className={styles.HeadingContainer}>
                <h3 className={styles.FAQHeading}>
                    Frequently Asked Questions
                </h3>

                <p className={styles.FAQDescription}>
                    Here are some of the most frequently asked questions on edu burner
                </p>
            </div>

            <div className={styles.FAQs}>
                {FAQs.map((faq, index) => (
                    <FAQItem
                        key={index}
                        question={faq.question}
                        answer={faq.answer}
                        isOpen={openIndex === index}
                        setIsOpen={() => handleFAQ(index)}
                    />
                ))}
            </div>

        </div>
        </div>
    )
}

export default FAQ;
