import { ITableRowData } from '../../utils/types';
import { TableComponent } from '../table/table';
import styles from './data.module.css';

const Data = () => {
  const header: ITableRowData = {
    item: "Артикул",
    barcode: "Штрих-код",
    color: "Цвет",
    size: "Размер",
  };

  return (
    <div className={styles.table}>
      <TableComponent header={header} />
    </div>
  );
}

export default Data;


