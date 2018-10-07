import { titleCase } from "../utils"

describe("titleCase", () => {
  const str = "hello there friends"

  it("titleCases strings", () => {
    expect(titleCase(str)).toBe("Hello There Friends")
  })
})
