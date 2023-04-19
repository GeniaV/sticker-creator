import JsBarcode from 'jsbarcode';
import styles from './ean13.module.css';
import { TCode } from '../../utils/types';
import { useEffect } from 'react';

export const Barcode = ({ code }: TCode) => {

  useEffect(() => {
    JsBarcode("#barcode", `${code}`, {
      format: "ean13", textMargin: 0,
      fontOptions: "bold", fontSize: 25, margin: 0, height: 80, font: 'Roboto'
    });
  }, [code]);

  return (
    <svg className={styles.barcode}
      id="barcode">
    </svg>
  );
}
