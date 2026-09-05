import { Link, Navigate, useParams } from "react-router-dom"
import { shows } from "../lib/fiction/shows"

export function ShowPage() {
  const { showSlug = "" } = useParams()
  const show = shows.find((s) => s.slug === showSlug)

  if (!show) return <Navigate to="/fiction" replace />

  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16">
      <img
        src={show.cover}
        alt=""
        className="mx-auto aspect-square w-full max-w-xs rounded-2xl border border-border object-cover"
      />

      <div className="mt-8 text-center">
        <p className="label text-subtle">Fiction · Show</p>
        <h1 className="mt-2 font-display text-4xl text-fg sm:text-5xl">{show.title}</h1>
        <p className="font-display mt-3 text-lg italic text-parchment">{show.tagline}</p>
      </div>

      <div className="mt-10 border-t border-border pt-8">
        <p className="label text-subtle">Logline</p>
        <p className="mt-2 font-display text-xl italic text-fg">{show.logline}</p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <p className="label text-subtle">Format</p>
          <p className="mt-1 font-ui text-sm text-muted">{show.format}</p>
        </div>
        <div>
          <p className="label text-subtle">Comparables</p>
          <p className="mt-1 font-ui text-sm text-muted">{show.comparables}</p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {show.tone.map((t) => (
          <span key={t} className="label rounded-full border border-border px-3 py-1.5 text-muted">
            {t}
          </span>
        ))}
      </div>

      <div className="mt-12 border-t border-border pt-8">
        <p className="label mb-5 text-subtle">Characters</p>
        <div className="space-y-6">
          {show.characters.map((c) => (
            <div key={c.name}>
              <h3 className="font-display text-xl text-fg">
                {c.name}
                {c.age && <span className="label ml-2 text-subtle">{c.age}</span>}
              </h3>
              <p className="mt-1 font-ui text-sm text-muted">{c.description}</p>
              <p className="mt-1 font-ui text-sm italic text-subtle">{c.voice}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 border-t border-border pt-8">
        <p className="label mb-5 text-subtle">Episodes</p>
        <div className="space-y-3">
          {show.episodes.map((ep, i) => (
            <Link
              key={ep.slug}
              to={`/fiction/shows/${show.slug}/${ep.slug}`}
              className="group block rounded-2xl border border-border bg-surface p-5 transition hover:border-parchment"
            >
              <p className="label text-subtle">{ep.subtitle}</p>
              <h3 className="mt-1 font-display text-2xl text-fg group-hover:text-parchment">
                {String(i + 1).padStart(2, "0")} · {ep.title}
              </h3>
              <p className="mt-2 font-ui text-sm text-muted">{ep.synopsis}</p>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-14 border-t border-border pt-8 text-center">
        <p className="font-ui text-sm text-muted">Written by {show.writtenBy}</p>
      </div>
    </div>
  )
}
