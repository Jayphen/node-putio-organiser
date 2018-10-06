import { apiClient } from ".."
import { excludedNames } from "../config"

export const getFiles = async (parentId: number = 0) => {
  const fileList = await apiClient.files.getFilesList(parentId)
  const files = JSON.parse(fileList).files

  return files.filter(
    (file: { name: string; id: number }) => !excludedNames.includes(file.name)
  )
}
