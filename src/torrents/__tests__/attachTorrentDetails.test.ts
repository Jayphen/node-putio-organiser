import { enrich, Enriched } from "../attachTorrentDetails"

const seriesDir = {
  content_type: "application/x-directory",
  crc32: null,
  created_at: "2018-05-15T11:02:53",
  extension: null,
  file_type: "FOLDER",
  first_accessed_at: null,
  folder_type: "REGULAR",
  icon: "https://api.put.io/images/file_types/folder.png",
  id: 544391243,
  is_hidden: false,
  is_mp4_available: false,
  is_shared: false,
  name: "American.Vandal.S02E08.1080p.WEB.x264-STRiFE[rarbg]",
  opensubtitles_hash: null,
  parent_id: 0,
  screenshot: null,
  size: 3375569439
}

const movieDir = {
  content_type: "application/x-directory",
  crc32: null,
  created_at: "2018-08-15T16:28:29",
  extension: null,
  file_type: "FOLDER",
  first_accessed_at: null,
  folder_type: "REGULAR",
  icon: "https://api.put.io/images/file_types/folder.png",
  id: 564788002,
  is_hidden: false,
  is_mp4_available: false,
  is_shared: false,
  name: "Clouds of Sils Maria (2014) [1080p]",
  opensubtitles_hash: null,
  parent_id: 0,
  screenshot: null,
  size: 1986033350
}

const miscDir = {
  content_type: "application/x-directory",
  crc32: null,
  created_at: "2018-04-24T16:59:07",
  extension: null,
  file_type: "FOLDER",
  first_accessed_at: null,
  folder_type: "REGULAR",
  icon: "https://api.put.io/images/file_types/folder.png",
  id: 539860435,
  is_hidden: false,
  is_mp4_available: false,
  is_shared: false,
  name:
    "[FreeTutorials.Us] python-for-data-science-and-machine-learning-bootcamp",
  opensubtitles_hash: null,
  parent_id: 0,
  screenshot: null,
  size: 4460762628
}

const seriesTorrentDetail = {
  season: 2,
  episode: 8,
  resolution: "1080p",
  codec: "x264",
  group: "STRiFE[rarbg]",
  title: "American Vandal",
  excess: "WEB"
}

const moviesTorrentDetail = {
  year: 2014,
  resolution: "1080p",
  title: "Clouds Of Sils Maria",
  excess: "[]"
}

const miscTorrentDetail = {
  group: "bootcamp",
  website: "FreeTutorials.Us",
  title: "Python-for-data-science-and-machine-learning"
}

const files = [seriesDir, movieDir, miscDir]

describe("enrich", () => {
  let enrichedFiles: Enriched[]

  beforeEach(() => {
    enrichedFiles = enrich(files)
  })
  it("adds a `torrentDetails` object to each file", () => {
    expect(enrichedFiles).toEqual([
      expect.objectContaining({ torrentDetails: seriesTorrentDetail }),
      expect.objectContaining({ torrentDetails: moviesTorrentDetail }),
      expect.objectContaining({ torrentDetails: miscTorrentDetail })
    ])
  })
  it("adds a `torrentType`", () => {
    expect(enrichedFiles).toEqual([
      expect.objectContaining({ torrentType: "series" }),
      expect.objectContaining({ torrentType: "film" }),
      expect.objectContaining({ torrentType: "unknown" })
    ])
  })
})
