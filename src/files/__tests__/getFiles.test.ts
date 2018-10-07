import { getFiles } from "../getFiles"

jest.mock("../../")
jest.mock("../../config")

describe("get files", () => {
  let files: { name: string; id: number }[]

  beforeEach(async () => {
    files = await getFiles()
  })

  it("gets a list of files", async () => {
    expect(files).toEqual([
      expect.objectContaining({ id: 2 }),
      expect.objectContaining({ name: "some.super.great.file" })
    ])
  })
  it("ignores files contained in config's `excludedNames`", async () => {
    expect(files).not.toEqual([
      expect.objectContaining({ name: "mrpoopybutthole" })
    ])
  })
})
