import { useState } from "react"
import { Link, Navigate, useParams } from "react-router-dom"
import { getWave } from "../lib/waves"
import { SigilImage } from "../components/SigilImage"

export function WaveIndex() {
  const { waveSlug = "" } = useParams()
  const [query, setQuery] = useState("")
  const wave = getWave(waveSlug)

  if (!wave) return <Navigate to="/waves" replace />

  const filtered = wave.songs.filter((song) => {
    const q = query.trim().toLowerCase()
    if (!q) return true
    return (
      song.title.toLowerCase().includes(q) ||
      song.tone.toLowerCase().includes(q) ||
      song.themes.some((t) => t.toLowerCase().includes(q))
    )
  })

  const hasAnyAudio = wave.songs.some((s) => s.audio)

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="label text-subtle">Wave {wave.number}</p>
      <h1 className="mt-2 font-display text-5xl text-fg sm:text-6xl">{wave.canonName}</h1>
      {wave.subtitle && <p className="mt-1 font-display text-xl italic text-parchment">{wave.subtitle}</p>}
      <p className="mt-4 max-w-2xl font-ui text-base text-muted">{wave.description}</p>
      {!hasAnyAudio && (
        <p className="label mt-3 inline-block rounded-full border border-border px-4 py-1.5 text-subtle">
          Lyrics only — audio coming later
        </p>
      )}

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Filter by title, tone, or theme"
        className="label mt-8 w-full max-w-md rounded-full border border-border bg-surface px-5 py-3 text-fg placeholder:text-subtle focus:border-parchment focus:outline-none"
      />

      <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
        {filtered.map((song) => {
          const num = wave.songs.indexOf(song) + 1
          return (
            <Link key={song.slug} to={`/${wave.slug}/${song.slug}`} className="group">
              <div className="relative">
                <SigilImage
                  src={song.sigil}
                  alt={`${song.title} sigil`}
                  slug={song.slug}
                  hasAudio={!!song.audio}
                />
                <span className="label absolute left-2 top-2 rounded bg-ink/60 px-2 py-1 text-parchment">
                  {String(num).padStart(2, "0")}
                </span>
                {song.forthcoming && (
                  <span className="label absolute bottom-2 right-2 rounded bg-ink/70 px-2 py-1 text-subtle">
                    Soon
                  </span>
                )}
              </div>
              <p className="mt-3 font-display text-lg text-fg group-hover:text-parchment">{song.title}</p>
              <p className="label mt-1 line-clamp-2 text-subtle">{song.tone}</p>
            </Link>
          )
        })}
        {filtered.length === 0 && (
          <p className="col-span-full font-ui text-sm text-muted">No scrolls match that filter.</p>
        )}
      </div>
    </div>
  )
}
