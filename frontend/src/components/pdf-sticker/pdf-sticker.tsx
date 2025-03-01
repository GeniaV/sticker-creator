import { useCallback, useRef } from 'react';
import ReactToPrint from 'react-to-print';
import Sticker from '../sticker/sticker';
import { useAppSelector } from '../..';
import { Button } from '../ui/button/button';
import styles from './pdf-sticker.module.css';

const PdfSticker = () => {
  const stickerSize = useAppSelector(state => state.size);
  const stickerInfo = useAppSelector(state => state.info);
  const componentRef = useRef(null);

  const { barcode, item } = stickerInfo;

  const reactToPrintContent = useCallback(() => componentRef.current, []);

  const reactToPrintTrigger = useCallback(() => {
    return <Button text='Скачать' type='button' buttonSize='big' />
  }, []);

  const pageSize = (stickerSize.lenght === '40' && stickerSize.height === '30')
    ? '40mm 30mm'
    : '58mm 40mm';


  return (
    <div>
      <style>{`
        @media print {
          @page {
            size: ${pageSize};
          }
        }
      `}</style>
      <div ref={componentRef} className={styles.print}>
        <Sticker lenght={stickerSize.lenght} height={stickerSize.height} />
      </div>
      <ReactToPrint
        content={reactToPrintContent}
        documentTitle={`${barcode}_${item}`}
        removeAfterPrint
        trigger={reactToPrintTrigger}
      />
    </div>
  );
}

export default PdfSticker;
