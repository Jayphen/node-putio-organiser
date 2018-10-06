import { Client } from "put.io-node"
import { PUTIO_CLIENT_ID } from "./config"

const apiClient = new Client(PUTIO_CLIENT_ID)

const info = () => apiClient.account.getAccountInfo()

const result = async () => {
  const infos = await info()

  console.log(infos)
}

result()
