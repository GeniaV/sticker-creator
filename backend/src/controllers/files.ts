import { Request, Response } from 'express';
import { clearUploadsFolder } from '../helpers/functions';
import XLSX from 'xlsx';
import { IExcelData } from '../types/types';

export const uploadFile = (req: Request, res: Response) => {

  if (!req.file) {
    return;
  }

  const workbook = XLSX.readFile(req.file.path);
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  const data: IExcelData[] = XLSX.utils.sheet_to_json(worksheet);
  res.json(data);

  clearUploadsFolder();
};
