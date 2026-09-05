import { Link, Navigate, useParams } from "react-router-dom"
import { shows } from "../lib/fiction/shows"

function renderScriptLine(line: string, key: number) {
  const trimmed = line.trim()
  if (trimmed === "") return <div key={key} className="h-4" aria-hidden="true" />
  if (trimmed === "---") return <hr key={key} className="my-6 border-border" />

  if (trimmed.startsWith("### ")) {
    return (
      <p key={key} className="label mt-8 mb-3 text-parchment">
        {trimmed.slice(4)}
      </p>
    )
  }
  if (trimmed.startsWith("## ")) {
    return (
      <p key={key} className="label mt-2 mb-4 text-subtle">
        {trimmed.slice(3).replace(/["#]/g, "")}
      </p>
    )
  }

  const sceneHeading = trimmed.match(/^\*\*(INT\.|EXT\.).+\*\*$/)
  if (sceneHeading) {
    return (
      <p key={key} className="label mt-6 mb-2 text-fg">
        {trimmed.replace(/\*\*/g, "")}
      </p>
    )
  }

  const speaker = trimmed.match(/^\*\*([A-Z][A-Z\s().'’]+)\*\*$/)
  if (speaker) {
    return (
      <p key={key} className="label mt-4 text-subtle">
        {speaker[1]}
      </p>
    )
  }

  if (trimmed.startsWith("(") && trimmed.endsWith(")")) {
    return (
      <p key={key} className="font-ui text-sm italic text-subtle">
        {trimmed}
      </p>
    )
  }

  if (trimmed.startsWith("*") && trimmed.endsWith("*") && !trimmed.startsWith("**")) {
    return (
      <p key={key} className="font-ui text-sm italic text-muted">
        {trimmed.slice(1, -1)}
      </p>
    )
  }

  return (
    <p key={key} className="font-display text-lg leading-relaxed text-fg">
      {trimmed}
    </p>
  )
}

export function EpisodePage() {
  const { showSlug = "", episodeSlug = "" } = useParams()
  const show = shows.find((s) => s.slug === showSlug)
  const episode = show?.episodes.find((e) => e.slug === episodeSlug)

  if (!show) return <Navigate to="/fiction" replace />
  if (!episode) return <Navigate to={`/fiction/shows/${show.slug}`} replace />

  const idx = show.episodes.findIndex((e) => e.slug === episodeSlug)
  const prev = idx > 0 ? show.episodes[idx - 1] : null
  const next = idx < show.episodes.length - 1 ? show.episodes[idx + 1] : null

  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="text-center">
        <p className="label text-subtle">
          {show.title} · {episode.subtitle}
        </p>
        <h1 className="mt-2 font-display text-4xl text-fg sm:text-5xl">{episode.title}</h1>
        <p className="mt-4 font-display text-lg italic text-muted">{episode.logline}</p>
      </div>

      <div className="mt-10 space-y-1 border-t border-border pt-10">
        {episode.script.split("\n").map((line, i) => renderScriptLine(line, i))}
      </div>

      <div className="mt-10 border-t border-border pt-8 text-center">
        <p className="font-ui text-sm text-muted">Written by {show.writtenBy}</p>
      </div>

      <nav className="mt-14 flex items-center justify-between border-t border-border pt-8">
        {prev ? (
          <Link to={`/fiction/shows/${show.slug}/${prev.slug}`} className="group max-w-[45%]">
            <p className="label text-subtle">← Previous</p>
            <p className="mt-1 truncate font-display text-lg text-fg group-hover:text-parchment">{prev.title}</p>
          </Link>
        ) : (
          <Link to={`/fiction/shows/${show.slug}`} className="label text-subtle hover:text-fg">
            ← {show.title}
          </Link>
        )}
        {next ? (
          <Link to={`/fiction/shows/${show.slug}/${next.slug}`} className="group max-w-[45%] text-right">
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
