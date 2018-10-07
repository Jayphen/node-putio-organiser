import { createOrFindDir } from "../createOrFindDir"

jest.mock("../../")

describe("createOrFindDir", () => {
  let dirId: number

  beforeEach(async () => {
    dirId = 0
  })

  it("returns existing directory's id if it exists", async () => {
    dirId = await createOrFindDir(0, "existing name")
    expect(dirId).toBe(2)
  })

  it("creates a new directory and returns its id if the target is not found", async () => {
    dirId = await createOrFindDir(0, "this directory doesn't exist")
    expect(dirId).toBe(999)
  })
})
