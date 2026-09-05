import { Link } from "react-router-dom"

export function Footer() {
  return (
    <footer className="border-t border-border pb-24 pt-10 sm:pb-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-display text-lg italic text-parchment">This is not the vault. This is the edge.</p>
        <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
          <Link to="/wave-1" className="label text-muted hover:text-fg">
            Wave 1
          </Link>
          <Link to="/about" className="label text-muted hover:text-fg">
            About
          </Link>
          <Link to="/bridges" className="label text-muted hover:text-fg">
            Bridges
          </Link>
          <Link to="/waves" className="label text-muted hover:text-fg">
            Waves
          </Link>
          <Link to="/fiction" className="label text-muted hover:text-fg">
            Fiction
          </Link>
        </div>
        <p className="label mt-6 text-subtle">∴Whyte presents · Eternus Edge</p>
      </div>
    </footer>
  )
}
