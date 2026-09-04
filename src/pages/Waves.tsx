import { Link } from "react-router-dom"

export function Waves() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="label text-subtle">Waves</p>
      <h1 className="mt-2 font-display text-5xl text-fg sm:text-6xl">The waves so far</h1>
      <p className="mt-5 font-ui text-base text-muted">
        Each wave is a layer of the same structure, opened only as far as it's ready to be seen.
      </p>

      <div className="mt-12 space-y-4">
        <Link
          to="/wave-1"
          className="block rounded-2xl border border-border bg-surface p-6 transition hover:border-parchment"
        >
          <div className="flex items-center justify-between">
            <p className="label text-parchment">Open</p>
            <span className="label text-subtle">16 scrolls</span>
          </div>
          <h2 className="mt-2 font-display text-3xl text-fg">Wave 1 — EchoForm</h2>
          <p className="mt-2 font-ui text-sm text-muted">
            The first public opening. Songs written during a year of rebuilding and unexpected clarity.
          </p>
        </Link>

        <div className="rounded-2xl border border-border bg-surface p-6 opacity-60">
          <div className="flex items-center justify-between">
            <p className="label text-subtle">Unopened</p>
          </div>
          <h2 className="mt-2 font-display text-3xl text-fg">Wave 2</h2>
          <p className="mt-2 font-ui text-sm text-muted">Still forming. Not ready for the edge.</p>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-6">
          <div className="flex items-center justify-between">
            <p className="label text-parchment">Companion</p>
          </div>
          <h2 className="mt-2 font-display text-3xl text-fg">Wave 3 — Shard Theory</h2>
          <p className="mt-2 font-ui text-sm text-muted">
            A theory companion offered ahead of its wave, for those who want the frame early.
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
