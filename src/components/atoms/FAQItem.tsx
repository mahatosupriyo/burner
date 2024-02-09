import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from '@/styles/components/atoms/Home/FAQItem.module.scss';

interface FAQProps {
    question: string;
    answer: string;
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const FAQItem: React.FC<FAQProps> = ({ question, answer, isOpen, setIsOpen }) => {
    return (
        <motion.div
            layout
            onClick={() => setIsOpen(!isOpen)}
            className={`${styles['FAQItem']} ${isOpen ? styles.open : ''}`}
        >
            <motion.div className={styles.FAQuestion} layout>
                {question}
            </motion.div>
            {isOpen && (
                <motion.div className={styles.FAQAnswer} layout>
                    {answer}
                </motion.div>
            )}
        </motion.div>
    );
};

export default FAQItem;
