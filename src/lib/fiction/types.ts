export interface StoryBook {
  number: string
  title: string
  text: string
}

export interface StoryPart {
  title: string
  subtitle: string
  range: string
  epigraph: string
  books: StoryBook[]
}

export interface Story {
  slug: string
  title: string
  subtitle: string
  dedication: string
  epigraph: string
  epigraphSource: string
  authorsNote: string
  themes: string[]
  cover: string
  writtenBy: string
  parts: StoryPart[]
}

export interface Character {
  name: string
  age?: string
  description: string
  voice: string
}

export interface Episode {
  slug: string
  title: string
  subtitle: string
  logline: string
  synopsis: string
  script: string
}

export interface Show {
  slug: string
  title: string
  tagline: string
  logline: string
  format: string
  comparables: string
  tone: string[]
  cover: string
  characters: Character[]
  writtenBy: string
  episodes: Episode[]
}
