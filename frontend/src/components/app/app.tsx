import styles from './app.module.css';
import Header from '../header/header';
import Data from '../data/data';
import { useAppSelector } from '../..';
import PdfSticker from '../pdf-sticker/pdf-sticker';

function App() {
  const stickerSize = useAppSelector(state => state.size);
  const stickerInfo = useAppSelector(state => state.info);
  return (
    <main className={styles.main}>
      <Header />
      <Data />
      <div className={styles.actions}>
        <a href='/' className={styles.link}>Открыть инструкцию</a>
      </div>
      <div className={styles.sticker_area}>
        {stickerSize.height === '' && stickerSize.lenght === '' ? <p className={styles.text}>Здесь будет ваш стикер</p>
          : stickerInfo.item !== '' && <PdfSticker/>}
      </div>
    </main>
  );
}

export default App;
