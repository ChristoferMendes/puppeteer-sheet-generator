import { google } from "googleapis";
import path from 'path'
const { auth: { GoogleAuth } } = google;

export const initializeGoogleAPI = async () => {
  const __dirname = path.resolve();
  const file = __dirname + '/src/auth/credentials.json'

  const auth = new GoogleAuth({
    keyFile: file,
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
