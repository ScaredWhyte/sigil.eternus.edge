import { Link } from "react-router-dom"
import { waves } from "../lib/waves"

export function Waves() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="label text-subtle">Waves</p>
      <h1 className="mt-2 font-display text-5xl text-fg sm:text-6xl">The waves so far</h1>
      <p className="mt-5 font-ui text-base text-muted">
        Each wave is a layer of the same structure, opened only as far as it's ready to be seen.
      </p>

      <div className="mt-12 space-y-4">
        {waves.map((wave) => {
          const hasAnyAudio = wave.songs.some((s) => s.audio)
          const written = wave.songs.filter((s) => s.lyrics).length
          return (
            <Link
              key={wave.slug}
              to={`/${wave.slug}`}
              className="block rounded-2xl border border-border bg-surface p-6 transition hover:border-parchment"
            >
              <div className="flex items-center justify-between">
                <p className="label text-parchment">Open</p>
                <span className="label text-subtle">
                  {written}/{wave.songs.length} scrolls{!hasAnyAudio ? " · lyrics only" : ""}
                </span>
              </div>
              <h2 className="mt-2 font-display text-3xl text-fg">
                Wave {wave.number} — {wave.canonName}
              </h2>
              {wave.subtitle && <p className="font-display italic text-parchment">{wave.subtitle}</p>}
              <p className="mt-2 font-ui text-sm text-muted">{wave.description}</p>
            </Link>
          )
        })}

        <div className="rounded-2xl border border-border bg-surface p-6">
          <p className="label text-parchment">Companion</p>
          <h2 className="mt-2 font-display text-3xl text-fg">Shard Theory — the theory</h2>
          <p className="mt-2 font-ui text-sm text-muted">
            A companion essay offered ahead of the wave, for those who want the frame early.
          </p>
          <a
            href="/artifacts/shard-theory-companion.pdf"
            target="_blank"
            rel="noreferrer"
            className="label mt-4 inline-block rounded-full border border-border px-5 py-2 text-fg transition hover:border-parchment"
          >
            Read the companion PDF
          </a>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-6">
          <p className="label text-parchment">Artifact</p>
          <h2 className="mt-2 font-display text-3xl text-fg">The Questioning Heart</h2>
          <p className="mt-2 font-ui text-sm text-muted">
            Keep this close; it sits at the edge of the wave and reminds the scrolls to stay curious.
          </p>
          <a
            href="/artifacts/questioning-heart.pdf"
            target="_blank"
            rel="noreferrer"
            className="label mt-4 inline-block rounded-full border border-border px-5 py-2 text-fg transition hover:border-parchment"
          >
            Read the PDF
          </a>
        </div>
      </div>
    </div>
  )
}
