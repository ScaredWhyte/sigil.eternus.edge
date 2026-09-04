# Sigil ✶ Eternus :: Edge

The public-facing Song Scroll Vault for ∴Whyte's music — Wave 1 (EchoForm) and its companions.

> This is not the vault. This is the edge.

## Stack

- Vite + React + TypeScript
- React Router for `/`, `/wave-1`, `/wave-1/:slug`, `/about`, `/bridges`, `/waves`
- Tailwind CSS v4 (design tokens defined in `src/index.css`)
- Zustand for the global audio player, which survives route changes

## Content sources

- Song scroll text, tone, themes, and credits live in `src/lib/songs.ts`, sourced from the
  public archive repo (`ScaredWhyte/-Whyte-Presents-Eternus-Edge`).
- Audio streams from that same archive repo via jsDelivr, pinned to a fixed commit SHA in
  `src/lib/media.ts` so links never rot. The one WAV master over jsDelivr's size cap
  (`Patience Humility Acceptance`) is served from `raw.githubusercontent.com` instead.
- Sigils are compressed, web-sized JPEGs committed under `public/sigils/`.
- Companion PDFs (`The Questioning Heart`, the Wave 3 Shard Theory companion) live under
  `public/artifacts/`.

Wave 2 stays unopened — no public masters exist for it yet.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```
