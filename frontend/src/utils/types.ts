import { ReactNode } from "react";

export interface ITableRowData {
  item: string,
  barcode: string,
  color: string,
  size: string,
}

export interface ITableProps {
  header: ITableRowData;
}

export interface ISticker {
  lenght: string,
  height: string,
}

export interface IExcelData {
  item: string,
  barcode: number,
  color: string,
  size: number,
}

export type TExcelDataState = {
  data: IExcelData[],
}

export type TStikerInfo = {
  barcode: number,
  item: string,
  color: string,
  size: number,
}

export type TCode = {
  code: string,
}

export interface IPagination {
  itemsPerPage: number,
  totalItems: number,
  paginate: (number: number) => void,
}

export interface IModal {
  title: string;
  close: () => void;
  children?: ReactNode;
};
