import { Link } from "react-router-dom"
import { songs } from "../lib/songs"
import { SigilImage } from "../components/SigilImage"

const mosaicSlugs = [
  "again",
  "cut-to-burn",
  "recursion",
  "patience-humility-acceptance",
  "fresh-roots",
  "gliss-dynasty",
  "uncanny-valley",
  "echos-in-the-dark",
]

export function Landing() {
  const mosaic = mosaicSlugs.map((slug) => songs.find((s) => s.slug === slug)!).filter(Boolean)

  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-16 sm:px-6 sm:pt-24">
        <p className="label text-subtle">∴Whyte presents</p>
        <h1 className="mt-3 font-display text-6xl leading-[0.95] tracking-tight text-fg sm:text-7xl">
          Eternus Edge
        </h1>
        <p className="mt-6 max-w-xl font-display text-2xl italic text-parchment">
          This is not the vault. This is the edge.
        </p>
        <p className="mt-5 max-w-2xl font-ui text-base leading-relaxed text-muted">
          Wave 1 is the human-facing layer of a larger structure — Song Scrolls written during a
          year of rebuilding, recalibration, and unexpected clarity. The deeper architecture stays
          below. What's here is meant to be seen.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <Link
            to="/wave-1"
            className="rounded-full bg-parchment px-7 py-3 font-ui text-sm font-medium text-ink transition hover:opacity-90"
          >
            Enter Wave 1
          </Link>
          <Link
            to="/about"
            className="label rounded-full border border-border px-7 py-3 text-fg transition hover:border-parchment"
          >
            About the artist
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <SigilImage src="/sigils/wave-one.jpg" alt="Wave 1 EchoForm sigil" className="mx-auto max-w-md" />
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <p className="label mb-5 text-subtle">Wave 1 · EchoForm</p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {mosaic.map((song) => (
            <Link key={song.slug} to={`/wave-1/${song.slug}`}>
              <SigilImage src={song.sigil} alt={`${song.title} sigil`} slug={song.slug} hasAudio={!!song.audio} />
              <p className="mt-2 truncate font-display text-sm text-muted">{song.title}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-3">
          <Link
            to="/waves"
            className="rounded-2xl border border-border bg-surface p-6 transition hover:border-parchment"
          >
            <p className="label text-subtle">Open</p>
            <h3 className="mt-2 font-display text-2xl text-fg">Wave 1 EchoForm</h3>
            <p className="mt-2 font-ui text-sm text-muted">Sixteen Song Scrolls, the first public opening.</p>
          </Link>
          <a
            href="/artifacts/questioning-heart.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-border bg-surface p-6 transition hover:border-parchment"
          >
            <p className="label text-subtle">Artifact</p>
            <h3 className="mt-2 font-display text-2xl text-fg">The Questioning Heart</h3>
            <p className="mt-2 font-ui text-sm text-muted">A companion PDF that keeps the scrolls curious.</p>
          </a>
          <Link
            to="/waves"
            className="rounded-2xl border border-border bg-surface p-6 transition hover:border-parchment"
          >
            <p className="label text-subtle">Companion</p>
            <h3 className="mt-2 font-display text-2xl text-fg">Wave 3 Shard Theory</h3>
            <p className="mt-2 font-ui text-sm text-muted">A theory companion, offered ahead of its wave.</p>
          </Link>
        </div>
      </section>
    </>
  )
}
