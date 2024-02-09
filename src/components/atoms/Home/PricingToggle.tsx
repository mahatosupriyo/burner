import React from 'react';
import styles from '@/styles/components/atoms/Home/Toggle.module.scss'

interface PricingToggleProps {
  onToggle: (isYearly: boolean) => void;
}

const PricingToggle: React.FC<PricingToggleProps> = ({ onToggle }) => {
  const [isYearly, setIsYearly] = React.useState(false);

  const handleToggle = () => {
    setIsYearly((prevIsYearly) => !prevIsYearly);
    onToggle(!isYearly);
  };

  return (
    <div className={styles.toggleContainer}>
      <label className={styles.toggleLabel}>
        <span className={styles.toggleText}>Monthly</span>
        <div className={styles.toggleSwitch}>
          <input
            type="checkbox"
            checked={isYearly}
            onChange={handleToggle}
            className={styles.toggleInput}
          />
          <span className={styles.toggleSlider}></span>
        </div>
        <span className={styles.toggleText}>Yearly</span>
      </label>
    </div>
  );
};

export default PricingToggle;
