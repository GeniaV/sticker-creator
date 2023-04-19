import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { getDataFromExcelTable } from '../../utils/api';
import { Button } from '../ui/button/button';
import styles from './upload-file.module.css';
import { useAppDispatch, useAppSelector } from '../..';
import { uploadData, removeData } from '../../services/store/excelFileSlice';
import { IExcelData, ISticker } from '../../utils/types';
import { addStikerSize, deleteStickerSize } from '../../services/store/stickerSizrSlice';
import { deleteStickerInfo } from '../../services/store/stikerInfoReducer';

enum ButtonText {
  Upload = 'Загрузить данные',
  Remove = 'Очистить данные'
}

export const UploadFile = ({lenght, height}: ISticker) => {
  const dispatch = useAppDispatch();
  const filePicker = useRef<any>();

  const excelData = useAppSelector(state => state.data.data)

  const [button, setButton] = useState<string>();

  useEffect(() => {
    if(excelData.length === 0) {
      setButton(ButtonText.Upload)
    } else {
      setButton(ButtonText.Remove);
    }
  }, [excelData])


  const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {

    if (!event.target.files![0]) {
      return;
    }

    const formData = new FormData();
    formData.append('excelFile', event.target.files![0]);

    dispatch(addStikerSize({ height: height, lenght: lenght }));
    dispatch(uploadData(await getDataFromExcelTable(formData) as IExcelData[]))
  }

  const handeleClick = async() => {
    if(excelData.length === 0 && button === ButtonText.Upload) {
      filePicker.current.click()
    }

    if(excelData.length !== 0 && button === ButtonText.Remove) {
      dispatch(removeData());
      dispatch(deleteStickerSize());
      dispatch(deleteStickerInfo());
    }
  }

  return (
    <>
      <input className={styles.hidden} type='file' onChange={handleChange} accept=".xls,.xlsx" ref={filePicker} />
      {lenght && height && <Button onClick={() => handeleClick()} text={button} type='submit' buttonSize='big' />}
    </>
  )
}
