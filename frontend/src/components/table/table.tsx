import React, { useState } from "react";
import { IExcelData, ITableProps } from "../../utils/types";
import { Button } from "../ui/button/button";
import styles from './table.module.css';
import { useAppDispatch, useAppSelector } from '../..';
import { addStikerInfo } from "../../services/store/stikerInfoReducer";
import Pagination from "../paginatiom/pagination";

export const TableComponent: React.FC<ITableProps> = ({ header }) => {
  const excelData = useAppSelector(state => state.data.data)
  const dispatch = useAppDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = excelData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleButtonClick = (row: IExcelData) => {
    const { item, color, size, barcode } = row;
    dispatch(addStikerInfo({ barcode, item, color, size }));
  }

  return (
    <>{excelData.length > 5 &&
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={excelData.length}
        paginate={paginate}
      />}
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
          {currentItems && currentItems.map((row: IExcelData, index: number) => (
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
    </>
  );
};
