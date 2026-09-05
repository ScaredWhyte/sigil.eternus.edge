import { create } from "zustand"
import { findSongGlobal } from "../lib/waves"

interface PlayerState {
  slug: string | null
  playing: boolean
  currentTime: number
  duration: number
  volume: number
  seekNonce: number
  play: (slug: string) => void
  toggle: () => void
  pause: () => void
  seek: (time: number) => void
  setVolume: (v: number) => void
  next: () => void
  prev: () => void
  setTime: (t: number) => void
  setDuration: (d: number) => void
}

function readStoredVolume(): number {
  try {
    const raw = window.localStorage.getItem("eternus-edge:volume")
    if (raw === null) return 1
    const parsed = Number(raw)
    return Number.isFinite(parsed) ? Math.min(1, Math.max(0, parsed)) : 1
  } catch {
    return 1
  }
}

export const usePlayerStore = create<PlayerState>((set, get) => ({
  slug: null,
  playing: false,
  currentTime: 0,
  duration: 0,
  volume: readStoredVolume(),
  seekNonce: 0,

  play: (slug) => {
    const found = findSongGlobal(slug)
    if (!found || !found.song.audio) return
    if (get().slug === slug) {
      set({ playing: true })
    } else {
      set({ slug, playing: true, currentTime: 0, duration: 0 })
    }
  },

  toggle: () => {
    if (!get().slug) return
    set((s) => ({ playing: !s.playing }))
  },

  pause: () => set({ playing: false }),

  seek: (time) => set({ currentTime: time, seekNonce: get().seekNonce + 1 }),

  setVolume: (v) => {
    const clamped = Math.min(1, Math.max(0, v))
    try {
      window.localStorage.setItem("eternus-edge:volume", String(clamped))
    } catch {
      /* private browsing / storage blocked */
    }
    set({ volume: clamped })
  },

  next: () => {
    const slug = get().slug
    if (!slug) return
    const found = findSongGlobal(slug)
    if (!found) return
    const idx = found.wave.songs.findIndex((s) => s.slug === slug)
    const upcoming = found.wave.songs.slice(idx + 1).find((s) => s.audio)
    if (upcoming) get().play(upcoming.slug)
  },

  prev: () => {
    const slug = get().slug
    if (!slug) return
    const found = findSongGlobal(slug)
    if (!found) return
    const idx = found.wave.songs.findIndex((s) => s.slug === slug)
    const preceding = [...found.wave.songs.slice(0, idx)].reverse().find((s) => s.audio)
    if (preceding) get().play(preceding.slug)
  },

  setTime: (t) => set({ currentTime: t }),
  setDuration: (d) => set({ duration: d }),
}))
