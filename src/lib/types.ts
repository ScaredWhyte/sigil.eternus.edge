export interface Song {
  slug: string
  title: string
  tone: string
  themes: string[]
  sigil: string
  audio: string | null
  forthcoming?: boolean
  formOnly?: boolean
  notes?: string
  mood?: string
  movement?: string
  writtenBy: string
  lyrics: string
}
