import { logTotalPrice, logUpdatedSheet } from '../../logger';
import { initializeGoogleAPI } from './initializeGoogleAPI';
import { config } from 'dotenv'
import { getTotalPrice } from '../getTotalPrice';
config()

export const uploadToGoogleSheet = async (fileData: (string | number)[][]) => {
  const spreadsheetId = process.env.SPREAD_SHEET_ID;
  const range = `A1:C${fileData.length}`;
  const valueInputOption = 'USER_ENTERED'

  const { googleSheets } = await initializeGoogleAPI()

  await googleSheets.spreadsheets.values.clear({
    spreadsheetId,
    range: 'A1:ZZ'
  })

  await googleSheets.spreadsheets.values.update({
    spreadsheetId,
    range,
    valueInputOption,
    requestBody: {
      values: fileData,
    },
  })

  const totalPrice = getTotalPrice(fileData)
  const totalRow = [['TOTAL PRICE', totalPrice]]
  const incrementLastCell = fileData.length + 1;
  const lastRow = `A${incrementLastCell}:B${incrementLastCell}`

  await googleSheets.spreadsheets.values.update({
    spreadsheetId,
    range: lastRow,
    valueInputOption,
    requestBody: {
      values: totalRow
    }
  })
  

  logUpdatedSheet()
  logTotalPrice(totalPrice)
  process.exit()
}