import React from "react";
import { IExcelData, ITableProps } from "../../utils/types";
import { Button } from "../ui/button/button";
import styles from './table.module.css';
import { useAppDispatch, useAppSelector } from '../..';
import { addStikerInfo } from "../../services/store/stikerInfoReducer";

const TableComponent: React.FC<ITableProps> = ({ header }) => {
  const excelData = useAppSelector(state => state.data.data)
  const dispatch = useAppDispatch();

  const handleButtonClick = (row: IExcelData) => {
    const { item, color, size, barcode } = row;
    dispatch(addStikerInfo({ barcode, item, color, size}));
  }

  return (
    <table>
      <thead>
        <tr>
          <th className={styles.name}>{header.item}</th>
          <th className={styles.name}>{header.barcode}</th>
          <th className={styles.name}>{header.color}</th>
          <th className={styles.name}>{header.size}</th>
        </tr>
      </thead>
      <tbody>
        {excelData && excelData.map((row: IExcelData, index: number) => (
          <tr key={index}>
            <td className={styles.data}>{row.item}</td>
            <td className={styles.data}>{row.barcode}</td>
            <td className={styles.data}>{row.color}</td>
            <td className={styles.data}>{row.size}</td>
            <td>
              <Button text='Создать' type='button' buttonSize='small' onClick={() => handleButtonClick(row)} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
