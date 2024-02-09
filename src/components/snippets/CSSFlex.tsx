// pages/css-demo.tsx

import { useState } from 'react';
import styles from '../../styles/components/molecules/CSS/CSSFlex.module.scss';
import Head from 'next/head';

const CSSFlex: React.FC = () => {
  const [flexDirection, setFlexDirection] = useState<'row' | 'column' | 'row-reverse' | 'column-reverse'>('row');
  const [alignItems, setAlignItems] = useState<string>('center');
  const [justifyContent, setJustifyContent] = useState<string>('center');

  const handleFlexDirectionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFlexDirection(event.target.value as 'row' | 'column' | 'row-reverse' | 'column-reverse');
  };

  const handleAlignItemsChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setAlignItems(event.target.value);
  };

  const handleJustifyContentChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setJustifyContent(event.target.value);
  };

  return (
    <>

      <Head>
        <title>Burner Snippets</title>
      </Head>

      <div className={styles.Container}>
        <div className={styles.FlexContainer} style={{ flexDirection, alignItems, justifyContent }}>
          <div className={styles.box}>
            <img className={styles.Sticker} src="https://ik.imagekit.io/eduburner/Stickers/1.svg?updatedAt=1705347962978" draggable="false" />
          </div>
          <div className={styles.box}>
            <img className={styles.Sticker} src="https://ik.imagekit.io/eduburner/Stickers/3.svg?updatedAt=1705347962932" draggable="false" />
          </div>
          <div className={styles.box}>
            <img className={styles.Sticker} src="https://ik.imagekit.io/eduburner/Stickers/4.svg?updatedAt=1705347962926" draggable="false" />
          </div>
          <div className={styles.box}>
            <img className={styles.Sticker} src="https://ik.imagekit.io/eduburner/Stickers/2.svg?updatedAt=1705347962898" draggable="false" />
          </div>
        </div>
        <div className={styles.controls}>
          <label className={styles.DropDown}>
            Flex-Direction:{' '}
            <select className={styles.Select} value={flexDirection} onChange={handleFlexDirectionChange}>
              <option value="row">Row</option>
              <option value="column">Column</option>
              <option value="row-reverse">Row-Reverse</option>
              <option value="column-reverse">Column-Reverse</option>

            </select>

          </label>
          <label className={styles.DropDown}>
            Align-Items:{' '}
            <select className={styles.Select} value={alignItems} onChange={handleAlignItemsChange}>
              <option value="flex-start">flex-Start</option>
              <option value="flex-end">flex-End</option>
              <option value="center">Center</option>
              <option value="stretch">Stretch</option>
            </select>

          </label>
          <label className={styles.DropDown}>
            Justify-content:{' '}
            <select className={styles.Select} value={justifyContent} onChange={handleJustifyContentChange}>
              <option value="flex-start">flex-Start</option>
              <option value="flex-end">flex-End</option>
              <option value="center">Center</option>
              <option value="space-between">Space-Between</option>
              <option value="space-around">Space-Around</option>
            </select>

          </label>

          <div className={styles.cssCode}>
            <pre className={styles.Code}>
              {`.flex-Container {
        display: flex;
        flex-direction: ${flexDirection};
        align-items: ${alignItems};
        justify-content: ${justifyContent};
}`}
            </pre>
          </div>
        </div>

      </div>
    </>
  );
};

export default CSSFlex;
