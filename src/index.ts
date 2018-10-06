import { Client } from "put.io-node"
import { filmsDirname, PUTIO_CLIENT_ID, seriesDirname } from "./config"
import { createOrFindDir } from "./files/createOrFindDir"
import { getFiles } from "./files/getFiles"
import { getFilesByType } from "./files/getFilesByType"
import { moveFiles } from "./files/moveFiles"
import { formatted } from "./torrents/attachTorrentDetails"

export const apiClient = new Client(PUTIO_CLIENT_ID)

export const init = async () => {
  const enrichedFiles = formatted(await getFiles())

  const films = getFilesByType(enrichedFiles, "film")
  const series = getFilesByType(enrichedFiles, "series")

  const filmDirId = await createOrFindDir(0, filmsDirname)
  const seriesDirId = await createOrFindDir(0, seriesDirname)

  await moveFiles(series, seriesDirId)
  await moveFiles(films, filmDirId)

  return films.length > 0
    ? `Moved films: ${films.map(film => film.torrentDetails.title).join(", ")}`
    : "No films to move"
}
