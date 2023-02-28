import { logUpdatedSheet } from '../../logger';
import { initializeGoogleAPI } from './initializeGoogleAPI';
import { config } from 'dotenv'
config()

export const uploadToGoogleSheet = async (fileData: (string | number | string[])[][]) => {
  const spreadsheetId = process.env.SPREAD_SHEET_ID;
  const range = `A1:C${fileData.length}`;

  const { googleSheets } = await initializeGoogleAPI()

  await googleSheets.spreadsheets.values.update({
    spreadsheetId,
    range,
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: fileData,
    },
  })
  

  logUpdatedSheet()
  process.exit()
}