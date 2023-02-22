import { logUpdatedSheet } from '../../logger';
import { initializeGoogleAPI } from './initializeGoogleAPI';

export const uploadToGoogleSheet = async (fileData: (string | number | string[])[][]) => {
  const spreadsheetId = "1Ih4EbfV6VjW3J3ltQYdFDnE7ZyxW9K5anVIyjTqRdK4"
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