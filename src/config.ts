import { config } from "dotenv"
config()

export const PUTIO_CLIENT_ID: string = process.env.PUTIO_CLIENT_ID || ""
