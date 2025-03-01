import React, { useEffect } from 'react';
import JsBarcode from 'jsbarcode';
import styles from './barcode128.module.css';

interface Barcode128Props {
  code: string;
}

const isValidCode128 = (code: string) => {
  return code.length > 0;
};

export const Barcode128: React.FC<Barcode128Props> = ({ code }) => {
  useEffect(() => {
    if (isValidCode128(code)) {
      JsBarcode("#barcode128", code, {
        format: "CODE128",
        textMargin: 0,
        fontOptions: "bold",
        fontSize: 20,
        margin: 0,
        height: 100,
        font: 'Roboto',
      });
    }
  }, [code]);

  return (
    <>
      {isValidCode128(code) ? (
        <svg className={styles.barcode} id="barcode128" />
      ) : (
        <h2 className={styles.err}>Ошибка в&nbsp;Штрих-коде</h2>
      )}
    </>
  );
};
