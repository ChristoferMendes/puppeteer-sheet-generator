import XLSX from 'xlsx-js-style'
import { ItemsType } from './scraptItems/types';

export const generateSheet = (arrayOfArrays: ItemsType[]) => {
  
  if (!arrayOfArrays) return;

  const workSheet = XLSX.utils.aoa_to_sheet(arrayOfArrays, {cellStyles: true})

  const workBook = XLSX.utils.book_new()

  XLSX.utils.book_append_sheet(workBook, workSheet, 'Sheet 1')

  XLSX.writeFile(workBook, 'pc.xlsx')
  
  console.log('====================================');
  console.log('GENERATED');
  console.log('====================================');
}