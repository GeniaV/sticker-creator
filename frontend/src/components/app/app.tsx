import styles from './app.module.css';
import Header from '../header/header';
import Data from '../data/data';
import { useAppSelector } from '../..';
import PdfSticker from '../pdf-sticker/pdf-sticker';
import { Modal } from '../modal/modal';
import { useState } from 'react';

function App() {
  const stickerSize = useAppSelector(state => state.size);
  const stickerInfo = useAppSelector(state => state.info);

  const [isModalOpened, setModalOpened] = useState(false);

  const closeModal = () => {
    setModalOpened(false);
  };

  const handleClick = () => {
    if (!isModalOpened) {
      setModalOpened(true);
    }
  }

  return (
    <main className={styles.main}>
      <Header />
      <Data />
      <div className={styles.actions}>
        <button className={styles.link} onClick={handleClick}>Открыть инструкцию</button>
      </div>
      <div className={styles.sticker_area}>
        {stickerSize.height === '' && stickerSize.lenght === '' ? <p className={styles.text}>Здесь будет ваш стикер</p>
          : stickerInfo.item !== '' && <PdfSticker />}
      </div>
      {isModalOpened &&
        <Modal title="Инструкция" close={closeModal}>
          <article className={styles.modal}>
            <ul className={styles.list}>
              <li className={styles.list_item}>1. Введите размеры стикера в мм. Появится кнопка «Загрузить данные».</li>
              <li className={styles.list_item}>2. Нажмите «Загрузить данные» и выберите в открывшемся окне excel-файл для
                загрузки. Файл подгрузится в таблицу.</li>
              <li className={styles.list_item}>3. Для создания стикера нажмите кнопку «Создать»
                рядом со строкой, на которой расположена информация о стикере. Превью отразится справа на экране.</li>
              <li className={styles.list_item}>4. Для того, чтобы скачать стикер, нажмите кнопку «Скачать»
                под превью. В появившемся окне вы можете выбрать опцию печати или сохранения файла в формате PDF.
                Выберите нужный Вам вариант.</li>
              <li className={styles.list_item}>5. Для очистки таблицы нажмите кнопку «Очистить данные».</li>
            </ul>
          </article>
        </Modal>}
    </main>
  );
}

export default App;
