export const apiClient = {
  files: {
    getFilesList: jest
      .fn()
      .mockResolvedValue('{"files":[{"id":2,"name":"existing name"}]}'),
    createFolder: jest.fn(
      (name: string) => `{"file":{"name":"${name}","id":999}}`
    )
  }
}
