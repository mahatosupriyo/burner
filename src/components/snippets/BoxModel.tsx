// pages/css-demo.tsx

import { useState } from 'react';
import styles from '../../styles/components/molecules/CSS/BoxModel.module.scss';

const BoxModel: React.FC = () => {
  const [content, setContent] = useState<number>(100);
  const [padding, setPadding] = useState<number>(20);
  const [border, setBorder] = useState<number>(2);
  const [margin, setMargin] = useState<number>(10);
  const [borderRadius, setborderRadius] = useState<number>(20);

  return (
    <div className={styles.container}>
      <div className={styles.BoxContainer}>
        <div
          className={styles.box}
          style={{
            height: `${content}px`,
            width: `${content}px`,
            padding: `${padding}px`,
            border: `${border}px solid #CA9EAA`,
            margin: `${margin}px`,
            borderRadius: `${borderRadius}px`,
          }}
        >
          <img height={content} width={content} src="https://ik.imagekit.io/eduburner/Essentials/graphics.png?updatedAt=1705401726062" draggable="false" className={styles.Graphics} />
        </div>
      </div>
      <div className={styles.controls}>
        <div className={styles.Slider}>
          height : 
          <input
            type="range"
            min="10"
            max="200"
            step="1"
            value={content}
            onChange={(e) => setContent(Number(e.target.value))}
          />
        </div>
        <div className={styles.Slider}>
          Padding : 
          <input
            type="range"
            min="0"
            max="50"
            step="1"
            value={padding}
            onChange={(e) => setPadding(Number(e.target.value))}
          />
        </div>
        <div className={styles.Slider}>
          Border : 
          <input
            type="range"
            min="0"
            max="10"
            step="1"
            value={border}
            onChange={(e) => setBorder(Number(e.target.value))}
          />
        </div>
        <div className={styles.Slider}>
          Margin : 
          <input
            type="range"
            min="0"
            max="50"
            step="1"
            value={margin}
            onChange={(e) => setMargin(Number(e.target.value))}
          />
        </div>

        <div className={styles.Slider}>
          Border-Radius : 
          <input
            type="range"
            min="0"
            max="50"
            step="1"
            value={borderRadius}
            onChange={(e) => setborderRadius(Number(e.target.value))}
          />
        </div>
      </div>
    </div>
  );
};

export default BoxModel;
