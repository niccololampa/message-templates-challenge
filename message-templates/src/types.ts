export interface GameInfo {
  id: string
  live: boolean
  gameName: string
  shortDesc: string
  longDesc: string
  genres: string[]
  image: string
  videoThumb: string
  os: OS[]
  nfts: boolean
  claimed: boolean
  publisher: string
  protocol: string
  userLikes: GameUser[]
  trailerLink: string
  updates: GameUpdate[]
  slideShowImages: SlideShowImage[]
  coverPhoto: string
  gif?: string
}

export interface SlideShowImage {
  original: string
  originalHeight: number
  thumbnail: string
  thumbnailHeight: number
}

export interface GameUpdate {
  id: string
  image: string
  date: string
  title: string
  summary: string
}

export interface MessageTemplate {
  id: string
  thumbnail: string
  name: string
  createdBy: string
  date: string
  sent: number
  opened: number
  viewed: number
  liked: number
  clicked: number
  replied: number
}

export interface GameFilter {
  search: string
  genre: string
  showLive: boolean
}

export interface GameUser {
  userName: string
  userImage: string
}

export type OS = "windows" | "mac" | "linux"

export type ModalTypes = "new" | "rename" | "delete" | ""
