import React from 'react';
import { useAppSelector } from '../..';
import { ISticker } from '../../utils/types';
import { mmToPxConvert } from '../../utils/utils';
import styles from './sticker.module.css';
import { Barcode } from '../ean13/ean13';

const Sticker: React.FC<ISticker> = ({ lenght, height}) => {
  const widthInPx = mmToPxConvert(lenght);
  const heightPx = mmToPxConvert(height);
  const stickerSize = useAppSelector(state => state.size);
  const excelData = useAppSelector(state => state.data.data)
  const stickerInfo = useAppSelector(state => state.info);

  const { barcode, item, color, size } = stickerInfo;

  return (
    <>
      {stickerSize && excelData && stickerInfo &&
        (<div style={{ width: `${widthInPx}px`, height: `${heightPx}px` }} className={styles.area}>
          {barcode !== 111111111111 && <section className={styles.barcode}>
            <Barcode code={barcode.toString()}/>
          </section>}
          <section className={styles.info}>
            <p className={styles.item_text}>Артикул: {item}</p>
            <p className={styles.color_text}>Цвет: {color}</p>
            <p className={styles.size_text}>Размер: {size}</p>
          </section>
        </div>)}
    </>
  );
}

export default Sticker;



