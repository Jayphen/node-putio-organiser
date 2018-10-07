/// <reference types="typescript" />

declare module "parse-torrent-name" {
  export interface ParsedTorrentName {
    title: string
    season?: number
    episode?: number
    year?: number
    resolution?: string
    quality?: string
    codec?: string
    audio?: string
    group?: string
    extended?: string
    hardcoded?: string
    widescreen?: string
    website?: string
    excess?: string[]
  }
  export default function ptn(name: string): ParsedTorrentName
}
