import { apiClient } from ".."
import { filmsDirname } from "../config"
import { getFiles } from "./getFiles"

export const createOrFindDir = async (
  parentId: number = 0,
  dirName: string = filmsDirname
) => {
  const filesAtParent = await apiClient.files.getFilesList(parentId)

  const existingDir = JSON.parse(filesAtParent).files.find(
    file => file.name === dirName
  )

  let id: number

  if (existingDir) {
    id = existingDir.id
  } else {
    const newDir = await apiClient.files.createFolder(dirName, parentId)
    id = JSON.parse(newDir).file.id
  }

  return id
}
