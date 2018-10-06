import { apiClient } from ".."
import { Enriched } from "../torrents/attachTorrentDetails"
import { createOrFindDir } from "./createOrFindDir"

export const moveFiles = async (
  files: Enriched[],
  destinationDirId: number
) => {
  await Promise.all(
    files.map(async file => {
      const dir = await createOrFindDir(
        destinationDirId,
        file.torrentDetails.title
      )
      await apiClient.files.moveFiles([file.id], dir)
    })
  )
}
