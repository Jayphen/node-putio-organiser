import { Client } from "put.io-node"
import { PUTIO_CLIENT_ID } from "./config"
import { getFiles } from "./files/getFiles"

export const apiClient = new Client(PUTIO_CLIENT_ID)

getFiles().then(result => console.log(result))
