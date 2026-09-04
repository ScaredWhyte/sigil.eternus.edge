import { Link, Navigate, useParams } from "react-router-dom"
import { getAdjacentSongs, getSong } from "../lib/songs"
import { usePlayerStore } from "../store/player"
import { LyricsRenderer } from "../components/LyricsRenderer"

export function SongScroll() {
  const { slug = "" } = useParams()
  const song = getSong(slug)
  const play = usePlayerStore((s) => s.play)
  const toggle = usePlayerStore((s) => s.toggle)
  const playingSlug = usePlayerStore((s) => s.slug)
  const playing = usePlayerStore((s) => s.playing)

  if (!song) return <Navigate to="/wave-1" replace />

  const { prev, next } = getAdjacentSongs(slug)
  const isCurrent = playingSlug === song.slug
  const isPlayingThis = isCurrent && playing

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <img
        src={song.sigil}
        alt={`${song.title} sigil`}
        className="mx-auto aspect-square w-full max-w-sm rounded-2xl border border-border object-cover"
      />

      <div className="mt-8 text-center">
        <h1 className="font-display text-4xl text-fg sm:text-5xl">{song.title}</h1>
        <p className="font-display mt-1 text-lg italic text-subtle">Song Scroll — v1.0</p>

        {song.audio ? (
          <button
            type="button"
            onClick={() => (isCurrent ? toggle() : play(song.slug))}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-parchment px-6 py-2.5 font-ui text-sm font-medium text-ink transition hover:opacity-90"
          >
            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
              {isPlayingThis ? <path d="M6 5h4v14H6zM14 5h4v14h-4z" /> : <path d="M7 5l12 7-12 7z" />}
            </svg>
            {isPlayingThis ? "Pause scroll" : "Play scroll"}
          </button>
        ) : (
          <p className="label mt-6 inline-block rounded-full border border-border px-5 py-2 text-subtle">
            Audio master forthcoming
          </p>
        )}

        {song.mood && <p className="label mt-4 text-subtle">{song.mood}</p>}
      </div>

      <div className="mt-12 border-t border-border pt-8">
        <p className="label text-subtle">Tone</p>
        <p className="mt-2 font-display text-xl italic text-fg">{song.tone}</p>
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {song.themes.map((theme) => (
          <span key={theme} className="label rounded-full border border-border px-3 py-1.5 text-muted">
            {theme}
          </span>
        ))}
      </div>

      {song.formOnly && (
        <p className="label mt-8 rounded-xl border border-border bg-surface px-4 py-3 text-subtle">
          This public scroll holds the form, not the full verse.
        </p>
      )}

      <div className="mt-10 border-t border-border pt-10">
        <LyricsRenderer lyrics={song.lyrics} />
      </div>

      {song.notes && (
        <div className="mt-10 border-t border-border pt-8">
          <p className="label text-subtle">Notes</p>
          <p className="mt-2 font-display text-lg italic text-muted">{song.notes}</p>
        </div>
      )}

      <div className="mt-10 border-t border-border pt-8">
        <p className="label text-subtle">Credits</p>
        <p className="mt-2 font-ui text-sm text-muted">Written by {song.writtenBy}</p>
        <p className="font-ui text-sm text-muted">Produced with Suno</p>
      </div>

      <nav className="mt-14 flex items-center justify-between border-t border-border pt-8">
        {prev ? (
          <Link to={`/wave-1/${prev.slug}`} className="group max-w-[45%]">
            <p className="label text-subtle">← Previous</p>
            <p className="mt-1 truncate font-display text-lg text-fg group-hover:text-parchment">{prev.title}</p>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link to={`/wave-1/${next.slug}`} className="group max-w-[45%] text-right">
            <p className="label text-subtle">Next →</p>
            <p className="mt-1 truncate font-display text-lg text-fg group-hover:text-parchment">{next.title}</p>
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </div>
  )
}
