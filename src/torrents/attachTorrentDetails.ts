import { default as ptn } from "parse-torrent-name"

export const formatted = (files: { name: string; id: number }[]) => {
  const fileNames = files

  return fileNames.map(file => {
    const torrentDetails = ptn(file.name)
    const torrentType: string = torrentDetails.season
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
