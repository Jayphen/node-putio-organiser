import { Client } from "put.io-node"
import { filmsDirname, PUTIO_CLIENT_ID, seriesDirname } from "./config"
import { createOrFindDir } from "./files/createOrFindDir"
import { getFiles } from "./files/getFiles"
import { getFilesByType } from "./files/getFilesByType"
import { moveFiles } from "./files/moveFiles"
import { enrich } from "./torrents/attachTorrentDetails"

export const apiClient = new Client(PUTIO_CLIENT_ID)

export const init = async () => {
  const enrichedFiles = enrich(await getFiles())

  const films = getFilesByType(enrichedFiles, "film")
  const series = getFilesByType(enrichedFiles, "series")

  const filmDirId = await createOrFindDir(0, filmsDirname)
  const seriesDirId = await createOrFindDir(0, seriesDirname)

  await moveFiles(series, seriesDirId)
  await moveFiles(films, filmDirId)

  const movedFiles = [...films, ...series]
  return movedFiles.length > 0
    ? `Moved files: ${movedFiles
        .map(file => file.torrentDetails.title)
        .join(", ")}`
    : "No files to move"
}
