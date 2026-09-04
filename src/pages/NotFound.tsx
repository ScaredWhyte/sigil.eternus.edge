import { Link } from "react-router-dom"

export function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-4 py-28 text-center sm:px-6">
      <p className="label text-subtle">404</p>
      <h1 className="mt-3 font-display text-4xl text-fg">This scroll doesn't exist.</h1>
      <p className="mt-4 font-display text-lg italic text-muted">
        Some paths in the vault stay quiet. This is one of them.
      </p>
      <Link
        to="/"
        className="label mt-8 rounded-full border border-border px-6 py-3 text-fg transition hover:border-parchment"
      >
        Back to the edge
      </Link>
    </div>
  )
}
