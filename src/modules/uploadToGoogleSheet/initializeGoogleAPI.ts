import { google } from "googleapis";

const { auth: { GoogleAuth }} = google;

export const initializeGoogleAPI = async () => {
  const auth = new GoogleAuth({
    keyFile: '/home/dev/workspace/projects/puppeteer-sheet-generator/src/auth/credentials.json',
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
  })

  const client = await auth.getClient();
  const version = 'v4'

  const googleSheets = google.sheets({
    version,
    auth: client
  })

  return { googleSheets }
}
