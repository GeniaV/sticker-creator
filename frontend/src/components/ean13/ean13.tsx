import JsBarcode from 'jsbarcode';
import styles from './ean13.module.css';
import { TCode } from '../../utils/types';
import { useEffect } from 'react';
import { isValidBarcode } from '../../utils/utils';

export const Barcode = ({ code }: TCode) => {

  useEffect(() => {
    if (isValidBarcode(code)) {
      JsBarcode("#barcode", `${code}`, {
        format: "ean13", textMargin: 0,
        fontOptions: "bold", fontSize: 25, margin: 0, height: 80, font: 'Roboto'
      });
    }
  }, [code]);

  return (
    <>
      {isValidBarcode(code) ?
        (<svg className={styles.barcode}
          id="barcode">
        </svg>) :<h2 className={styles.err}>Ошибка в&nbsp;Штрих-коде</h2>
        }
    </>
  );
}
