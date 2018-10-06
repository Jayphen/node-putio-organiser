import { apiClient } from ".."
import { excludedNames } from "../config"

export const getFiles = async () => {
  const fileList = await apiClient.files.getFilesList()
  const files = JSON.parse(fileList).files

  return files
    .filter((file: { name: string }) => !excludedNames.includes(file.name))
    .map(item => item.name)
}
