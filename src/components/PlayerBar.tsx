import { usePlayerStore } from "../store/player"
import { findSongGlobal } from "../lib/waves"
import { Link } from "react-router-dom"

function formatTime(t: number): string {
  if (!Number.isFinite(t)) return "0:00"
  const m = Math.floor(t / 60)
  const s = Math.floor(t % 60)
  return `${m}:${s.toString().padStart(2, "0")}`
}

export function PlayerBar() {
  const slug = usePlayerStore((s) => s.slug)
  const playing = usePlayerStore((s) => s.playing)
  const currentTime = usePlayerStore((s) => s.currentTime)
  const duration = usePlayerStore((s) => s.duration)
  const volume = usePlayerStore((s) => s.volume)
  const toggle = usePlayerStore((s) => s.toggle)
  const seek = usePlayerStore((s) => s.seek)
  const setVolume = usePlayerStore((s) => s.setVolume)
  const next = usePlayerStore((s) => s.next)
  const prev = usePlayerStore((s) => s.prev)

  const found = slug ? findSongGlobal(slug) : undefined
  if (!found) return null
  const { wave, song } = found

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-surface/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-2.5 sm:gap-4">
        <img
          src={song.sigil}
          alt=""
          className="h-11 w-11 flex-shrink-0 rounded-md border border-border object-cover sm:h-12 sm:w-12"
        />

        <div className="min-w-0 flex-shrink-0 sm:w-40">
          <Link
            to={`/${wave.slug}/${song.slug}`}
            className="block truncate font-display text-base text-fg hover:text-parchment sm:text-lg"
          >
            {song.title}
          </Link>
          <span className="label hidden text-subtle sm:block">
            Wave {wave.number} · {wave.canonName}
          </span>
        </div>

        <button
          type="button"
          onClick={prev}
          aria-label="Previous"
          className="hidden h-8 w-8 flex-shrink-0 items-center justify-center text-muted hover:text-fg sm:flex"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <path d="M6 6h2v12H6zM18 6v12l-9-6z" />
          </svg>
        </button>

        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? "Pause" : "Play"}
          className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-parchment text-ink transition hover:scale-105"
        >
          {playing ? (
            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
              <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" className="ml-0.5">
              <path d="M7 5l12 7-12 7z" />
            </svg>
          )}
        </button>

        <button
          type="button"
          onClick={next}
          aria-label="Next"
          className="hidden h-8 w-8 flex-shrink-0 items-center justify-center text-muted hover:text-fg sm:flex"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <path d="M16 6h2v12h-2zM6 6v12l9-6z" />
          </svg>
        </button>

        <div className="flex flex-1 items-center gap-2 min-w-0">
          <span className="label hidden w-9 flex-shrink-0 text-right text-subtle sm:block">
            {formatTime(currentTime)}
          </span>
          <input
            type="range"
            min={0}
            max={duration || 0}
            step={0.1}
            value={Math.min(currentTime, duration || 0)}
            onChange={(e) => seek(Number(e.target.value))}
            className="h-1 w-full flex-1 cursor-pointer appearance-none rounded-full bg-border accent-parchment"
          />
          <span className="label hidden w-9 flex-shrink-0 text-subtle sm:block">{formatTime(duration)}</span>
        </div>

        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
          aria-label="Volume"
          className="hidden h-1 w-20 flex-shrink-0 cursor-pointer appearance-none rounded-full bg-border accent-parchment md:block"
        />
      </div>
    </div>
  )
}
