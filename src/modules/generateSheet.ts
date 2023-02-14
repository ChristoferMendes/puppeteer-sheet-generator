import XLSX from 'xlsx-js-style'

export const generateSheet = (arrayOfObject: any[] | undefined) => {
  
  if (!arrayOfObject) return;

  const workSheet = XLSX.utils.aoa_to_sheet([arrayOfObject], {cellStyles: true})

  const workBook = XLSX.utils.book_new()

  XLSX.utils.book_append_sheet(workBook, workSheet, 'Sheet 1')

  XLSX.writeFile(workBook, 'testing.xlsx')
  
}