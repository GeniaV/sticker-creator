import React from 'react';
import { useAppSelector } from '../..';
import { ISticker } from '../../utils/types';
import { mmToPxConvert } from '../../utils/utils';
import styles from './sticker.module.css';
import { Barcode } from '../ean13/ean13';
import { useMarketplace } from '../../context/context';
import { Barcode128 } from '../code128/barcode128';

const Sticker: React.FC<ISticker> = ({ lenght, height }) => {
  const widthInPx = mmToPxConvert(lenght);
  const heightPx = mmToPxConvert(height);
  const stickerSize = useAppSelector(state => state.size);
  const excelData = useAppSelector(state => state.data.data)
  const stickerInfo = useAppSelector(state => state.info);
  const { marketplace } = useMarketplace();

  const { barcode, item, color, size } = stickerInfo;

  const isSmall = (lenght === '40' && height === '30');

  if (!stickerSize || !excelData || !stickerInfo) return null;

  return (
    <div style={{ width: `${widthInPx}px`, height: `${heightPx}px` }} className={styles.area}>
      {barcode !== 111111111111 && (
        <section className={isSmall ? styles.barcode_new : styles.barcode}>
          {marketplace === 'WB' ? (
            <Barcode code={barcode.toString()} />
          ) : (
            <Barcode128 code={barcode.toString()} />
          )}
        </section>
      )}
      <section className={styles.info}>
        {marketplace === 'Ozon' ? (
          <>
            <p className={isSmall ? styles.color_text_new : styles.color_text}>{color}</p>
          </>
        ) : (
          <>
            <p className={isSmall ? styles.item_text_new : styles.item_text}>Артикул: {item}</p>
            <p className={isSmall ? styles.color_text_new : styles.color_text}>Цвет: {color}</p>
          </>
        )}
        {!isSmall && marketplace !== 'Ozon' && <p className={styles.size_text}>Размер: {size}</p>}
      </section>
    </div>
  );
};

export default Sticker;



