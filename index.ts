// import * as XLSX from 'xlsx'
// import puppeteer from 'puppeteer'

import { bootstrap } from "./src";
import XLSX from 'xlsx-js-style'


  // let row = [
  //   { v: "ad: 24", t: "s", s: { font: { name: "Courier", sz: 24 } } },
  //   { v: "bold & color", t: "s", s: { font: { bold: true, color: { rgb: "#FF0000" } } } },
  //   { v: "fill: color", t: "s", s: { fill: { fgColor: { rgb: "#E9E9E9" } } } },
  //   { v: "line\nbreak", t: "s", s: { alignment: { wrapText: false } } },
  // ];


  // const workSheet = XLSX.utils.aoa_to_sheet([row], {cellStyles: true})

  // const workBook = XLSX.utils.book_new()

  // XLSX.utils.book_append_sheet(workBook, workSheet, 'Sheet 1')

  // XLSX.writeFile(workBook, './src/sheets/test.xlsx')


bootstrap()