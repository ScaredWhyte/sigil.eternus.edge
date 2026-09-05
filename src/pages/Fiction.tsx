import { Link } from "react-router-dom"
import { stories } from "../lib/fiction/stories"
import { shows } from "../lib/fiction/shows"

export function Fiction() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="label text-subtle">Fiction</p>
      <h1 className="mt-2 font-display text-5xl text-fg sm:text-6xl">Beyond the songs</h1>
      <p className="mt-5 max-w-2xl font-ui text-base text-muted">
        Stories and shows that share the same architecture as the music, told in a different shape.
      </p>

      <section className="mt-14">
        <p className="label mb-5 text-subtle">Stories</p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {stories.map((story) => (
            <Link
              key={story.slug}
              to={`/fiction/stories/${story.slug}`}
              className="group overflow-hidden rounded-2xl border border-border bg-surface transition hover:border-parchment"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={story.cover}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-2xl text-fg group-hover:text-parchment">{story.title}</h3>
                <p className="label mt-1 text-subtle">{story.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <p className="label mb-5 text-subtle">Shows</p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {shows.map((show) => (
            <Link
              key={show.slug}
              to={`/fiction/shows/${show.slug}`}
              className="group overflow-hidden rounded-2xl border border-border bg-surface transition hover:border-parchment"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={show.cover}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-2xl text-fg group-hover:text-parchment">{show.title}</h3>
                <p className="label mt-1 text-subtle">{show.episodes.length} episode{show.episodes.length === 1 ? "" : "s"}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
