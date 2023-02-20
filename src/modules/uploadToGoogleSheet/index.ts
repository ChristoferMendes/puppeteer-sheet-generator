import { google } from 'googleapis'

export const uploadToGoogleSheet = async (fileData: (string | number | string[])[][]) => {
  const { auth: { GoogleAuth }} = google;

  const auth = new GoogleAuth({
    keyFile: '/home/dev/workspace/projects/puppeteer-sheet-generator/src/auth/credentials.json',
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
  })

  const client = await auth.getClient();

  const googleSheets = google.sheets({
    version: 'v4',
    auth: client
  })

  const spreadsheetId = "1Ih4EbfV6VjW3J3ltQYdFDnE7ZyxW9K5anVIyjTqRdK4"
  const range = `A1:C${fileData.length}`;

  await googleSheets.spreadsheets.values.update({
    spreadsheetId,
    range,
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: fileData,
    },
  })
  

  console.log('SHEET UPDATED!')
  process.exit()
}