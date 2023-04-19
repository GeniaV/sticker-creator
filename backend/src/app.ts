import express from 'express';
import cors from 'cors';
import multer from 'multer';
import XLSX from 'xlsx';
import { IExcelData } from './types/types';

const app = express();

app.use(cors({ origin: '*' }));

const upload = multer({ dest: 'uploads/' });

app.use(express.static('public'));

app.post('/upload', upload.single('excelFile'), (req, res) => {

  upload.single('excelFile')
  if (!req.file) {
    return;
  }

  const workbook = XLSX.readFile(req.file.path);
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  const data: IExcelData[] = XLSX.utils.sheet_to_json(worksheet);
  res.json(data);
}
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
