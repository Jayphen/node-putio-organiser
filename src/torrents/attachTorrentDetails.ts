import { default as ptn } from "parse-torrent-name"

export type FileType = "unknown" | "film" | "series"
export type File = {
  name: string
  id: number
}
export type Enriched = File & {
  torrentType: FileType
  torrentDetails: { title: string }
}

export const formatted = (files: File[]) => {
  const fileNames = files

  return fileNames.map(file => {
    const torrentDetails = ptn(file.name)
    const torrentType: FileType = torrentDetails.season
      ? "series"
      : torrentDetails.year
        ? "film"
        : "unknown"

    return {
      ...file,
      torrentDetails,
      torrentType
    }
  })
}
