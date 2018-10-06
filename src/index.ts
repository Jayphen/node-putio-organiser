import { Client } from "put.io-node"
import { PUTIO_CLIENT_ID, seriesDirname } from "./config"
import { createOrFindDir } from "./files/createOrFindDir"
import { getFiles } from "./files/getFiles"
import { formatted } from "./torrents/attachTorrentDetails"

export const apiClient = new Client(PUTIO_CLIENT_ID)

export const init = async () => {
  console.log("starting to scan")
  const enrichedFiles = formatted(await getFiles())
  const filmDirId = await createOrFindDir()
  // const seriesDirId = await createOrFindDir(0, seriesDirname)

  const knownTypes = enrichedFiles.filter(
    file => file.torrentType !== "unknown"
  )
  const films = knownTypes
    .filter(file => file.torrentType === "film")
    .map(file => ({ title: file.torrentDetails.title, id: file.id }))

  // const series = knownTypes
  //   .filter(file => file.torrentType === "series")
  //   .map(file => ({ title: file.torrentDetails.title, id: file.id }))

  const moveFilms = async () => {
    await Promise.all(
      films.map(async film => {
        const filmDir = await createOrFindDir(filmDirId, film.title)
        await apiClient.files.moveFiles([film.id], filmDir)
      })
    )
  }

  await moveFilms()

  // series.forEach(async serie => {
  //   const seriesDir = await createOrFindDir(seriesDirId, serie.title)
  //   apiClient.files.moveFiles([serie.id], seriesDir)
  // })

  return films.length > 0
    ? `Moved films: ${films.map(film => film.title).join(", ")}`
    : "No films to move"
}
