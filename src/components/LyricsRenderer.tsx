function renderInline(text: string, key: number) {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).filter(Boolean)
  return (
    <span key={key}>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={i} className="text-parchment">
              {part.slice(2, -2)}
            </strong>
          )
        }
        if (part.startsWith("*") && part.endsWith("*")) {
          return (
            <em key={i} className="text-muted">
              {part.slice(1, -1)}
            </em>
          )
        }
        return <span key={i}>{part}</span>
      })}
    </span>
  )
}

/** Renders song-scroll lyrics: [HEADING] lines become small-caps glyph headings, blank lines are breath. */
export function LyricsRenderer({ lyrics }: { lyrics: string }) {
  const lines = lyrics.split("\n")

  return (
    <div className="space-y-1 font-display text-xl leading-relaxed text-fg sm:text-2xl">
      {lines.map((line, i) => {
        const trimmed = line.trim()
        if (trimmed === "") {
          return <div key={i} className="h-4" aria-hidden="true" />
        }
        const headingMatch = trimmed.match(/^\[(.+)\]$/)
        if (headingMatch) {
          return (
            <p key={i} className="label mt-6 mb-2 text-subtle first:mt-0">
              {headingMatch[1]}
            </p>
          )
        }
        return (
          <p key={i} className="font-ui text-sm text-muted">
            {trimmed.startsWith("##") ? (
              <span className="label text-subtle">{trimmed.replace(/^#+\s*/, "")}</span>
            ) : (
              <span className="font-display text-xl text-fg sm:text-2xl">{renderInline(trimmed, i)}</span>
            )}
          </p>
        )
      })}
    </div>
  )
}
