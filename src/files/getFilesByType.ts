import { Enriched, FileType } from "../torrents/attachTorrentDetails"

export const getFilesByType = (
  enrichedFiles: Enriched[],
  fileType: FileType
) => {
  const knownTypes = enrichedFiles.filter(
    file => file.torrentType !== "unknown"
  )

  return knownTypes.filter(file => file.torrentType === fileType)
}
