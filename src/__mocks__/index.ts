export const apiClient = {
  files: {
    getFilesList: jest
      .fn()
      .mockResolvedValue(
        '{"files":[{"id":2,"name":"existing name"},{"id":3,"name":"mrpoopybutthole"},{"id":4,"name":"some.super.great.file"}]}'
      ),
    createFolder: jest.fn(
      (name: string) => `{"file":{"name":"${name}","id":999}}`
    )
  }
}
