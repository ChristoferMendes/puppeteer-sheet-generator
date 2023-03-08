import { logUpdatedSheet } from '../../logger';
import { initializeGoogleAPI } from './initializeGoogleAPI';
import { config } from 'dotenv'
import { getTotalPrices } from '../getTotalPrice';
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

  const totalPrice = getTotalPrices(fileData)
  const totalRow = [['TOTAL PRICE', totalPrice]]
  const lastRow = `A${fileData.length + 1}:B${fileData.length + 1}`

  await googleSheets.spreadsheets.values.update({
    spreadsheetId,
    range: lastRow,
    valueInputOption,
    requestBody: {
      values: totalRow
    }
  })
  

  logUpdatedSheet()
  console.log('TOTAL:', totalPrice)
  process.exit()
}