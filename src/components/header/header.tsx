import styles from './header.module.css';
import logo from "../../images/logo.png";
import { UploadFile } from '../upload-file/upload-file';
import { useState } from 'react';

function Header() {
  const [lengthInput, setlengthInput] = useState('');
  const [heightInput, setheightInput] = useState('');

  return (
    <header className={styles.header}>
      <img src={logo} alt='Логотип' className={styles.logo} />
      <h1 className={styles.desc}>Сервис по&nbsp;созданию <b>стикеров</b> со&nbsp;штрих-кодами <b>(стандарт EAN-13)</b> в&nbsp;формате <b>PDF</b> на&nbsp;основе
        заданных параметров для <b>оклейки товара</b></h1>
      <div className={styles.info}>
        <div>
          <div className={styles.size_cont}>
            <p className={styles.text}>Размер (мм):</p>
            <div className={styles.input_cont}>
              <input type='number' min={1} max={100} className={styles.input} value={lengthInput} onChange={e => setlengthInput(e.target.value)} />
              <p className={styles.caption}>длина</p>
            </div>
            <div className={styles.input_cont}>
              <input type='number' min={1} max={150} className={styles.input} value={heightInput} onChange={e => setheightInput(e.target.value)} />
              <p className={styles.caption}>высота</p>
            </div>
          </div>
        </div>
        <UploadFile lenght={lengthInput} height={heightInput}/>
      </div>
    </header>
  );
}

export default Header;

