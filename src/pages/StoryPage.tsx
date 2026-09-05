import { Navigate, useParams } from "react-router-dom"
import { stories } from "../lib/fiction/stories"

export function StoryPage() {
  const { storySlug = "" } = useParams()
  const story = stories.find((s) => s.slug === storySlug)

  if (!story) return <Navigate to="/fiction" replace />

  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16">
      <img
        src={story.cover}
        alt=""
        className="mx-auto aspect-square w-full max-w-xs rounded-2xl border border-border object-cover"
      />

      <div className="mt-8 text-center">
        <p className="label text-subtle">Fiction · Story</p>
        <h1 className="mt-2 font-display text-4xl text-fg sm:text-5xl">{story.title}</h1>
        <p className="font-display mt-1 text-lg italic text-subtle">{story.subtitle}</p>
      </div>

      <p className="mt-10 text-center font-display text-xl italic text-parchment">{story.dedication}</p>

      <blockquote className="mt-8 border-l-2 border-border pl-5">
        <p className="font-display text-xl italic text-fg">“{story.epigraph}”</p>
        <p className="label mt-2 text-subtle">— {story.epigraphSource}</p>
      </blockquote>

      <div className="mt-10 border-t border-border pt-8">
        <p className="label text-subtle">Author's Note</p>
        <div className="mt-3 space-y-4 font-ui text-sm leading-relaxed text-muted">
          {story.authorsNote.split("\n\n").map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {story.themes.map((theme) => (
          <span key={theme} className="label rounded-full border border-border px-3 py-1.5 text-muted">
            {theme}
          </span>
        ))}
      </div>

      {story.parts.map((part) => (
        <div key={part.title} className="mt-16 border-t border-border pt-10">
          <p className="label text-subtle">
            {part.title} · {part.range}
          </p>
          <h2 className="mt-2 font-display text-3xl text-fg">{part.subtitle}</h2>
          <p className="mt-2 font-display text-lg italic text-parchment">{part.epigraph}</p>

          {part.books.map((book) => (
            <div key={book.number} className="mt-10">
              <p className="label text-subtle">Book {book.number}</p>
              <h3 className="mt-1 font-display text-2xl text-fg">{book.title}</h3>
              <div className="mt-4 space-y-4 font-display text-xl leading-relaxed text-fg">
                {book.text.split("\n\n").map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}

      <div className="mt-14 border-t border-border pt-8 text-center">
        <p className="font-ui text-sm text-muted">Written by {story.writtenBy}</p>
      </div>
    </div>
  )
}
