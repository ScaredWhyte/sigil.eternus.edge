import { useEffect, useRef } from "react"
import { usePlayerStore } from "../store/player"
import { findSongGlobal } from "../lib/waves"

/** Single hidden <audio> element that survives route changes, driven by the player store. */
export function GlobalAudio() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const slug = usePlayerStore((s) => s.slug)
  const playing = usePlayerStore((s) => s.playing)
  const volume = usePlayerStore((s) => s.volume)
  const seekNonce = usePlayerStore((s) => s.seekNonce)
  const currentTime = usePlayerStore((s) => s.currentTime)
  const setTime = usePlayerStore((s) => s.setTime)
  const setDuration = usePlayerStore((s) => s.setDuration)
  const pause = usePlayerStore((s) => s.pause)
  const next = usePlayerStore((s) => s.next)

  const song = slug ? findSongGlobal(slug)?.song : undefined

  useEffect(() => {
    const el = audioRef.current
    if (!el || !song?.audio) return
    el.src = song.audio
    el.currentTime = 0
    if (playing) {
      el.play().catch(() => pause())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug])

  useEffect(() => {
    const el = audioRef.current
    if (!el) return
    if (playing) {
      el.play().catch(() => pause())
    } else {
      el.pause()
    }
  }, [playing, pause])

  useEffect(() => {
    const el = audioRef.current
    if (el) el.volume = volume
  }, [volume])

  useEffect(() => {
    const el = audioRef.current
    if (el && Math.abs(el.currentTime - currentTime) > 0.5) {
      el.currentTime = currentTime
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seekNonce])

  return (
    <audio
      ref={audioRef}
      onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)}
      onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
      onEnded={() => next()}
      preload="metadata"
    />
  )
}
