import { usePlayerStore } from "../store/player"

export function SigilImage({
  src,
  alt,
  slug,
  hasAudio,
  className = "",
}: {
  src: string
  alt: string
  slug?: string
  hasAudio?: boolean
  className?: string
}) {
  const playingSlug = usePlayerStore((s) => s.slug)
  const playing = usePlayerStore((s) => s.playing)
  const play = usePlayerStore((s) => s.play)
  const toggle = usePlayerStore((s) => s.toggle)

  const isCurrent = slug && playingSlug === slug
  const isPlayingThis = isCurrent && playing

  function handlePlay(e: React.MouseEvent) {
    e.preventDefault()
    e.stopPropagation()
    if (!slug) return
    if (isCurrent) toggle()
    else play(slug)
  }

  return (
    <div className={`group relative aspect-square overflow-hidden rounded-2xl border border-border bg-raised ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
      />
      {hasAudio && slug && (
        <button
          type="button"
          onClick={handlePlay}
          aria-label={isPlayingThis ? "Pause" : "Play"}
          className={`absolute inset-0 flex items-center justify-center bg-ink/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 focus-visible:opacity-100 touch:opacity-100 ${isCurrent ? "opacity-100" : ""}`}
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-parchment text-ink shadow-lg">
            {isPlayingThis ? (
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="ml-0.5">
                <path d="M7 5l12 7-12 7z" />
              </svg>
            )}
          </span>
        </button>
      )}
    </div>
  )
}
