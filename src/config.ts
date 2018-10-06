import { config } from "dotenv"
config()

export const PUTIO_CLIENT_ID: string = process.env.PUTIO_CLIENT_ID || ""

export const seriesDirname = "-=- TV Series -=-"
export const filmsDirname = "-=- Films -=-"
export const sharedItems = "items shared with you"
export const excludedNames = [seriesDirname, filmsDirname, sharedItems]
