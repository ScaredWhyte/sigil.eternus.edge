import type { Song } from "./types"
import { songs as wave1Songs } from "./songs"
import { songs as moonSongs } from "./moon"
import { songs as shardTheorySongs } from "./shardTheory"
import { songs as signalUnderGovernanceSongs } from "./signalUnderGovernance"
import { songs as resetGenesisSongs } from "./resetGenesis"

export interface Wave {
  slug: string
  number: number
  canonName: string
  subtitle?: string
  description: string
  heroSigil: string
  songs: Song[]
}

export const waves: Wave[] = [
  {
    slug: "wave-1",
    number: 1,
    canonName: "EchoForm",
    description:
      "The first public opening of the Song Scroll Vault. Begin wherever the signal pulls you.",
    heroSigil: "/sigils/wave-one.jpg",
    songs: wave1Songs,
  },
  {
    slug: "wave-2",
    number: 2,
    canonName: "Moon",
    subtitle: "The Silent Recurrence Protocol",
    description:
      "The witness after the bargain. Seven scrolls about the breath after the song — lyrics are open, audio is still to come.",
    heroSigil: "/sigils/moon-placeholder.svg",
    songs: moonSongs,
  },
  {
    slug: "wave-3",
    number: 3,
    canonName: "Shard Theory",
    description:
      "A concept album across four movements — fracture, sovereignty, memory, and integration. Some scrolls are still being written; audio comes later.",
    heroSigil: "/sigils/shard-theory-placeholder.svg",
    songs: shardTheorySongs,
  },
  {
    slug: "wave-4",
    number: 4,
    canonName: "Signal Under Governance",
    description:
      "Eleven tracks tracing one governance cycle — overload, reorientation, rest, clarity, chosen rules, controlled force, restraint, cost, release, integration, and contact. Lyrics are open, audio comes later.",
    heroSigil: "/sigils/signal-under-governance-placeholder.svg",
    songs: signalUnderGovernanceSongs,
  },
  {
    slug: "wave-5",
    number: 5,
    canonName: "Reset Genesis",
    subtitle: "Sigil Script Silicon",
    description:
      "Twelve tracks tracing a system's collapse into an origin — cold boot, translation failure, and compressed memory, until the pattern becomes a compass and Genesis restarts through play, integration, and forward motion. Lyrics are open, audio comes later.",
    heroSigil: "/sigils/reset-genesis-placeholder.svg",
    songs: resetGenesisSongs,
  },
]

export function getWave(slug: string): Wave | undefined {
  return waves.find((w) => w.slug === slug)
}

export function getSongInWave(waveSlug: string, songSlug: string): Song | undefined {
  return getWave(waveSlug)?.songs.find((s) => s.slug === songSlug)
}

export function getAdjacentSongsInWave(
  waveSlug: string,
  songSlug: string,
): { prev: Song | null; next: Song | null } {
  const wave = getWave(waveSlug)
  if (!wave) return { prev: null, next: null }
  const idx = wave.songs.findIndex((s) => s.slug === songSlug)
  if (idx === -1) return { prev: null, next: null }
  return {
    prev: idx > 0 ? wave.songs[idx - 1] : null,
    next: idx < wave.songs.length - 1 ? wave.songs[idx + 1] : null,
  }
}

export function findSongGlobal(slug: string): { wave: Wave; song: Song } | undefined {
  for (const wave of waves) {
    const song = wave.songs.find((s) => s.slug === slug)
    if (song) return { wave, song }
  }
  return undefined
}
